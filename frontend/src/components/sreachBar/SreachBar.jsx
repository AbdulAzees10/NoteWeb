import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const SreachBar = ({value ,onchange,handleSearch,onClearSreach}) => {
  return (
    <div className='w-80 flex items-center bg-green-200 px-4 rounded-md'>

     <input 
     type='text'
     placeholder='Sreach Notes'
     className='w-80 text-sm bg-green-200 py-[11px] outline-none'
      value={value} 
      onchange={onchange} />

      {value ?
      <IoMdClose  className='text-slate-700 cursor-pointer hover:text-red-500' onClick={onClearSreach}/> :
      <FaMagnifyingGlass  className='text-green-400 cursor-pointer hover:text-red-500'  onClick={handleSearch}/>};
      
      
      
    </div>
  )
}

export default SreachBar