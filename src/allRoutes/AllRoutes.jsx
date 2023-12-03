
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ProductPage from '../pages/ProductPage'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Payment from '../pages/Payment'
import Cart from '../pages/Cart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/Products/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes