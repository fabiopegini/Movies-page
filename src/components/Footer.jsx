import React from 'react'
import '../components-styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__nav'>
        <a href="" className='footer__nav__link'>Home</a>
        <a href="" className='footer__nav__link'>Terms and Conditions</a>
        <a href="" className='footer__nav__link'>Privacy Policy</a>
        <a href="" className='footer__nav__link'>Collection Statement</a>
        <a href="" className='footer__nav__link'>Help</a>
        <a href="" className='footer__nav__link'>Manage Account</a>
      </div>
      <p className='footer__copyrights'>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className='footer__contact'>
        <div className='footer__contact__socials'>
          <a href=''>Facebook</a>
          <a href=''>Twitter</a>
          <a href=''>Instagram</a>
        </div>
        <div className='footer__contact__download'>
          <a href="">App Store</a>
          <a href="">Google Play</a>
          <a href="">Microsoft</a>
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer