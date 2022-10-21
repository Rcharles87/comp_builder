import React from 'react'
import "./splashNav.scss"
import { TextField } from '@mui/material'

function SplashNav() {
  return (
    <div className='splashNav'>
      <div className='splashNav__container'>
        <p>Find restaurants near you</p>
        <TextField sx={{backgroundColor: "white", borderRadius: "25px"}} variant='outlined' defaultValue="Enter Zip Code"/>
        {/* <label htmlFor="search"></label>
        <input 
        id='search'
        type="text" 
        placeholder='Enter Zip Code'/> */}
      </div>
    </div>
  )
}

export default SplashNav