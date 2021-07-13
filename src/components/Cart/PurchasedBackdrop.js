import React,{useContext,useEffect,useRef, useState} from 'react'
import { ProductContext } from '../../context/ProductContext';

function PurchasedBackdrop({purchasedItem,setPurchasedItem}) {
    const{cart,setCart,orders,setOrders}=useContext(ProductContext);
    const inputRef = useRef(null);
    const [quantity,setQuantity]=useState(1);
    useEffect(()=>{
        inputRef.current.focus();   
    },[])
    const purchaseHandler = ()=>{
        setPurchasedItem('');
        setOrders([...orders,{
            item:purchasedItem,
            quantity:quantity
        }])
    };
    const cancelHandler = (e)=>{
        if(e.target.classList.contains('purchased-backdrop') || e.target.classList.contains('cancel-btn')){
            setPurchasedItem('');
        }
    };
    const removeHandler = ()=>{
        setPurchasedItem('');
        setCart(cart.filter(item=>item!==purchasedItem));
    };
    return (
        <div className="purchased-backdrop" onClick={cancelHandler}>
            <span className="purchased-item">
                <button className="cancel-btn">Cancel</button>
                <p>Product: <strong>{purchasedItem}</strong></p>
                <div>Quantity: <input ref={inputRef} value={quantity} type="number" onChange={(e)=>setQuantity(e.target.value)}/></div>
                <button className="purchase-btn" onClick={purchaseHandler} >Purchase</button>
                <button className="remove-btn" onClick={removeHandler} >Remove</button>
            </span>
        </div>
    )
}

export default PurchasedBackdrop
