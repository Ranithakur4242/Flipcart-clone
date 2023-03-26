import React from 'react'
import TopOfferCard from './TopOfferCard'
import TopOfferLeft from './TopOfferLeft'
import TopOfferRight from './TopOfferRight'

const TopOffer = () => {
    const offerItem=[
        {
            image:"assets/Home/shoes.webp",
            name:"PUMA, ADIDAS & more",
            offer:"MIN. 50% Off",
            category:"Running, Walking Shoes..",
            size:{
                height:"201px",
                width: "190px"
            }
        },
        {
            image:"assets/Home/water.webp",
            name:"Water Bottles",
            offer:"From ₹119",
            category:"Cello & More",
            size:{
                height:"201px",
                width: "145px"
            }
        }
        ,
        {
            image:"assets/Home/mic.webp",
            name:"Microphones",
            offer:"Upto 70% off",
            category:"Explore Now",
            size:{
                height:"160px",
                width: "150px"
            }
        }
        ,
        {
            image:"assets/Home/tab.webp",
            name:"Lenovo Tabs",
            offer:"From ₹7000",
            category:"Top Rated|Wide Selection",
            size:{
                height:"201px",
                width: "141px"
            }
        }
    ]
  return (
    <div className='top-offer'>
        <TopOfferLeft/>
        {
            offerItem?.map((item,idx)=>{
                return <TopOfferCard size={item.size} key={idx} image={item.image} name={item.name} offer={item.offer} category={item.category}/>
            })
        }
        <TopOfferRight/>
    </div>
  )
}

export default TopOffer