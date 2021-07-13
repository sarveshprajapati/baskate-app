import React from 'react'

function AddedBackdrop({addedItem,setAddedItem}) {
    const okeyHandler = (e)=>{
        if(e.target.classList.contains('added-backdrop')){
            setAddedItem('');
        }
    };
    return (
        <div className="added-backdrop" onClick={okeyHandler}>
            <span className="added-item">
                <p><strong>{addedItem}</strong> added in the cart</p>
                <button onClick={()=>setAddedItem('')} >Okey</button>
            </span>
        </div>
    )
}

export default AddedBackdrop
