import React from 'react'

function OrderedItem({order}) {
    return (
        <div className="order-item" >
           <p><strong>{order.item}</strong> of {order.quantity} unit</p>  
        </div>
    )
}

export default OrderedItem
