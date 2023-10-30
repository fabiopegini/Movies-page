import React, { useContext } from 'react'
import '../components-styles/header.css'
import { LoginContext } from '../contexts/loginContext'

const Header = () => {

  const {loginModal, setLoginModal} = useContext(LoginContext)
  
  return (
    <header className='header'>
      <h1 className='header__title'>DEMO Streaming</h1>
      <section className='header__button-container'>
        <button className='header__button-container__login' onClick={() => {setLoginModal(!loginModal)
        }}>Log in</button>
        <a className='header__button-container__free-trial' href="">Start your free trial</a>
      </section>
    </header>
  )
}

export default Header