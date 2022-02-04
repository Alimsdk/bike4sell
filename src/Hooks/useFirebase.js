import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user,setUser]=useState(null);
    const [admin,setAdmin]=useState(false);
    const [model,setModel]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const auth= getAuth();
    const googleProvider=new GoogleAuthProvider();

    const signInUsingGoogle=(location,navigate)=>{
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
           
            setUser(user);
            saveUserToDb(user,'PUT');
            const destination = location?.state?.from || '/';
            navigate(destination);
        }).catch(error=>{
            console.log(error.message);
        }).finally(()=> setIsLoading(false))
    }

    const registerNewUser=(name,email,password,location,navigate)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
         const newUser={email,password,displayName:name}
         setUser(newUser)
         saveUserToDb(newUser,'POST');
         updateProfile(auth.currentUser,{
             displayName:name
         })
         const destination=location?.state?.from || '/'
         navigate(destination);
        }).catch(error=>{
            console.log(error.message);
            alert(error.message)
        }).finally(()=>setIsLoading(false));
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

    const logInUser=(email,password,location,navigate)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            const destination = location?.state?.from || '/';
            console.log(destination);
                navigate(destination);
           console.log(user);
        }).catch(error=>{
            console.log(error.message);
        }).finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        setIsLoading(true);
       const unsubscribed= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
            setIsLoading(false);
        })
        return ()=> unsubscribed;
    },[])

    useEffect(()=>{
        fetch(`https://frozen-river-22304.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data?.admin));
    },[user?.email])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth).then(()=>{
            setUser(null)
        }).catch(error=>{
            console.log(error.message);
        }).finally(()=>setIsLoading(false))
    }
 console.log('use',user);
    return { 
        user,
        signInUsingGoogle,
        registerNewUser,
        logOut,
        logInUser,
        admin,
        model,
        setModel,
        isLoading
    }
    
};

export default useFirebase;