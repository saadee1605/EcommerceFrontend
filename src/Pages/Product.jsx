import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDIsplay/ProductDisplay'
import all_products from '../Components/Assets/all_product'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const { productId } = useParams()
  const product = all_products.find((e) => {
    return e.id === parseInt(productId);
  })

  return (
    <div>
      
      {product && <BreadCrums name={product.name} category={product.category} />}
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product