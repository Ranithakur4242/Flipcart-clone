import React, { useState } from 'react'
import "./homeStyles.css"
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";

import swal from 'sweetalert';




const Navigation = ({ cartValue, handleSearch }) => {
    const Navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        if (e.key === "Enter" || e.target.name === "clickIcon") {
            if (e.target.value) {
                handleSearch(search.toLowerCase())
                setSearch("");
            } else {
                swal("Ohho", "Enter any product...", "error")
            }
        }
    }
    const handleSearchInput2 = (e) => {
        if (search) {
            handleSearch(search.toLowerCase())
            setSearch("");
        } else {
            swal("Ohho", "Enter any product...", "error")
        }
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [inpName, setInpName] = useState("");
    const [name, setName] = useState("");

    const handleInputName = (e) => {
        const value = e.target.value;
        setInpName(value)
    }
    const handleName = (e) => {
        setName(inpName)
        handleClose();
    }

    return (
        <div className="navigation-brand">
            <img className='brand-img' src="assets/Home/Brand.png" alt="Brand img" />
            <div className='navigation'>
                <div className="search-bar">
                    <input value={search} onKeyDown={handleSearchInput} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder='Search for products, brands and more' />
                    <SearchIcon onClick={handleSearchInput2} />

                </div>

                {name ? <span>{name}</span> : <button onClick={handleClickOpen}>Login</button>}


                <span>Become a Seller</span>

                <span>More</span>

                <span onClick={() => {
                    Navigate("/cart")
                }} className='cart'> <ShoppingCartIcon /><span className='cartvalue'>{cartValue}</span> Cart</span>


            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent sx={{ padding: "0", margin: "0" }}>
                    <div className="login-dialogue">
                        <div className="ld-left">
                            <div className="ldr-top">
                                <h3>Login</h3>
                                <p>Get access to your Orders, Wishlist and Recommendations</p>
                            </div>
                            <img src="assets/login/login.jpg" alt="" />
                        </div>
                        <div className="ld-right">
                            <TextField onChange={handleInputName} sx={{ width: "100%" }} id="standard-basic" label="Enter Name" variant="standard" />
                            <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                            <button onClick={handleName}>Continue</button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Navigation