import React from 'react'
import placeholderimg from '../img/placeholder-img.jpg'

const Category = ({name}) => {
  const alt = `Popular ${name}`
  return (
    <article className='main__nav__item'>
      <a className='main__nav__item__link' href="">
        <img className='main__nav__item__img' src={placeholderimg} alt={alt} />
      </a>
      <p>Popular {name}</p>
    </article>
  )
}
  
  export default Category