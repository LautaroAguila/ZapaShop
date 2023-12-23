import React from 'react';
import PropTypes from 'prop-types';
import './ItemListContainer.css';
import styled from 'styled-components';

function ItemListContainer ({precio, nombre}){
    return(
        <>
            <div className="contendorList">
                
                <div className='item'>
                    <a href="" ><img src="src\Componentes\ItemListContainer\imagenes\jordan1.jpeg" alt= {nombre} className='imgArticulo' /></a>
                    <p> {nombre} </p>
                    <p> {precio}$ </p>
                </div>
            </div>
            
        </>
    )
}

export default ItemListContainer;

