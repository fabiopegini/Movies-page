import React from 'react'

const FooterLink = ({name, className = null}) => {
  return (
    <a href="" className={className}>{name}</a>
  )
}

export default FooterLink