import React,{useContext} from 'react';
import { ProductContext } from '../../context/ProductContext';

function ProductItem({itemName,setAddedItem}) {
    const{cart,setCart}=useContext(ProductContext)
    const addToCartHandler = ()=>{
        if(!(cart.includes(itemName))){
            setCart([...cart,itemName]);
            setAddedItem(itemName);
        }
        
        // console.log(cart);
    };
     return(
       <div className="product-item" onClick={addToCartHandler}>
           <p className="item-name">{itemName}</p>
       </div>
   )

}

export default ProductItem
    