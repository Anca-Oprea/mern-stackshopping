import React from 'react'
import cartItem from './cartItem.js'

export default function cartList({value}){
    const {cart} = value;
    return (
    <div className="container-fluid"> {cart.map(item=>{
        return <cartItem key={item.id} item={value} value={value} />
    })}
    </div>
    )
}