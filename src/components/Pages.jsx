import React, { useContext, useEffect} from 'react'
import Products from "../components/Products";
import MainNav from "../components/MainNav";
import { PagesContext } from '../contexts/pagesContext';
import useCatalog from '../hooks/useCatalog';

const Pages = () => {

  const {page, setPage} = useContext(PagesContext)

  const {catalog, loading, error} = useCatalog()

  useEffect(() => {
    const changeLocation = () => {
      setPage(window.location.pathname)
    }

    window.addEventListener('pushstate', changeLocation)
    window.addEventListener('popstate', changeLocation)

    return () => {
      window.removeEventListener('pushstate', changeLocation)
      window.removeEventListener('popstate', changeLocation)
    }
  },[])

  return (
    <main className='main'>
      <h2 className='main__title'>
        Popular { 
        page === '/' 
        ? 'Titles' 
        : page.slice(1)
        }
      </h2>      
      <section className='main__nav'>
        {
        page === '/'
        ? <MainNav />
        : (error !== null
          ? <p>{error}</p> 
          : (page === '/Series' 
            ? (loading 
              ? <p>Loading...</p>
              : <Products catalog={catalog} reference={'series'}/>
              )
            : (loading 
              ? <p>Loading...</p>
              : (page === '/Movies' 
                ? <Products catalog={catalog} reference={'movie'}/>
                : '404 Not Found'
                )
              )
            )
          )
        }
      </section>
    </main>
  )
}

export default Pages