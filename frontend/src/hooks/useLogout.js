import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    const [loading, setloading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async()=>{
        setloading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type" : "application/json" }
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }
            localStorage.removeItem("user-info");
            setAuthUser(null);
            
        } catch (error) {
            toast.error(error.message);
        }finally{
            setloading(false);
        }
    }
    return {loading, logout};

}

export default useLogout
