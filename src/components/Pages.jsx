import React, { useContext} from 'react'
import Products from "../components/Products";
import MainNav from "../components/MainNav";
import { PagesContext } from '../contexts/pagesContext';
import useCatalog from '../hooks/useCatalog';

const Pages = () => {

  const {page} = useContext(PagesContext)

  const {catalog, loading, error} = useCatalog()

  return (
    <main className='main'>
      <h2 className='main__title'>Popular {page}</h2>      
      <section className='main__nav'>
        {
        page === 'Titles'
        ? <MainNav />
        : (error !== null
          ? <p>{error}</p> 
          : (page === 'Series' 
            ? (loading 
              ? <p>Loading...</p>
              : <Products catalog={catalog} reference={'series'}/> )
            : (loading 
              ? <p>Loading...</p>
              : <Products catalog={catalog} reference={'movie'}/>)
            )
          )
        }
      </section>
    </main>
  )
}
  
export default Pages