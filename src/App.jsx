import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard  from './components/DashBoard/DashBoard'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetaliContainer from './components/ItemDetailContainer/ItemDetaliContainer'
import CartProvider from './routing/contex/cartContex'
import Cart from './pages/Cart/Cart'


function App() {
  
  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/> } />
          <Route path='/products/:categoryId' element={<Products/>}/>
          <Route path='/product/:productId' element={<ItemDetaliContainer/>} />
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          

          {/*<Home></Home>
          <Products></Products>*/}
        </Routes>
      </BrowserRouter>

    </CartProvider>
    
  )
}

export default App
