import React from 'react'
import './Popular.css'
import dataProduct from '../Assets/data'
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {dataProduct.map(index => {
          return <Item key={index.id} image={index.image} name={index.name} new_price={index.new_price} id={index.id}  old_price={index.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
