import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const {title, description, price, image} = item
    const onAdd = (count) =>{
        alert(`Agregaste ${count} de ${title} al carrito`)
        console.log(`Agregaste ${count} de ${title} al carrito`)
    }
    return (
        <div className='itemDetail'>
            <div className="contendorList">
                <div className='item'>
                    <a href="" ><img src={image} alt= {title} className='imgArticulo' /></a>
                    <p> {title} </p>
                    <p> ${price} </p>
                    <p>{description}</p>
                </div>
                
            </div>
            <ItemCount onAdd={onAdd}/>
        </div>
)
}

export default ItemDetail