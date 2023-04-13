import React from 'react'
import { CartItem } from '../CartItem/CartItem'
import { Wrapper } from './Cart.styles'
import { CartItemType } from '../App'


type CartItemProps = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart = ({
  cartItems, addToCart, removeFromCart
}: CartItemProps) => {

  const calculateTotal = (items: CartItemType[]) => {
   return items.reduce((total: number, item) => total + item.amount * item.price, 0 )
  }

  return (
   <Wrapper>
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? <p>No item in cart.</p> : null }

    {cartItems.map(item => (
      <CartItem key={item.id} item = {item} addToCart = {addToCart}
      removeFromCart = {removeFromCart}/>
    ))}

    <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
   </Wrapper>
  )
}

export default Cart