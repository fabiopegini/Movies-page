import React, { useContext } from 'react'
import mockURL from '../mocks/url.json'
import Products from "../components/Products";
import MainNav from "../components/MainNav";
import { PagesContext } from '../contexts/pagesContext';


function getCatalog() {
  return mockURL.entries
}

const catalog = getCatalog()

const Pages = () => {

  const {page} = useContext(PagesContext)

  return (
    <main className='main'>
      <h2 className='main__title'>Popular {page}</h2>      
      <section className='main__nav'>
        {page === 'Titles'
        ? <MainNav />
        : (page === 'Series'
          ? <Products catalog={catalog} reference={'series'}/> 
          : <Products catalog={catalog} reference={'movie'}/>)}
      </section>
    </main>
  )
}
  
export default Pages