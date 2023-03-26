import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartCard from './CartCard'
import "./cartStyle.css"
const CartHome = ({ cartItems }) => {
    const Navigate=useNavigate();
    var totalPrice = 0
    return (
        <div className='cart-home-outer'>
            <div className="cart-home">
            {
                cartItems?.length!==0?(
                    <div className="cart-home-left">
                    {cartItems?.map((citem, idx) => {
                        totalPrice += citem.price_value;
                        return <CartCard key={idx} cartItem={citem} />
                    })}
                    <div className="place-order">
                        <button onClick={()=>Navigate("/checkout")}>PLACE ORDER</button>
                    </div>
                </div>
                ):<h1>Your Cart Is Empty</h1>
            }
                <div className="cart-home-right">
                    <div className="price-det">
                        <p>PRICE DETAIL</p>
                    </div>
                    <div className="pd-bot">
                        <div className="pdb-tot-itm">
                            <p>Price ({cartItems.length + " "} Items)</p>
                            <p>₹{new Intl.NumberFormat().format(totalPrice)}</p>
                        </div>
                        <div className="pdb-del-charg">
                            <p className='left'>Delivery Charges</p>
                            <p className='right'>Free</p>
                        </div>
                        <hr />
                        <div className="total-amt">
                            <p>Total Amount</p>
                            <p>₹{new Intl.NumberFormat().format(totalPrice)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartHome