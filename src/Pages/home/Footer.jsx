import React from 'react'
import "./homeStyles.css"
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
          <div className="table-inn">
            <table>
              <thead>
                <tr>
                  <td>About</td>
                  <td>Help</td>
                  <td>Policy</td>
                  <td>Social</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Contact Us
                  </td>
                  <td>
                    Payment
                  </td>
                  <td>
                    Return Policy
                  </td>
                  <td>
                    Facebook
                  </td>
                </tr>
                <tr>
                  <td>
                    About Us
                  </td>
                  <td>
                    Report Infringement
                  </td>
                  <td>
                    Terms Of Use
                  </td>
                  <td>
                    Twitter
                  </td>
                </tr>
                <tr>
                  <td>
                    Career
                  </td>
                  <td>
                    Shipping
                  </td>
                  <td>
                    Security
                  </td>
                  <td>
                    YouTube
                  </td>
                </tr>
                <tr>
                  <td>
                    Flipkart Story
                  </td>
                  <td>
                    Cancellation & Return
                  </td>
                  <td>
                    Privacy
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Press
                  </td>
                  <td>FAQ</td>
                  <td>
                    Sitemap
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Flipkart Wholesale
                  </td>
                  <td></td>
                  <td>Error Compilation</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Corporate Information
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="horizontal" ></div>
        </div>
        <div className="footer-right">
          <div className="table-inn">
            <table>
              <thead>
                <tr>
                  <td>
                    Mail Us:
                  </td>
                  <td>
                    Office Registered Office
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                  </td>
                  <td>
                    Flipkart Internet Private Limited,

                    Buildings Alyssa, Begonia &

                    Clove Embassy Tech Village,

                    Outer Ring Road, Devarabeesanahalli Village,

                    Bengaluru, 560103,

                    Karnataka, India

                    CIN : U51109KA2012PTC066107

                    Telephone: 044-45614700
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bootom">
        <p className='fb-item'><WorkIcon sx={{ color: "#FFC800", width:"1rem" }} /> Become a Seller</p>
        <p className='fb-item'><StarsIcon sx={{ color: "#FFC800" , width:"1rem" }} /> Advertise</p>
        <p className='fb-item'><CardGiftcardIcon sx={{ color: "#FFC800" , width:"1rem" }} /> Gift Cards</p>
        <p className='fb-item'><HelpRoundedIcon sx={{ color: "#FFC800" , width:"1rem" }} /> Help Center</p>
        <p className='fb-item'>&copy; flipkart-clone.netlify.com 2023</p>
        <img src="assets/Home/ft-cards.png" alt="" className="fb-img" />
      </div>
    </div>
  )
}

export default Footer