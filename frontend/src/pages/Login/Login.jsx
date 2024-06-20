import React,{useState} from 'react'
import Header from '../../components/Header'
import {Link} from 'react-router-dom'
import PasswordInput from '../../components/input/PasswordInput'




 const Login = () => {

  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [error,serError]=useState('')



  const handleLogin = async (e) =>{
    e.preventDefault();

    
    

  }


  return (
    <> 
     <Header/>
    <div className='flex items-center justify-center m-28'>
      <div className='w-100 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleLogin}>


        <h4 className='text-2xl mb-7'>Login</h4>
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

       
        <button type="submit" className='btn-primary'>Login</button>
        <p>Create New Account ?<Link to="/Signup" className="font-medium text-primary underline">
          Click Here       
        </Link></p>
        </form>
      </div>
      
    </div>

    </>
  
  )
}

export default Login