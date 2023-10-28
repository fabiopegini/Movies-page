import '../components-styles/main.css'
import { PagesContextProvider } from '../contexts/pagesContext'
import Pages from './Pages'



const Main = () => {
  return (
    <PagesContextProvider>
      <Pages />
    </PagesContextProvider>
  )
}

export default Main