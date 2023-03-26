import React from 'react'
import "./homeStyles.css"
import { useNavigate } from 'react-router-dom';

const Redirector = () => {
  const navigate=useNavigate();
  return (
    <div className='redirector'>
      <div onClick={()=>{
        navigate("/categories")
      }} className="red-comp">
        <img src="assets/Home/offer.webp" alt="offer img" />
        <p>Top Offers</p>
      </div>
      <div onClick={()=>{
        navigate("/mobile+tablets")
      }}  className="red-comp">
        <img src="assets/Home/mobile.webp" alt="mobile img" />
        <p>Mobile & Tablets</p>
      </div>
      <div onClick={()=>{
        navigate("/electronics")
      }}  className="red-comp">
        <img src="assets/Home/electronics.webp" alt="electronics img" />
        <p>Electronics</p>
      </div>
      <div onClick={()=>{
        navigate("/tv+appliance")
      }}  className="red-comp">
        <img src="assets/Home/tv.webp" alt="TV & Appliance img" />
        <p>TV & Appliance</p>
      </div>
      <div onClick={()=>{
        navigate("/fashion")
      }}  className="red-comp">
        <img src="assets/Home/fashion.webp" alt="Fashion img" />
        <p>Fashion</p>
      </div>
      <div onClick={()=>{
        navigate("/beauty+toys")
      }}  className="red-comp">
        <img src="assets/Home/beauty.webp" alt="Beauty img" />
        <p>Beauty</p>
      </div>
      <div onClick={()=>{
        navigate("/home+furniture")
      }}  className="red-comp">
        <img src="assets/Home/furniture.webp" alt="Home & Furniture img" />
        <p>Home & Furniture</p>
      </div>
      <div className="red-comp">
        <img src="assets/Home/flight.webp" alt="Flights img" />
        <p>Flights</p>
      </div>
      <div onClick={()=>{
        navigate("/grocery")
      }}  className="red-comp">
        <img src="assets/Home/grocery.webp" alt="Grocery img" />
        <p>Grocery</p>
      </div>
    </div>
  )
}

export default Redirector