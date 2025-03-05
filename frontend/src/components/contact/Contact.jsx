import React from 'react'

const Contact = ({info}) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-slate-700 h-full w-full pt-3 overflow-auto'>
                <div className='contact_details flex flex-col items-center'>
                    <div className='name flex items-center gap-4'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Name: </span>
                        </label>
                        <span className='text-base font-bold'>{info.fullName}</span>
                    </div>
                    <div className='number flex items-center gap-4'>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Number: </span>
                        </label>
                        <span className='text-base font-bold'>{info.number}</span>
                    </div>
                    <div className="divider divider-info m-0"></div>
                </div>
            </div>

            {/* <span className='loading loading-spinner'></span> */}
        </div>
    )
}

export default Contact
