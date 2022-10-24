import React from 'react'
import './button.scss'

function Button({name='name', size='medium', color='primary', type= null,onClick }) {

  let onButtonClick = () => {
    if(onClick){
      onClick(name)
    }
  }
  return (
    <button className={`button ${color} ${size}`} onClick={onButtonClick}>{name}</button>
  )
}





export default Button