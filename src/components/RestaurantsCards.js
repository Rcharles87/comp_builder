import React, { useState } from 'react'
import "./restaurantsCards.scss"
import RestaurantCard from './RestaurantCard'


const restaurantsData = [
    {id: 1, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
    {id: 2, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
    {id: 3, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
    {id: 4, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
    {id: 5, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
    {id: 6, title: "tamashii ramen", address: "2905 Broadway, Queens, NY 11106", image:"https://i.imgur.com/GTIL3Jh.png"},
]

function RestaurantsCard() {
    let [restaurants, setrestaurant] = useState(restaurantsData)

  return (
    <div className='restaurantsCards'>
        <div className='restaurantsCards__container'>
            {restaurants.map((restaurant, index)=>{
                return <RestaurantCard key={index+1} restaurant={restaurant}/>
            })}
        </div>
     
    </div>
  )
}

export default RestaurantsCard