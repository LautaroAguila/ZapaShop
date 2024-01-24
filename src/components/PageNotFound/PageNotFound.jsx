import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='conteinerNotFound'>
            <div className="container">
                <h2>Lo siento! No se encontro la pagina.</h2>
                <h1>404</h1>
                <p>La pagina que busca aun no existe.</p>
                <Link to='/' >Volver al Inicio</Link>
            </div>
        </div>
    )
}

export default PageNotFound