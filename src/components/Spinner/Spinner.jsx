import React from 'react'
import spinner from "./spinner.gif"
import "./Spinner.css"

const Spinner = () => {
    return (
        <div className='spinner'>
            {" "}
            <img 
                src={spinner} 
                alt="Cargando..." 
                style={{width : "400px", margin:"auto", }}
            />
        </div>
    )
}

export default Spinner;