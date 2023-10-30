import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useContext } from 'react'
import { LoginContext } from './contexts/loginContext'
import LoginModal from './components/LoginModal'

function App() {

  const {loginModal} = useContext(LoginContext)

  return (
    <>
      {
        loginModal === true
        ? <LoginModal />
        : null
      }
    
      <Header />

      <Main />

      <Footer />
    </>
  )
}

export default App
