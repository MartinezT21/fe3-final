import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'
import '../Components/components.css'

const Favs = () => {

  const {favs} = useCharStates()

  return (
    <div className='divFav'>
      {favs.map(fav => <Card item={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs