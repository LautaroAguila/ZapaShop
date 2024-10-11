import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCartContex } from '../../routing/contex/cartContex';

const ItemDetail = ({ item }) => {
    if (!item) {
        return <div>Loading...</div>;
    }

    const { id, title, description, price, image } = item;
    const { addItem } = useCartContex();
    const [showItemCount, setShowItemCount] = useState(true);

    const handleAdd = (count) => {
        addItem(item, count);
        setShowItemCount(false);
        alert(`Agregaste ${count} de ${title} al carrito, puedes ver más productos`);
    };

    const goBack = () => {
        history.back();
    };

    return (
        <div className="container mt-4 itemDetail bg-light rounded p-4 shadow">
            <button className="btn btn-outline-primary mb-3" onClick={goBack}>ATRAS</button>
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <img src={image} alt={title} className="img-fluid rounded imgArticulo mb-3" />
                    <h3 className="mt-3 title-color">{title}</h3>
                    <p className="lead price-color">${price}</p>
                    <p className="description-color">{description}</p>
                    {showItemCount && <ItemCount onAdd={handleAdd} />}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
