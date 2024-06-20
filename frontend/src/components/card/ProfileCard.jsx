import React from 'react'
import  {shortName}  from '../../utils/helper'
const ProfileCard = ({OnLogout}) => {
  return (
   <div className='flex items-center gap-3'>
     <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-green-200'>
        {shortName("Abdul Azees")}
     </div>
     <div>
       <p className='font-medium text-sm '>Abdul </p>
       <button className='text-black-500 text-sm underline' onClick={OnLogout}> Logout</button>
     </div>
   </div>
  )
}

export default ProfileCard