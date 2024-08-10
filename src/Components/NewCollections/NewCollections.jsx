import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="new-collections-item">
                {new_collections.map(element => {
                    return <Item key={element.id} image={element.image} id={element.id} name={element.name} new_price={element.new_price} old_price={element.old_price} />
                })}
            </div>

        </div>



    )
}

export default NewCollections
