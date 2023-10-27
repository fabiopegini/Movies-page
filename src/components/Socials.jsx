import React from 'react'
import FooterLink from './FooterLink'

const links = [
    'Facebook',
    'Twitter',
    'Instagram'
]

const className = null

const SocialsLinks = () => {
    let arr = []
    links.map((link,index) => {
        arr[index] = <FooterLink name={link} key={link}/>
    })
    return arr
}

const Socials = () => {
  return (
    <div className='footer__contact__socials'>
        <SocialsLinks />
    </div>
  )
}

export default Socials