import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([])
    
    
    const addItem = (item, quantity) => {
        let i = item
        i.quantity = quantity
        console.log(cart)// en este log aparece el cart vacio
        setCart([...cart, i])
        console.log(cart) //aca lo setie pero me sigue logueando vacio. 
        //Si clickeo volver y agrego otra vez al carrito se rompe. 
        //Y si busco otro producto y lo agrego empieza vacio.
        //Creo que el problema esta en el ItemDetail tambien
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((e) => e.id !== itemId))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(e => e.id === id)
     }

    return (
        <CartContext.Provider value={ {addItem, removeItem, clear, isInCart} }>
            {children}
        </CartContext.Provider>
    )
}
