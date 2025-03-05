import React from 'react'
import Contact from './Contact'

const Contacts = ({contact}) => {
  return (
    <div className='overflow-auto'>
      {contact.length>0 ? contact.map((info) => (<Contact key={contact._id} info={info}/>)) : <p className='text-center'>No Contact</p>}
    </div>
  )
}

export default Contacts
