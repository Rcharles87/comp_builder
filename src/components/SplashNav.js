import React from 'react'
import "./splashNav.scss"

function SplashNav() {
  return (
    <div className='splashNav'>
      <div className='splashNav__container'>
        <p>Find restaurants near you</p>
        <label htmlFor="search"></label>
        <input 
        id='search'
        type="text" 
        placeholder='Enter Zip Code'/>
      </div>
    </div>
  )
}

export default SplashNav