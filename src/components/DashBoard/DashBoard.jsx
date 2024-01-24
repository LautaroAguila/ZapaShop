import React, { Children } from 'react'
import NavBar from '../NavBar/NavBar';
import './DashBoard.css'


function Dashboard ({children}){
    return(
        <div className='contenedor'>
            
            <div className='dash'> {children} </div>
        </div>
    )
}

export default Dashboard;
