import React, { useContext } from 'react'
import { PagesContext } from '../contexts/pagesContext'
import { LoginContext } from '../contexts/loginContext'
import { navigate } from '../services/navigate'

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

    setPage('/' + newPage)
  }

  return (
    <a href={page !== null ? page : undefined}
      onClick={(ev) => {
          if(page === null) return

          //Aqui deberían estar las condiciones para que el link funcione de manera correcta. Ej: si se hace ctrl + click se abre en una nueva pestaña

          ev.preventDefault()
          navigate(page)
          handleClick(page)
        }
      }
      className='main__nav__item'
    >
      <img className='main__nav__item__img' src={imgUrl} alt={name}/>
      <h2 
        onClick={() => {handlePopup()}} 
        className='main__nav__item__title'>{name}
      </h2>
    </a>
  )
}

export default ItemLi