import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useContact = () => {
    const [loading, setloading] = useState(false);
    
    const search = async({fullName})=>{
        const success = handleInputErrors({fullName});

        if(!success){
            return;
        }

        setloading(true);
        try {
            
            const res = await fetch("/api/contact/get",{
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({fullName})
            });

            const data = await res.json();
            
            if(data.error){
                throw new Error(data.error);
            }

            return data;
        } catch (error) {
            toast.error(error.message);
        } finally{
            setloading(false);
        }
    }
    return { loading, search};
}

export default useContact

function handleInputErrors({fullName}){
    if(!fullName){
        toast.error("Please Enter the contact name");
        return false;
    }
    return true;
}