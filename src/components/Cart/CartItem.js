import React from 'react';

function CartItem({itemName,setPurchasedItem}) {

     return(
       <div className="cart-item" onClick={()=>setPurchasedItem(itemName)}>
           <p className="item-name">{itemName}</p>
       </div>
   )

}

export default CartItem
