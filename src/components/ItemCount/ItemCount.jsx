import React from 'react'
import { useState } from 'react'


const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(1)

    const onClickHandler = () => {
        console.log("COMPRAR")
    }
    const onChangeHandler = (event) => {
        setCount(Number(event.target.value))
    }


    return (
        <div>
            <div>
                <input type="button" value='-' onClick={() =>
                    count > 1 ? setCount(count-1): alert('VALOR MINIMO!')
                }/>
                <input type="number"  value={count} onChange={onChangeHandler}/>
                <input type="button" value='+' onClick={() =>
                    count < 100 ? setCount(count+1): alert('VALOR MAXIMO!')
                }/>
            </div>
            <div>
                <input type="button" value='Agregar al carrito' onClick={(()=>onAdd(count))} />
            </div>
        </div>
    )
}

export default ItemCount