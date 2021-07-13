import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import OrderedItem from './OrderedItem';

function Orders() {
    const {orders}=useContext(ProductContext);
    return (
        <div className='orders' >
            {
                orders.map(order=>(
                    <OrderedItem order={order} />   
                ))
            }
        </div>
    )
}

export default Orders
