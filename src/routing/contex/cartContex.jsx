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
        /*const isInCart = cart.find(cartItem => {
                    if(cartItem.item.id === item.id){
                        return true;
                    }else{
                        return false;
                    }
                });
        if (isInCart) {
            const newCart = cart.map(newItem => {
                const newQuantity = newItem.quantity + quantity;
                setItemsTotal(itemsTotal + quantity);
                setTotal(total + item.price * newQuantity);
                return { ...newItem, quantity: newQuantity };
            });
            setCart(newCart);
            console.log("hay de mas")
        }if(isInCart === undefined){
            setCart([...cart, {item, quantity}])
            setItemsTotal(itemsTotal + quantity)
            setTotal(total + item.price * quantity)
            console.log("no hay de mas")
        }*/
        console.log(cart)
    }

    /*const removeItem*/
    const clearCart = () =>{
        setCart([])
        setItemsTotal(0)
        setTotal(0)
    }

    



    const valorDelContexto = {cart, itemsTotal, addItem, clearCart, total}
    return <Provider value={valorDelContexto}>{children} </Provider>
    
}

export default CartProvider