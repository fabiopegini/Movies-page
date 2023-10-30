import React from 'react'
import '../components-styles/loginModal.css'

const LoginModal = () => {
  return (
    <div className='modal'>
      <div className='modal__box'>
        <h2 className='modal__box__title'>Log in</h2>
        <form className='modal__box__form'>
          <label htmlFor="login-username">
            <h3 className='modal__box__form__title'>Username</h3>
            <input className='modal__box__form__input' type="text" name="" id="login-username" />
          </label>
          <label htmlFor="login-password">
            <h3 className='modal__box__form__title'>Password</h3>
            <input className='modal__box__form__input' type="password" name="" id="login-password" />
          </label>
          <button className='modal__box__submit' type='submit'>Log in</button>
        </form>
          <a className='modal__box__link' href="#">Forgot Password?</a>
      </div>
    </div>
  )
}

export default LoginModal