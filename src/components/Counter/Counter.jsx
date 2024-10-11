import React from 'react';
import { useCount } from '../../customHooks/useCount';
import './Counter.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Counter = () => {
    const { count, decrement, increment, reset } = useCount(0, 0, 100);
    return (
        <div className="counter">
            <div className="counter__display">{count}</div>
            <div className='counter__btn-container'>
                <button onClick={increment} className='counter__btn'>Sum</button>
                <button onClick={decrement} className='counter__btn'>Res</button>
                <button onClick={reset} className='counter__btn'>Reset</button>
            </div>
        </div>
    );
};
