import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'
import '../App.css'

const Card = ({item}) => {

  const {favs, dispatch} = useCharStates()

  const findFav = favs.find((fav) => fav.id == item.id)

  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div className="Boxes" >
      <Link to={'/detail/' + item.id}>
      <img src="/images/doctor.jpg" className='Docimg' alt="" />
        <h4>{item.name}</h4>
        <p>{item.username}</p>
      </Link>
      <button onClick={addFav}>{findFav ? '💖' : '❤'}</button>
    </div>
  )
}

export default Card