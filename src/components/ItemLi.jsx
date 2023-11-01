import React, { useContext } from 'react'
import { PagesContext } from '../contexts/pagesContext'
import { LoginContext } from '../contexts/loginContext'

const ItemLi = ({ name, page = null , imgUrl, releaseYear = null, description = null  }) => {
  const {setPage} = useContext(PagesContext)
  const {setPopupInfo} = useContext(LoginContext)

  function handlePopup() {
    if(page) return
    setPopupInfo({
      open: true,
      title: name,
      description: description,
      releaseYear: releaseYear,
      imgURL: imgUrl
    })
  }
  
  function handleClick(newPage){
    if(newPage === null) return

    setPage(newPage)
  }

  return (
    <div onClick={() => {handleClick(page)}}className='main__nav__item'>
        <img className='main__nav__item__img' src={imgUrl} alt={name}/>
        <h2 
          onClick={() => {handlePopup()}} 
          className='main__nav__item__title'>{name}
        </h2>
    </div>
  )
}

export default ItemLi