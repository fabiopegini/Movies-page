import React from 'react'
import ItemLi from './ItemLi'
import { renderPerPage } from '../constants'

function getProducts(catalog,reference){
  let arr = []
  arr = catalog.filter((product) => {
    return (
      product.programType === reference
      && 
      product.releaseYear >= 2010
    )
  }
  )
  
  arr.sort((a,b) => {
    if(a.title < b.title) return -1
    if(a.title > b.title) return 1
    return 0
  })

  return arr
}

const Products = ({catalog,reference}) => {
  let arrOfProducts = getProducts(catalog,reference)
  let arr = []
  arrOfProducts.forEach((product,index) => {
    arr[index] = <ItemLi name={product.title} imgUrl={product.images["Poster Art"].url} releaseYear={product.releaseYear} description={product.description} key={product.title}/>
  })
  return arr.slice(0,renderPerPage)
}

export default Products