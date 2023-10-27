import React from 'react'
import '../components-styles/main.css'
import Category from './Category'

const Main = () => {
  return (
    <main className='main'>
      <h2 className='main__title'>Popular Titles</h2>
      <section className='main__nav'>
        <Category name='Series'/>
        <Category name='Movies'/>
      </section>
    </main>
  )
}

export default Main