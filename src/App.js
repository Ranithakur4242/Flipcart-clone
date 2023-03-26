import './App.css';
import Home from './Pages/home/Home';
import { mob_tab, Electronics, tv_app, beauty, furniture, grocery, fashion } from "./Pages/ProductData/dataByCategory"
import { Routes, Route, useNavigate } from 'react-router-dom'
import CatelogHome from './Pages/catalogue/CatelogHome';
import Navigation from './Pages/home/Navigation';
import Footer from './Pages/home/Footer'
import ProductsHome from './Pages/Products/ProductsHome';
import ProductDescHome from './Pages/Products/prodDescription/ProductDescHome';
import products from "./Pages/ProductData/productData"
import CartHome from './Pages/cart/CartHome';
import { useState } from 'react';
import CheckoutHome from './Pages/checkout/CheckoutHome';

function App() {
    const navigate=useNavigate();
    const [searchValue, setSearchValue] = useState();

    const handleSearch = async (value) => {
       await setSearchValue(value)
       navigate("/search")
       
    }

    const [cartItems, setCartItem] = useState([]);

    const cartItemSetter = (item) => {
        setCartItem(prev => {
            return [...prev, item]
        })
    }

    const searchedProds = products.filter((prodw) => {
        const tags = prodw.tags;
        return (
            prodw.tags.indexOf(searchValue)!==-1||prodw.tags.indexOf(tags.filter(tag => {
                return tag.includes(searchValue)
            })[0]) !== -1
        )
    })

    // filters values


    // filters values



    return (
        <main className='app'>
            <Navigation handleSearch={handleSearch} cartValue={cartItems.length} />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/categories' element={<CatelogHome />} />
                <Route exact path='/products' element={<ProductsHome products={products} />} />
                {
                    products?.map((product, idx) => {
                        return <Route key={idx} exact path={`/product${product.category}${product.uid}`} element={<ProductDescHome cartItemSetter={cartItemSetter} product={product} />} />
                    })
                }
                {/* category routes */}
                <Route exact path='/mobile+tablets' element={<ProductsHome category={["mobile", "tablet"]} products={mob_tab} />} />
                <Route exact path='/electronics' element={<ProductsHome category={[]} products={Electronics} />} />
                <Route exact path='/tv+appliance' element={<ProductsHome category={[]} products={tv_app} />} />
                <Route exact path='/fashion' element={<ProductsHome category={[]} products={fashion} />} />
                <Route exact path='/beauty+toys' element={<ProductsHome category={[]} products={beauty} />} />
                <Route exact path='/home+furniture' element={<ProductsHome category={[]} products={furniture} />} />
                <Route exact path='/grocery' element={<ProductsHome category={[]} products={grocery} />} />
                <Route exact path="search" element={<ProductsHome category={[]} products={searchedProds} />} />
                {/* category routes */}
                <Route exact path="/cart" element={<CartHome cartItems={cartItems} />} />
                <Route exact path="/checkout" element={<CheckoutHome cartItems={cartItems} />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;