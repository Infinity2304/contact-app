import React, { useState } from 'react'
import useLogin from '../../../hooks/useLogin'

const Login = () => {

    const [inputs, setInputs] = useState({
        userName: "",
        password: ""
    })

    const { loading, login } = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(inputs);
        
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg bg-slate-900'>
                <div className='flex justify-center'>
                    <h1 className='p-2 text-3xl'>Contact <span className='text-blue-600'>Manager</span></h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='username_field'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="Username" className="input" 
                            value={inputs.userName}
                            onChange={(e)=> setInputs({...inputs, userName:e.target.value})}
                        />
                    </div>
                    <div className='password_field'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input" 
                            value={inputs.password}
                            onChange={(e)=> setInputs({...inputs, password:e.target.value})}
                        />
                    </div>
                    <div className='submit_btn pt-6 flex justify-center'>
                        <button className="btn w-full">{loading? <span className='loading loading-spinner'></span> : "Submit" }</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
