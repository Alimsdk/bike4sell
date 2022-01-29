import { useState } from 'react';

const usePurchaseInfo = () => {
    const [selectedProduct,setSelectedProduct]=useState(null);
   console.log(selectedProduct);
    return {
        selectedProduct,setSelectedProduct
    }
    
};

export default usePurchaseInfo;