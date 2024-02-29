import { createContext, useContext, useState } from "react";

const cartContex = createContext()

export const {Provider} = cartContex
export const useCartContex = () => useContext(cartContex)


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(0)
    const [total, setTotal] = useState(0)

    
    const addItem = (item, quantity) => {
        setItemsTotal(itemsTotal + quantity)
        setTotal(total + item.price * quantity)
        setCart([...cart, {item, quantity}])
        
        
    }

    const clearCart = () =>{
        setCart([])
        setItemsTotal(0)
        setTotal(0)
    }

    



    const valorDelContexto = {cart, itemsTotal, addItem, clearCart, total}
    return <Provider value={valorDelContexto}>{children} </Provider>
    
}

export default CartProvider