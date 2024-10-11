import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ onAdd }) => {
    const [count, setCount] = useState(1);

    const onChangeHandler = (event) => {
        let value = Number(event.target.value);
        if (!isNaN(value)) {
            setCount(value);
        }
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            alert('El valor mínimo es 1');
        }
    };

    const incrementCount = () => {
        if (count < 100) {
            setCount(count + 1);
        } else {
            alert('El valor máximo es 100');
        }
    };

    return (
        <div className="item-count">
            <div className="input-group">
                <button className="btn btn-outline-secondary btn-decrement" type="button" onClick={decrementCount}>-</button>
                <input type="number" className="form-control" value={count} onChange={onChangeHandler} />
                <button className="btn btn-outline-secondary btn-increment" type="button" onClick={incrementCount}>+</button>
            </div>
            <div>
                <button className="btn btn-primary mt-3 btn-add-to-cart" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
