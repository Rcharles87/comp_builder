import React from 'react'
import "./header.scss"
import Logo from "../assets/official-Logo.png"
import { Button } from '@mui/material'

function header() {
  return (
    <div className='header'>
      <div className='header__logoContainer'>
        <img  className='header__logo' src={Logo} alt="" />
      </div>

      <div className='header__buttonContainer'>
        <Button className='header__button' variant='contained'>Login</Button>
        <Button className='header__button' variant='contained'>Signup</Button>
      </div>
      
    </div>
  )
}

export default header