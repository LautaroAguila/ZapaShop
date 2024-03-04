import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, title, price, category, description, image}) => {
    return (
        <div className="contendorList">
            <div className='item'>
                <div ><img src={image} alt= {title} className='imgArticulo' /></div>
                <p> {title} </p>
                <p> ${price} </p>
                <Link to={`/product/${id}`}>Ver mas</Link>
            </div>
        </div>
    )
}

export default Item;
