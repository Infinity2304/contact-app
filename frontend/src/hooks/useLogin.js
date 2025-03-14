import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setloading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async({userName, password})=>{
        const success = handleInputErrors({userName, password});

        if(!success){
            return;
        }    

        setloading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({userName, password})
            });

            const data = await res.json();
            console.log(data);
            
            if(data.error){
                throw new Error(data.error);
            }

            //Set user data to local storage
            localStorage.setItem("user-info",JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        } finally{
            setloading(false);
        }

    }
    return { loading, login }
}

export default useLogin

function handleInputErrors({userName, password}){
    if(!userName || !password){
        toast.error("Please fill all the fields");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 charecters long");
        return false;
    }

    return true;
}

