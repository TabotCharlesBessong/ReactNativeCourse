 import React,{createContext, useState} from 'react'

const CartItems = createContext()

const BasketContext=({children})=>{
    const [card, setCard] = useState([])
    return (
        <CartItems.Provider value={{card,setCard}} >
           {children}
        </CartItems.Provider>
    )
}

export {CartItems,BasketContext};









 