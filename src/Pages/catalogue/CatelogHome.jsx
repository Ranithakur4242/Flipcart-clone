import React from 'react'
import CateType from './CateType'
import "./catelogStyle.css"

const CatelogHome = () => {
    const catelogItem=[
        {
            category_type:"Mobile & Tablets",
            cate_route:"mobile+tablets",
            cate_discription:"Mobile Phones Big Saving Days March 2023",
            visibla_items:[
                {
                    image:"assets/Catelog/mobile/redmi-n12.webp",
                    name:"Redmi Note 12 Pro 5G",
                    offer_Name:"From ₹22,499",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"67W Turbo Charge"
                },
                {
                    image:"assets/Catelog/mobile/bs-tab.webp",
                    name:"Best Selling Tablets",
                    offer_Name:"From ₹9,999",
                    size:{
                        height:"112px",
                        width:"175px",
                    },
                    applicable_device:"realme, Samsung & More"
                },
                {
                    image:"assets/Catelog/mobile/mobile-pxp5.webp",
                    name:"Poco X5 Pro 5G",
                    offer_Name:"From ₹22,999",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"SD 771G | 108 MP Tripal Cam"
                },
                {
                    image:"assets/Catelog/mobile/mobile-pxpr.webp",
                    name:"Poco X4 Pro 5G",
                    offer_Name:"From ₹14,999",
                    size:{
                        height:"150px",
                        width:"115px",
                    },
                    applicable_device:"67W Sonic Charge |AMOLED"
                },
                {
                    image:"assets/Catelog/mobile/realme-mobile.webp",
                    name:"realme 10Pro+ 5G",
                    offer_Name:"From ₹24,999",
                    size:{
                        height:"170px",
                        width:"170px",
                    },
                    applicable_device:"120Hz Curve Vision Display"
                },
                {
                    image:"assets/Catelog/mobile/tab.webp",
                    name:"Apple iPads",
                    offer_Name:"From ₹29,900",
                    size:{
                        height:"170px",
                        width:"125px",
                    },
                    applicable_device:"NCEMI | Cashbback Up to ₹4,000 "
                },
            ]
        },
        {
            category_type:"Electronics",
            cate_route:"electronics",
            cate_discription:"Laptop, Desktop, Watches & More",
            visibla_items:[
                {
                    image:"assets/Catelog/Electronics/hp-lap.webp",
                    name:"Laptops & Desktops",
                    offer_Name:"Upto 40% OFF",
                    size:{
                        height:"101px",
                        width:"118px",
                    },
                    applicable_device:"Lenovo, HP, Asus & More"
                },
                {
                    image:"assets/Catelog/Electronics/Audio.webp",
                    name:"Best Of Sound Bars",
                    offer_Name:"From ₹999",
                    size:{
                        height:"120px",
                        width:"120px",
                    },
                    applicable_device:"Mivi, boAt & More"
                },
                {
                    image:"assets/Catelog/Electronics/pl-watch.webp",
                    name:"Smart Watches And Bands",
                    offer_Name:"Upto 52% Off",
                    size:{
                        height:"120px",
                        width:"122px",
                    },
                    applicable_device:"Pebble, Dizzo, Boat & More"
                },
                {
                    image:"assets/Catelog/Electronics/h-o-monitor.webp",
                    name:"Home and Office Monitors",
                    offer_Name:"From ₹3299",
                    size:{
                        height:"120px",
                        width:"122px",
                    },
                    applicable_device:"Lenovo, Dell & More"
                },
                {
                    image:"assets/Catelog/Electronics/printer.webp",
                    name:"Laser Printers",
                    offer_Name:"From ₹8799",
                    size:{
                        height:"120px",
                        width:"120px",
                    },
                    applicable_device:"Canon, Brother & More"
                },
                {
                    image:"assets/Catelog/Electronics/bluetooth.webp",
                    name:"Headphone TWS Speakers",
                    offer_Name:"Upto 60% Off",
                    size:{
                        height:"120px",
                        width:"120px",
                    },
                    applicable_device:"OnePlus, Boat, Realme & more"
                },
            ]
        },
        {
            category_type:"Sale is Live | TVs & Appliances",
            cate_route:"tv+appliance",
            cate_discription:"Upto 75% Off",
            visibla_items:[
                {
                    image:"assets/Catelog/TV/tv-moto.webp",
                    name:'55" 4K Smart TVs',
                    offer_Name:"From ₹18,249",
                    size:{
                        height:"130px",
                        width:"157px",
                    },
                    applicable_device:"Sony, Mi, acer & More"
                },
                {
                    image:"assets/Catelog/TV/sam-w-m.webp",
                    name:"Washing Machine",
                    offer_Name:"From ₹4,990",
                    size:{
                        height:"120px",
                        width:"120px",
                    },
                    applicable_device:"Samsung, ONIDA, Thomson & More"
                },
                {
                    image:"assets/Catelog/TV/ac.webp",
                    name:"Air Conditioners",
                    offer_Name:"From ₹24,990",
                    size:{
                        height:"49px",
                        width:"174px",
                    },
                    applicable_device:"Godrej, Voltas, Samsung & More"
                },
                {
                    image:"assets/Catelog/TV/god-Freez.webp",
                    name:"Refrigerator",
                    offer_Name:"From ₹791/m*",
                    size:{
                        height:"134px",
                        width:"88px",
                    },
                    applicable_device:"LG, Samsung, WhirlPool & More"
                },
                {
                    image:"assets/Catelog/TV/kit-tool.webp",
                    name:"Kitchen Appliance",
                    offer_Name:"From ₹299",
                    size:{
                        height:"132px",
                        width:"151px",
                    },
                    applicable_device:"Bajaj, flipkart Smartbuy & More"
                },
                {
                    image:"assets/Catelog/TV/mv-o.webp",
                    name:"Microwave Ovens",
                    offer_Name:"Upto 70% Off",
                    size:{
                        height:"104px",
                        width:"146px",
                    },
                    applicable_device:"LG, Samsung, WhirlPool & More"
                },
            ]
        },
        {
            category_type:"Top Deals on Fashion",
            cate_route:"fashion",
            cate_discription:"55-70% Off",
            visibla_items:[
                {
                    image:"assets/Catelog/Fashion/b-jeans.webp",
                    name:"Flying Machine, Wrangler...",
                    offer_Name:"60-80% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Mens's Denims"
                },
                {
                    image:"assets/Catelog/Fashion/g-lanhnga.webp",
                    name:"Sabse Amazing Deals!",
                    offer_Name:"From ₹299",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Lehengas & Cholis"
                },
                {
                    image:"assets/Catelog/Fashion/shoes.webp",
                    name:"WROGN, Red Tape & more",
                    offer_Name:"Min. 40% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Sneakers, High Tops & more"
                },
                {
                    image:"assets/Catelog/Fashion/sleeper.webp",
                    name:"Summer Special !!",
                    offer_Name:"Under 399",
                    size:{
                        height:"85px",
                        width:"170px",
                    },
                    applicable_device:"Sandals & Slides"
                },
                {
                    image:"assets/Catelog/Fashion/g-bikini.webp",
                    name:"Van Heusen, Chemistry...",
                    offer_Name:"Under ₹599",
                    size:{
                        height:"150px",
                        width:"105px",
                    },
                    applicable_device:"Shorts, Bikini & more"
                },
                {
                    image:"assets/Catelog/Fashion/jwelri.webp",
                    name:"Jewellery Set, Bangles & More",
                    offer_Name:" Under ₹499 + 10% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"#BudgetBuys"
                },
            ]
        },
        {
            category_type:"Beauty Product And Toys",
            cate_route:"beauty+toys",
            cate_discription:"Explore Now!",
            visibla_items:[
                {
                    image:"assets/Catelog/beauty/t-cycle.webp",
                    name:"Tricycles",
                    offer_Name:"From ₹799",
                    size:{
                        height:"150px",
                        width:"147px",
                    },
                    applicable_device:"Grab Now"
                },
                {
                    image:"assets/Catelog/beauty/m-gitar.webp",
                    name:"Musical Instruments & More...",
                    offer_Name:"Up to 80% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Shop Now"
                },
                {
                    image:"assets/Catelog/beauty/helmet.webp",
                    name:"Helmet",
                    offer_Name:"From ₹699",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Vega, Steelbird And More"
                },
                {
                    image:"assets/Catelog/beauty/r-clover.webp",
                    name:"Riding Glove",
                    offer_Name:"Upto 80% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Never Before"
                },
                {
                    image:"assets/Catelog/beauty/t-car.webp",
                    name:"Remote Control Toys",
                    offer_Name:"Min 40% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Don't Miss These!"
                },
                {
                    image:"assets/Catelog/beauty/sc-bag.webp",
                    name:"School Bags",
                    offer_Name:"Min 30% Off",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Buy Now!"
                },
            ]
        },
        {
            category_type:"Super Saver Days",
            cate_route:"home+furniture",
            cate_discription:"Toys & Stationary",
            visibla_items:[
                {
                    image:"assets/Catelog/Home-fur/b-slover.webp",
                    name:"Bookshelves",
                    offer_Name:"Under ₹1699",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Metal, Plastic, Solidwood..."
                },
                {
                    image:"assets/Catelog/Home-fur/gas-stov.webp",
                    name:"Gas Stoves",
                    offer_Name:"From ₹379",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Best Price Ever"
                },
                {
                    image:"assets/Catelog/Home-fur/tl.webp",
                    name:"Table Linen Sets",
                    offer_Name:"From ₹99",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Best Selling Range"
                },
                {
                    image:"assets/Catelog/Home-fur/w-chair.webp",
                    name:"Work From Home",
                    offer_Name:"From ₹699",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Table, Chair & More"
                },
                {
                    image:"assets/Catelog/Home-fur/p-cooker.webp",
                    name:"Pressure Cookers & More",
                    offer_Name:"From ₹359",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Hawkins"
                },
                {
                    image:"assets/Catelog/Home-fur/o-s-table.webp",
                    name:"Office Study Table",
                    offer_Name:"Under ₹1299",
                    size:{
                        height:"150px",
                        width:"150px",
                    },
                    applicable_device:"Work at Home like a boss"
                },
            ]
        },
    ]
  return (
    <div className='catelog-home'>
    <h4>Today's Special</h4>
    {
        catelogItem?.map((catelog,idx)=>{
           return <CateType key={idx} catelog={catelog}/>
        })
    }
    </div>
  )
}

export default CatelogHome