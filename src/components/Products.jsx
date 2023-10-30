import React from 'react'
import ItemLi from './ItemLi'
import { renderPerPage } from '../constants'

function getProducts(catalog,reference){
  let arr = []
  arr = catalog.filter((product) => product.programType === reference
  )
  return arr
}

const Products = ({catalog,reference}) => {
  let arrOfProducts = getProducts(catalog,reference)
  let arr = []
  arrOfProducts.forEach((product,index) => {
    arr[index] = <ItemLi name={product.title} imgUrl={product.images["Poster Art"].url} key={product.title}/>
  })
  return arr.slice(0,renderPerPage)
}

export default Products