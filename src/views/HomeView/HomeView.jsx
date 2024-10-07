import React from 'react'
import ItemListContainer from '../../componentes/ItemListContainer'
import Banner from '../../componentes/Banner'

function HomeView() {
    return (
        <div className='main'>
            <Banner />

            <ItemListContainer section={''}/>
            
        </div>
    )
}

export default HomeView