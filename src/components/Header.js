import React from 'react'
import "./header.scss"
import Logo from "../assets/official-Logo.png"
import Button from './shared/Button'

function header() {
  return (
    <div className='header'>
      <div className='header__logoContainer'>
        <img  className='header__logo' src={Logo} alt="" />
      </div>
      <div className='header__buttonContainer'>
        <Button name='login' size='small' />
        <Button name='signup' size='small'/>
      </div>
    </div>
  )
}

export default header