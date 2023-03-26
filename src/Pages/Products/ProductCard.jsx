import React from 'react'
import { useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';

const ProductCard = ({ product }) => {
    const Navigate = useNavigate();
    return (
        <div onClick={() => {
            Navigate(`/product${product.category}${product.uid}`)
        }} className='product-card'>
            <div className="product-card-left">
                <div className="left">
                    <img style={product.images.main.size} src={product.images.main.link} alt="" />
                </div>
                <div className="right">
                    <div className="brand">
                        <h5>{product.name}</h5>
                    </div>
                    <div className="rating">
                        <p><span>{product.rating}<StarIcon sx={{ width: "0.8rem" }} /></span>{new Intl.NumberFormat().format(product.ratingCount) + " Ratings &" + product.reviewCount + " Reviews"}</p>
                    </div>
                    <div className="product-desc">
                        <ul>
                            {product.details?.map((detail, idx) => {
                                return <li key={idx}>{detail}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-card-right">
                <h4 className='pcr-price'>{product.price}</h4>
                <p><span className='pcr-mrp'>{product.MRP}</span> <span className='pcr-offer'>{product.sale_offer}</span></p>
                <p className='pcr-delevery'>{product.delevery_type}</p>
            </div>
        </div>
    )
}

export default ProductCard