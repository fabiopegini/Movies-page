import { mainNames } from "../constants";
import ItemLi from "../components/ItemLi";
import placeholderimg from '../img/placeholder-img.jpg'
import { navigate } from "../services/navigate";


const MainNav = () => {
  navigate('/')
  let arr = []
  mainNames.forEach((name,index) => {
    arr[index] = <ItemLi name={"Popular " + name} page={name} imgUrl={placeholderimg} key={name} />
  })
  return arr
}

export default MainNav