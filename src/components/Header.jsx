import React from 'react'
import '../components-styles/header.css'

const Header = () => {

  function handleClick(){
    //Open the pop up log in module
  }
  
  return (
    <header className='header'>
      <h1 className='header__title'>DEMO Streaming</h1>
      <section className='header__button-container'>
        <button className='header__button-container__login' onClick={handleClick}>Log in</button>
        <a className='header__button-container__free-trial' href="">Start your free trial</a>
      </section>
    </header>
  )
}

export default Header