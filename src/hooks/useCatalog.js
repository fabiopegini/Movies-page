import { useContext, useEffect, useState } from "react"
import { PagesContext } from "../contexts/pagesContext"

const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'


const useCatalog = () => {

  const {page} = useContext(PagesContext)

  const [catalog, setCatalog] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    async function getCatalog() {
      try {
        setLoading(true)
        const response = await fetch(URL)
        const data = await response.json()
        setCatalog(data.entries)
      } catch(error) {
        setError('Oops, something went wrong...')
        throw new Error('Error en el fetch')
      } finally {
        setLoading(false)
      }
    }
  
    getCatalog()
  }, [page])
  
  
  return (
      {catalog, loading, error}
    )
  }
  
  export default useCatalog