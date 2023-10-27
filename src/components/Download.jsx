import React from 'react'
import FooterLink from './FooterLink'

const links = [
  'App Store',
  'Google Play',
  'Microsoft'
]

const DownloadLinks = () => {
  let arr = []
  links.map((link,index) => {
    arr[index] = <FooterLink name={link} key={link} />
  })
  return arr
}

const Download = () => {


  return (
    <div className='footer__contact__download'>
      <DownloadLinks />
    </div>
  )
}
  
export default Download