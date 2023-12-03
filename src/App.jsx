import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import {Navbar} from './components/Navbar/Navbar'
import AllRoutes from './allRoutes/AllRoutes'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <>
    {/* <Navbar/> */}
     <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
