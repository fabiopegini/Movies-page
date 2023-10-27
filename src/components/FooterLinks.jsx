import React from 'react'
import FooterLink from './FooterLink'
FooterLink

const links = [
    'Home',
    'Terms and Conditions',
    'Privacy Policy',
    'Collection Statement',
    'Help',
    'Manage Account'
]

const className = 'footer__nav__link'

const LinksArray = () => {
    let arr = []
    links.map((link,index) => {
        arr[index] = <FooterLink name={link} className={className} key={link}/>
    })
    return arr
}

const FooterLinks = () => {
  return (
    <div className='footer__nav'>
        <LinksArray />
    </div>
  )
}

export default FooterLinks