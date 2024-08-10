import React from 'react'
import '../Pages/CSS/ShopCategory.css'
import drop_down from '../Components/Assets/dropdown_icon.png'
import all_products from '../Components/Assets/all_product'
import Item from '../Components/Item/Item'
function ShopCategory(props) {
  return (
    <div className='shop-cateogry'>
      <img  className='shop-banner'src={props.banner} alt="" />
      <div className="shop-text-item">
        <p>Showing 12 Out Of 36 Products</p>
        <span>Sort by <img src={drop_down} alt="" /></span>
      </div>
      <div className="show-respective-item">
        {all_products.map(element => {
          if (element.category === props.category) {
            return <Item key={element.id} image={element.image} name={element.name} old_price={element.old_price} new_price={element.new_price} id={element.id} />
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory
