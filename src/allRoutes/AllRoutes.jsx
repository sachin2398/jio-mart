import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ProductPage from '../pages/ProductPage'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Payment from '../pages/Payment'
import CartPage from '../pages/CartPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/Products/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/cartPage" element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes