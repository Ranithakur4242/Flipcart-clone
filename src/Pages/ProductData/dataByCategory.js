import products from "./productData";


const mob_tab=products.filter((prod)=>{
    return prod.category==="mobile"||prod.category==="tablet"
});


const Electronics=products.filter((prod)=>{
    return prod.category==="labtop"||prod.category==="gaming"||prod.category==="camera"||prod.category==="trimer"
});

const tv_app=products.filter((prod)=>{
    return prod.category==="tv"||prod.category==="t-appliance"||prod.category==="wash_machine"||prod.category==="refrigrator"||prod.category==="grinder"
});

const fashion=products.filter((prod)=>{
    return prod.category==="shirt-m"||prod.category==="shirt-w"||prod.category==="jeans-m"||prod.category==="jeans-w"||prod.category==="kurti"||prod.category==="kurta"||prod.category==="tshirt-m"||prod.category==="tshirt-w"
})

const beauty=products.filter((prod)=>{
    return prod.category==="face-wash"||prod.category==="face-cream"||prod.category==="toy"||prod.category==="baby-care"
});

const furniture=products.filter((prod)=>{
    return prod.category==="bedsheet"||prod.category==="blanket"||prod.category==="sofa"||prod.category==="matrices"
});

const grocery=products.filter((prod)=>{
    return prod.category==="grocery"
});


export {mob_tab,Electronics,tv_app,beauty,furniture,grocery, fashion}
