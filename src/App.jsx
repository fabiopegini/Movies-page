import { useState } from 'react'
import './App.css'
import placeholderimg from './img/placeholder-img.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>DEMO Streaming</h1>
        <button>Log in</button>
        <a href="">Start your free trial</a>
      </header>

      <main>
        <h2>Popular Titles</h2>
        <div>
          <img src={placeholderimg} alt="" />
          <p>Popular Series</p>
        </div>
        <div>
          <img src={placeholderimg} alt="" />
          <p>Popular Movies</p>
        </div>
      </main>

      <footer>
        <div>
          <a href="">Home</a>
          <a href="">Terms and Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Collection Statement</a>
          <a href="">Help</a>
          <a href="">Manage Account</a>
        </div>
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        <div>
          <div>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
          <div>
            <a href="">App Store</a>
            <a href="">Google Play</a>
            <a href="">Microsoft</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
