import React from 'react'

const Item = ({id, title, price, category, description, image}) => {
    return (
        <div className="contendorList">
            <div className='item'>
                <a href="" ><img src={image} alt= {title} className='imgArticulo' /></a>
                <p> {title} </p>
                <p> ${price} </p>
            </div>
        </div>
    )
}

export default Item;
