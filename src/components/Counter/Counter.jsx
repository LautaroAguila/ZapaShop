import React from 'react'
import { useCout } from '../../customHooks/useCount'
import "./Counter.css"

export const Counter = () => {
    const {count, decrement, increment, reset} = useCout(0, 0, 100)
    return (
        <div>
            <div> {count} </div>
            <div className='btnContainer'>
                <buttton onClick={increment} className='btn'>Sum</buttton>
                <buttton onClick={decrement} className='btn'>Res</buttton>
                <buttton onClick={reset} className='btn'>Reset</buttton>
            </div>
        </div>
    )
}
