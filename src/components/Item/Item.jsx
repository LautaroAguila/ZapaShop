import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, category, description, image }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 item">
            <div className="card h-100">
                <Link to={`/product/${id}`}>
                    <img src={image} className="card-img-top img-fluid imgArticulo" alt={title} />
                </Link>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                </div>

                <div className="card-footer">
                    <Link to={`/product/${id}`} className="btn btn-primary btn-sm">Ver más</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
