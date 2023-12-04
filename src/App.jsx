import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import AllRoutes from './allRoutes/AllRoutes'
import { Footer } from './components/Footer/Footer'
import store from './redux/store.js';
import { Provider } from 'react-redux'
function App() {
  

  return (
    <Provider store={store}>
    <Navbar/>
     <AllRoutes/>
    <Footer/>
    </Provider>
  )
}

export default App
