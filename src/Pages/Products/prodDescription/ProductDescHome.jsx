import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProdSpecification from './ProdSpecification'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import SellIcon from '@mui/icons-material/Sell';
import Star from '@mui/icons-material/Star';

import "./prodStyles.css"
import { LocationOn } from '@mui/icons-material';

const ProductDescHome = ({ product, cartItemSetter }) => {
  const navigate=useNavigate();
  const highlights = product.details?.filter((_, idx) => {
    return idx !== product.details.length - 1;
  })

  const [imageHover,setImageHover]=useState(product.images.other[0])

  const handleMouseDown=(img)=>{
    setImageHover(img);
  }

  const handleAddCart=()=>{
    cartItemSetter(product)
  }

  const handleBuyNow =async()=>{
    await cartItemSetter(product);
    navigate("/checkout")
  }

  // console.log(product);

  return (
    <div className='prod-desc-outer'>
      <div className='prod-desc'>
        <div className="left">
          <div className="l-left">
            {product.images.other?.map((img, idx) => {
              return (
                <div key={idx}>
                  <div onMouseOver={()=>{handleMouseDown(img)}} className="image">
                    <img src={img.link} style={img.size_2} alt={img.link} />
                  </div>
                </div>
                
              )
              
            })}
          </div>
          <div className="l-right">
            <div className="l-right-image">
              <img src={imageHover.link} style={imageHover.size_3} alt="" />
            </div>
            <div className="buy-now">
              <button onClick={handleAddCart} className='b1'><ShoppingCartIcon /> ADD TO CART</button>
              <button onClick={handleBuyNow} className='b2'><FlashOnIcon /> BUY NOW</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price-brand-sec">
            <div className="brand">
              <h5>{product.name}</h5>
            </div>
            <div className="rating">
              <p><span>{product.rating}<StarIcon sx={{ width: "0.8rem" }} /></span>{new Intl.NumberFormat().format(product.ratingCount) + " Ratings & " + product.reviewCount + " Reviews"}</p>
            </div>
            <div>
              <p className='pd-offer'>Extra {" " + product.sale_offer}</p>
              <div><span className='pd-price'>{product.price + "  "}</span><span className='pd-mrp'>{product.MRP}</span></div>
              <p className="delevery-pera">Delivery fee: <span className='del-prise'> +{" " + product.delevery_fee}</span><span className='del-type'>{" " + product.delevery_type}</span></p>
            </div>
            <div className="avalible-offer">
              <h6>Available offers</h6>
              {product.availibleOffer?.map((offer, idx) => {
                return <p key={idx}> <SellIcon sx={{ width: "1rem", color: "#14BD47" }} /> <span className='ao-typ'>{" " + offer.offerType + " "}</span><span className='ao-desc'>{offer.offerDesc}</span></p>
              })}
            </div>
          </div>
          <div className="brand-seller">
            <div className="table-create">
              <p className="bs-left">Warrenty</p>
              <p className="warrenty">{product.warrenty}</p>
            </div>
            <div className="table-create">
              <p className="bs-left">Delivery</p>
              <div className="bs-right-del">
                <div className="del-pin">
                  <LocationOn sx={{ width: "1rem", color: "#2F74F0" }} />
                  <input defaultValue={713104} type="number" />
                  <span>Change</span>
                </div>
              </div>
            </div>
            <div className="table-create">
              <p className="tc-left">Highlights</p>
              <div className="tc-right">
                <ul>
                  {
                    highlights?.map((hl, idx) => {
                      return (
                        <li key={idx}>{hl}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="table-create">
              <p className="tc-left">Seller</p>
              <div className="tc-right">
                <p className="seller-name"> {product.sellerDetail.s_name}<span className='s-rating'>{product.sellerDetail.s_rating}<Star sx={{ width: "0.9rem" }} /></span></p>
              </div>
            </div>
            <div className="table-create">
              <p className="tc-left">Description</p>
              <div className="tc-right">
                <p className="tc-desc"> {product.discription}</p>
              </div>
            </div>
          </div>
          <div className="prod-spc-outer">
            <ProdSpecification specifications={product.specifications} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescHome