import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Cart/' element={<Cart/>}/>
          <Route path='PlaceOrder/' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App