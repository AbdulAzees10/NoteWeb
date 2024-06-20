import React, { useState } from 'react'
import Header from '../../components/Header'
import PasswordInput from '../../components/input/PasswordInput'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [error,setError]=useState('')
  

    const handleSignup = async (e) =>{
      e.preventDefault();

      if(!name){
        setError("please enter your name")
        return;
      }

      if(!email){
        setError("please enter your email")
        return;
      }
      if(!password){
        setError('please enter your password')
        return;
      }
      setError('')

    }


  return (
    <>

      <Header/>
    <div className='flex items-center justify-center m-28'>
      <div className='w-100 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleSignup}>

        <h4 className='text-2xl mb-7'>Signup</h4>
        <input 
        type='text' 
        placeholder='Name' 
        className='input-box'
        value={name}
        onChange={(e)=>setName(e.target.value)}/>

       <input 
        type='Email' 
        placeholder='Email' 
        className='input-box'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <PasswordInput
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
 />

 {error && <p className='text-red-500 text-xs pb-1 '>{error}</p>}

 <button type="submit" className='btn-primary'>
    Signup
 </button>

 <p className='text-sm text-center mt-4 '>
  Already have an account ?{ " "}
  <Link to="/login"  className='font-medium text-primary underline'>
    Login
  </Link>

 </p>
      

        </form>
        </div>
        </div>
    </>
  )
}

export default Signup