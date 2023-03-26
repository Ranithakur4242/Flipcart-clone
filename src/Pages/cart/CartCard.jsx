import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartCard = (cartItem) => {
    const Navigete = useNavigate();
    return (

        <div className='cart-card'>
            <div className="cc-inner">
                <div className="cc-left">
                    <div onClick={() => {
                        Navigete(`/product${cartItem.cartItem.category}${cartItem.cartItem.uid}`)
                    }} className="ccl-top">
                        <img style={cartItem.cartItem.images.main.size_c} src={cartItem.cartItem.images.main.link} alt="" />
                    </div>
                    <div className="ccl-bottom">
                        <button>-</button>
                        <input defaultValue={1} type="number" />
                        <button>+</button>
                    </div>
                </div>
                <div className="cc-right">
                    <p onClick={() => {
                        Navigete(`/product${cartItem.cartItem.category}${cartItem.cartItem.uid}`)
                    }} className="name">{cartItem.cartItem.name}</p>
                    <p className="detail">{cartItem.cartItem.details[0]}</p>
                    <p className="seller">Seller: {cartItem.cartItem.sellerDetail.s_name}</p>
                    <p className="price"><span className="mrp">{cartItem.cartItem.MRP + " "}</span><span className='price-value'>{cartItem.cartItem.price + " "}</span> <span className='offer'>{cartItem.cartItem.sale_offer}</span></p>
                    <p className="delevery">{cartItem.cartItem.delevery_type}</p>
                    <p className="remove">REMOVE</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartCard