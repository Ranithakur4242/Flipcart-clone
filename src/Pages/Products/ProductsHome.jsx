import React, { useState } from 'react'

import "./ProductStyles.css"
import ProductCard from './ProductCard'
import ProductFliter from './ProductFilter.jsx/ProductFliter'




const ProductsHome = ({ products }) => {

    let filteredProduct = products;

    const [filteredValues, setFilteredValues] = useState({
        brands: [],
        categories: [],
        price: {
            minValue: 0,
            maxValue: 0
        }
    });
    const [sortType,setSortType]=useState("");



    const handleFilterSet = (filterValues) => {
        if (filterValues.price || filterValues.categories || filterValues.brands) {
            filteredProduct = products;
            setFilteredValues(filterValues);
        }
    }

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    const productFilters = {
        categories: removeDuplicates(products.map(item => {
            return item.category;
        })),
        brands: removeDuplicates(products.map(item => {
            return item.brand;
        }))
    }

    if (filteredValues) {
        if (filteredValues.price !== {}) {
            if (filteredValues.price.minValue !== 0 && filteredValues.price.maxValue !== 0) {
                filteredProduct = filteredProduct.filter(prd => {
                    return prd.price_value >= filteredValues.price.minValue && prd.price_value <= filteredValues.price.maxValue
                })
            }
        }

        if (filteredValues.brands.length !== 0) {
            filteredProduct = filteredProduct.filter(prd => {
                return filteredValues.brands.indexOf(prd.brand) !== -1
            })
        }

        if (filteredValues.categories.length !== 0) {
            filteredProduct = filteredProduct.filter(prd => {
                return filteredValues.categories.indexOf(prd.category) !== -1
            })
        }
    }

    const handleSort = (e) => {
        const value = e.target.value;
        setSortType(value)
        if(value==="sb"){
            productFilters.sort();
        }
       else if (value === "plh") {
            filteredProduct.sort((p1, p2) => (p1.price_value < p2.price_value) ? 1 : (p1.price_value > p2.price_value) ? -1 : 0);
            console.log(filteredProduct);
        }else if(value==="phl"){
            filteredProduct.sort((p1, p2) => (p1.price_value > p2.price_value) ? 1 : (p1.price_value < p2.price_value) ? -1 : 0);
            console.log(filteredProduct);
        }else if(value==="p"){
            filteredProduct.sort((p1, p2) => (Number(p1.ratingCount) < Number(p2.ratingCount)) ? 1 : (Number(p1.ratingCount) > Number(p2.ratingCount)) ? -1 : 0);
        }else if(value==="nf"){
            filteredProduct.sort((p1, p2) => (new Date(p1.launchDate) < new Date(p2.launchDate)) ? 1 : (new Date(p1.launchDate) > new Date(p2.launchDate)) ? -1 : 0);
        }
    }



    return (
        <div>
            <div className='product-home-main'>
                <select onChange={handleSort} className='selection' value={sortType} name="" id="">
                    <option value={"sb"}>Sort By</option>
                    <option value="plh">Price Low to High</option>
                    <option value="p">Popularity</option>
                    <option value="phl">Price High to Low</option>
                    <option value="nf">Newest First</option>
                </select>
            </div>
            <div className="product-home">
                <div className="filter-page">
                    <ProductFliter handleFilterSet={handleFilterSet} productFilters={productFilters} />
                </div>
                <div className="products-list">
                    {filteredProduct?.map((product, idx) => {
                        return <ProductCard key={idx} product={product} />

                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsHome