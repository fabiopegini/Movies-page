import React, { useContext } from 'react'
import '../components-styles/popup.css'
import { LoginContext } from '../contexts/loginContext'

const Popup = () => {
  const {popupInfo, setPopupInfo} = useContext(LoginContext)
  return (
    <div className='modalpu'>
      <div className='modalpu__box'>
        <h2 className='modalpu__box__title'>{popupInfo.title}</h2>
        <p className='modalpu__box__description'>{popupInfo.description}</p>
        <p className='modalpu__box__year'>{popupInfo.releaseYear}</p>
        <img className='modalpu__box__img'src={popupInfo.imgURL} alt="Portada" />
        <button onClick={() => {
            setPopupInfo({
              open: false,
              title: null,
              description: null,
              releaseYear: null,
              imgUrl: null
            })
          }
        }
        >Volver</button>
      </div>
    </div>
  )
}

export default Popup