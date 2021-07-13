import React, { useContext, useState } from 'react';
import {v4 as uuid} from 'uuid';
import { ProductContext } from '../../context/ProductContext';
import CartItem from './CartItem';
import PurchasedBackdrop from './PurchasedBackdrop'
function Cart() {
    const {cart}=useContext(ProductContext);
    const [purchasedItem,setPurchasedItem]= useState('')

    return (
        <div className="cart">
            {cart.map(item=>(
                <CartItem key={uuid()} itemName={item} setPurchasedItem={setPurchasedItem}/>
            ))}
            {purchasedItem && <PurchasedBackdrop purchasedItem={purchasedItem} setPurchasedItem={setPurchasedItem} />}
        </div>
    )
}

export default Cart
