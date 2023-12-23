import React from 'react'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'
import './App.css'

function App() {
  
  return (
    <>
      
        <NavBar/>
        
        <ItemListContainer precio={100} nombre={"Jordan 1"}/>  
        <ItemListContainer precio={100} nombre={"Jordan Dunk"}/>
      
      
    </>
  )
}

export default App
