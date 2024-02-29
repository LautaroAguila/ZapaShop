import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useCartContex } from '../../routing/contex/cartContex'


const ItemDetail = ({item}) => {
    if (!item) {
        return <div>Loading...</div>
    }
    
    const { id, title, description, price, image } = item;
    const { addItem } = useCartContex();
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (count) => {
        
        addItem(item, count);
        setShowItemCount(false);
        alert(`Agregaste ${count} de ${title} al carrito, puedes ver mas productos`)
    }

    const goBack = () => {
        history.back()
    };
    
    return (
        <div className='itemDetail'>
            <button onClick={goBack}>ATRAS</button>
            <div className="contendorList">
                
                <div className='item'>
                    <a href="" ><img src={image} alt= {title} className='imgArticulo' /></a>
                    <p> {title} </p>
                    <p> ${price} </p>
                    <p>{description}</p>
                </div>
                
            </div>
            {showItemCount && <ItemCount onAdd={handleAdd}/>}
        </div>
)
}

export default ItemDetail