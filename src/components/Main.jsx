import React from 'react'
import placeholderimg from '../img/placeholder-img.jpg'
import '../components-styles/main.css'

const Main = () => {
  return (
    <main className='main'>
      <h2 className='main__title'>Popular Titles</h2>
      <section className='main__nav'>

        <article className='main__nav__item'>
          <a className='main__nav__item__link' href="">
            <img className='main__nav__item__img' src={placeholderimg} alt="Click to display popular series" />
          </a>
          <p>Popular Series</p>
        </article>

        <article className='main__nav__item'>
          <a className='main__nav__item__link' href="">
            <img className='main__nav__item__img' src={placeholderimg} alt="Click to display popular Movies" />
          </a>
          <p>Popular Movies</p>
        </article>

      </section>
  </main>
  )
}

export default Main