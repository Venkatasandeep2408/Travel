import React from 'react'
import {PlaceList} from '../helpers/PlacesList'
import MenuItem from '../components/placeitem'
import '../styles/Places.css'

function List() {
  return (
    <div className='list'>
        <h1 className='Title'>Top Places</h1>
        <div className='placeList'>
            {PlaceList.map((menuItem, key)=>{
                return(
                    <MenuItem 
                    key={key}
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price} />
                );
            })}
        </div>
    </div>
  )
}

export default List
