import React from 'react'
import Contact from '../../contact/Contact'
import { useState } from 'react'
import useContact from '../../../hooks/useContact';
import Contacts from '../../contact/Contacts';
import useLogout from '../../../hooks/useLogout';


const Home = () => {

  const [input,setInput] = useState({fullName:""});
  const [contact, setContact] = useState([]);
  const {loading, search} = useContact();

  const {logout} = useLogout();

  const handleSubmit = async (e)=>{
      e.preventDefault();
      setContact(await search(input));
  }


  return (
    <div>
      <div className='flex flex-col items-center justify-center w-[900px] h-[600px] mx-auto'>
        <div className='w-full h-full p-6 rounded-lg bg-slate-900'>
          <div className='flex justify-center'>
            <h1 className='p-2 text-3xl'>Contact <span className='text-blue-600'>Manager</span></h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='username_field flex flex-col items-center justify-center'>
              <input type="text" placeholder="Search Contact" className="input input-info"
                value={input.fullName}
                onChange={(e)=> setInput({...input, fullName: e.target.value})}
              />
              <button disabled={ input.fullName ? false:true} className="btn btn-info mt-2">Search</button>
            </div>
          </form>

          <div className='contact mt-[100px] ml-[50px] mr-[50px] h-[280px] overflow-auto'>
            <Contacts contact = {contact}/>
            {loading ? <div className='loading loading-spinner flex'></div> : null}
          </div>
          <button onClick={logout} className='btn btn-info mt-2'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Home
