import React, { useContext } from 'react'
import { PagesContext } from '../contexts/pagesContext'

const ItemLi = ({ name, page = null , imgUrl }) => {
  const {setPage} = useContext(PagesContext)
  
  function handleClick(newPage){
    if(newPage === null) return

    setPage(newPage)
  }

  return (
    <div onClick={() => {handleClick(page)}}className='main__nav__item'>
        <img className='main__nav__item__img' src={imgUrl} alt={name}/>
        <h2 className='main__nav__item__title'>{name}</h2>
    </div>
  )
}

export default ItemLi