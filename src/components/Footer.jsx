import React from 'react'
import '../components-styles/footer.css'
import FooterLinks from './FooterLinks'
import Socials from './Socials'
import Download from './Download'

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterLinks />
      <p className='footer__copyrights'>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className='footer__contact'>
        <Socials />
        <Download />
      </div>
    </footer>
  )
}
  
  export default Footer