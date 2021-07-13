import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';



function Header() {
    const {cart} = useContext(ProductContext);
    return (
        <header className="header">
            <nav className="nav">
                <Link to='/' ><h1>Baskate</h1></Link>
                <div className="nav-menu" >
                    <Link to='/orders' className="order-btn" >Orders</Link>
                    <Link to='/cart' className="cart-btn" >Cart {cart.length > 0 && cart.length}</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
