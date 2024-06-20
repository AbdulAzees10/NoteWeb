import React from 'react'
import ProfileCard from './card/ProfileCard'
import { useNavigate } from 'react-router-dom'
import SreachBar from './sreachBar/SreachBar';

const Header = () => {

 const navigate =useNavigate();

 const OnLogout = () =>{
    navigate("/Login")
 }


  return (
    <div className='flex justify-between bg-blue-300 items-center'>
        <h1 className='bg-transparent  text-black text-xl px-7 py-3'>Notes</h1>
 
        <SreachBar/>

        <ProfileCard OnLogout={OnLogout}/>
    </div>
  )
}

export default Header