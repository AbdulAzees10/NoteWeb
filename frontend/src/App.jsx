import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import './App.css'



function App() {
  

  return (
  <BrowserRouter>
     <Routes>
        <Route path='/dashboard'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
     </Routes>
  </BrowserRouter>
    
  )
}

export default App
