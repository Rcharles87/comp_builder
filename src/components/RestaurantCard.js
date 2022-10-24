import React from 'react'
import "./restaurantCard.scss"

function RestaurantCard() {
  return (
    <div className='restaurant'>
        <div className='restaurant__container'>
            <div className='restaurant__imageContainer'>
               <img src="https://i.imgur.com/GTIL3Jh.png" alt="food" /> 
            </div>
            <div className='restaurant__textContainer'>
                <h3>Tamashii Ramen</h3>
                <p>2905 Broadway, Queens, NY 11106</p>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard