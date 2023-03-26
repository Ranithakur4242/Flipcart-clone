import React, { useState } from 'react'
import "./checkout.css"
const CheckoutHome = ({ cartItems }) => {
    var totalPrice = 0

    cartItems.map(item => {
        totalPrice = totalPrice + item.price_value;
        return null;
    })

    const [selected, setSelected] = useState(1)
    console.log(selected);

    return (
        <div className='checkout-home-outer'>
            <div className="checkout-home">
                <div className="ch-left">
                    <div className="address">
                        <div className="left">
                            <div className="l-left">
                                <span>1</span>
                            </div>
                            <div className="l-right">
                                <h6>DELIVERY ADDRESS</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio, perspiciatis, delect </p>
                            </div>
                        </div>
                        <div className="right">
                            <button>Change</button>
                        </div>
                    </div>
                    <div className="t-item">
                        <div className="left">
                            <div className="l-left">
                                <span>2</span>
                            </div>
                            <div className="l-right">
                                <h6>ORDER SUMMARY</h6>
                                <p>{cartItems.length + " "} item</p>
                            </div>
                        </div>
                        <div className="right">
                            <button>Change</button>
                        </div>
                    </div>
                    <div className="p-opt">
                        <div className="p-opt1">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" value={1} name="p-opt" id="upi" />
                                <label htmlFor="upi">UPI</label>
                            </div>
                            <div style={selected === 1 ? { display: "flex" } : { display: "none" }} className="show">
                                <label htmlFor="upi-val">Enter UPI</label>
                                <input id='upi-val' type="text" />
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="p-opt2">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" value={2} name="p-opt" id="wallet" />
                                <label htmlFor="wallet">Wallets</label>
                            </div>
                            <div style={selected === 2 ? { display: "flex" } : { display: "none" }} className="show">
                                <label htmlFor="wal-val">Mobile:</label>
                                <input id='wal-val' type="text" />
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="p-opt3">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" value={3} name="p-opt" id="cards" />
                                <label htmlFor="cards">
                                    <span className='title'>Credit/Debit/ATM Card</span>
                                    <span className='desc'>Add and secure your cards as per RBI guidlines</span>
                                </label>
                            </div>
                            <div style={selected === 3 ? { display: "flex" } : { display: "none" }} className="show">
                                <label htmlFor="card-val">Card No:</label>
                                <input id='card-val' type="text" />
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="p-opt4">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" name="p-opt" value={4} id="netBanking" />
                                <label htmlFor="netBanking">
                                    <span className='title'>Net Banking</span>
                                    <span className='desc'>This instrument has low success, use UPI or cards for better experiance</span>
                                </label>
                            </div>
                            <div style={selected === 4 ? { display: "flex" } : { display: "none" }} className="show">
                                <label htmlFor="net-val">User Id:</label>
                                <select name="Bank" id="">
                                    <option value="">Bank 1</option>
                                    <option value="">Bank 2</option>
                                    <option value="">Bank 3</option>
                                    <option value="">Bank 4</option>
                                </select>
                                <input id='net-val' type="text" />
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="p-opt5">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" value={5} name="p-opt" id="emi" />
                                <label htmlFor="emi">EMI(Easy Installments)</label>
                            </div>
                            <div style={selected === 5 ? { display: "flex" } : { display: "none" }} className="show">
                                <button>Continue</button>
                            </div>
                        </div>
                        <div className="p-opt6">
                            <div className="each-pm">
                                <input onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected(Number(e.target.value))
                                    }
                                }} type="radio" value={6} name="p-opt" id="cod" />
                                <label htmlFor="cod">Cash on Delivery</label>
                            </div>
                            <div style={selected === 6 ? { display: "flex" } : { display: "none" }} className="show">
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
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

export default CheckoutHome