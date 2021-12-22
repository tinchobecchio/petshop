import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

    return (
        <div className='itemList'>
            {items.map(i => <Item id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl} key={i.title} />)}
        </div>
    )
}

export default ItemList
