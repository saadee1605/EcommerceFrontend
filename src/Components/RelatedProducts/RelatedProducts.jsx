import React from 'react'
import './RelatedProducts.css'
import data from '../Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
    const setscreen=()=>{
        window.scrollTo(0, 0);
       
    }
    return (
        <div className='related-products'>
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item" onClick={setscreen}>
                {data.map((element, index) => {
                    return <Item key={element.id} image={element.image} id={element.id} name={element.name} new_price={element.new_price} old_price={element.old_price} />

                })}
            </div>
        </div>
    )
}

export default RelatedProducts
