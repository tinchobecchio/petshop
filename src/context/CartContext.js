import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = ( {children} ) => {


    const [cart, setCart] = useState([])
    const [cantItems, setCantItems] = useState(0)
    const [total, setTotal] = useState(0)


    console.log('cart', cart)
    console.log('cant items: ', cantItems);
    console.log('total: ', total);
    
    useEffect(() => {
        setCantItems(cart.reduce((a, b) => a + (b['quantity'] || 0), 0))
        setTotal(cart.reduce((a, b) => a + (b['total'] || 0), 0)) 
    }, [cart]);
    

    const addItem = (item, quantity) => {

        if(isInCart(item.id)) {
            let i = cart.find(e => e.id === item.id)
            i.quantity += quantity
            i.total = i.quantity * i.price
            console.log('cart actualizado', cart)
            setCantItems(cart.reduce((a, b) => a + (b['quantity'] || 0), 0))
            setTotal(cart.reduce((a, b) => a + (b['total'] || 0), 0))
        
        } else {
            let i = item
            i.quantity = quantity
            i.total = i.quantity * i.price
            setCart([...cart, i])     
        }
             
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
        <CartContext.Provider value={ {addItem, removeItem, clear, isInCart, cart, cantItems, total} }>
            {children}
        </CartContext.Provider>
    )
}
