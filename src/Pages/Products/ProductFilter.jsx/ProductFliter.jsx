import React, { useState } from 'react'

const ProductFliter = ({ productFilters, handleFilterSet,products,setFilteredProduct }) => {
    const [filBrands, setBrands] = useState([]);
    const [filCategories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({
        minValue: 0,
        maxValue: 0
    })

    const handlePriceRange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setPriceRange(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleBrandSet = (e) => {
        if (e.target.checked) {
            const value = e.target.value;
            setBrands(prev => {
                return [...prev, value]
            })
        }
        if(!e.target.checked){
            const value=e.target.value;
            setBrands(prev=>{
                return prev.filter(b=>{
                   return b!==value
                });
            })
        }
    }
    const handleCategoriesSet = (e) => {
        if (e.target.checked) {
            const value = e.target.value;
            setCategories(prev => {
                return [...prev, value]
            })
        }
        if(!e.target.checked){
            const value=e.target.value;
            setCategories(prev=>{
                return prev.filter(c=>{
                   return c!==value
                });
            })
        }
    }
    const filterValuesApply = {
        brands: filBrands,
        categories: filCategories,
        price: priceRange
    }
    return (
        <div className='product-filter'>
            <div className="filter-header">
                <p>Filters</p>
                <button onClick={() => {
                    handleFilterSet(filterValuesApply)
                }} className='button'>Apply</button>
            </div>
            <hr />
            <div>
                <div className="f-inner-header">
                    <p>CATEGORIES</p>
                </div>
                <div className="category">
                    {
                        productFilters.categories?.map((category, idx) => {
                            return (
                                <div key={idx} className="c-1">
                                    <input onChange={handleCategoriesSet} type="checkbox" value={category} name="category" id="" />
                                    <span>{category}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr />
            <div>
                <div className="f-inner-header">
                    <p>PRICE</p>
                </div>
                <div className="price-range">
                    <input onChange={handlePriceRange} name='minValue' type="text" />
                    -
                    <input onChange={handlePriceRange} name='maxValue' type="text" />
                </div>
            </div>
            <hr />
            <div className="brand">
                <p>Brands</p>
                {
                    productFilters?.brands?.map((brand, idx) => {
                        return (
                            <div key={idx} className="c-1">
                                <input onChange={handleBrandSet} type="checkbox" value={brand} name={brand} id="" />
                                <span>{brand}</span>
                            </div>
                        )
                    })
                }

            </div>
            <hr />
            <div className="other">

            </div>

        </div>
    )
}

export default ProductFliter