import { useState } from "react";

export const useCout = (initialValue = 0, min, max) => {
    if(initialValue < min || initialValue > max) initialValue = min
    
    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        if(count < max) setCount(count+1)
    }

    const decrement = () =>{
        if(count > min) setCount(count-1)
    }

    const reset = () => {
        setCount(initialValue)
    }

    return {count, increment, decrement, reset}
}