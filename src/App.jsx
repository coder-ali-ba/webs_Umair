import { useState } from 'react'
import './App.css'
import NavbarComp from './Components/NavbarComp'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProjectKickoffModal from './Pages/ContactPage'


function App() {
  

  return (
    <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/contact' element={<ProjectKickoffModal/>}></Route>
     
    </Routes>
      
    
  )
}

export default App
