import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useContext } from 'react'
import { LoginContext } from './contexts/loginContext'
import LoginModal from './components/LoginModal'
import Popup from './components/Popup'

function App() {

  const {loginModal, popupInfo} = useContext(LoginContext)

  return (
    <>
      {
        loginModal === true
        ? <LoginModal />
        : null
      }

      {
      popupInfo.open === true 
      ?
      <Popup />
      : null
      }

      <Header />

      <Main />

      <Footer />
    </>
  )
}

export default App
