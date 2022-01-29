import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser]=useState(null);
    const [admin,setAdmin]=useState(false);
    const auth= getAuth();
    const googleProvider=new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setUser(user);
            saveUserToDb(user,'PUT');
        }).catch(error=>{
            console.log(error.message);
        })
    }

    const registerNewUser=(name,email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
         const newUser={email,password,displayName:name}
         setUser(newUser)
         saveUserToDb(newUser,'POST');
         updateProfile(auth.currentUser,{
             displayName:name
         })
        }).catch(error=>{
            console.log(error.message);
            alert(error.message)
        })
    }

    const saveUserToDb=(user,method)=>{
       fetch('https://frozen-river-22304.herokuapp.com/users',{
           method:method,
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(user)
       }).then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
    }

    const logInUser=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
           console.log(user);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
        return ()=> unsubscribed;
    },[])

    useEffect(()=>{
        fetch(`https://frozen-river-22304.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data?.admin));
    },[user?.email])

    const logOut=()=>{
        signOut(auth).then(()=>{
            setUser(null)
        }).catch(error=>{
            console.log(error.message);
        })
    }

    return { 
        user,
        signInUsingGoogle,
        registerNewUser,
        logOut,
        logInUser,
        admin
    }
    
};

export default useFirebase;