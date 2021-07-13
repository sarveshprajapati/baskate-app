import React, { useContext, useEffect, useRef, useState } from 'react';
import {v4 as uuid} from 'uuid';
import { ProductContext } from '../../context/ProductContext';
import ProductItem from './ProductItem';
import AddedBackdrop from './AddedBackdrop';

function Products() {
    const {products}=useContext(ProductContext);
    const [addedItem,setAddedItem]=useState('');
    const [searchInput,setSearchInput]=useState('');
    const [searchedItems, setSearchedItems] = useState([]);
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    useEffect(()=>{
        setSearchedItems(products.filter(item=>item.toLowerCase().includes(searchInput.toLowerCase())))
    },[searchInput,products])

    return (
        <>
        <div className="search-box">
                <input ref={inputRef} type="input" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder="search..." />
        </div>
        <div className="products">
            {searchedItems.map(item=>(
                <ProductItem key={uuid()} itemName={item} setAddedItem={setAddedItem} />
            ))}
            {addedItem && <AddedBackdrop addedItem={addedItem} setAddedItem={setAddedItem} />}
        </div>
        </>
    )
}

export default Products
