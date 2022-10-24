import React from 'react'
import takeout from "../assets/takeout.png"
import "./infographic.scss"

function Infographic() {
  return (
    <div className='infographics'>
        <div className='infographics__container'>
            <div className='graphic'>
                <img src={takeout} />
                <h2>66.3</h2>
                <h6>MILLION PEOPLE FINDING AND SAVING DELICIOUS FOOD</h6>
            </div>
            <div className='graphic'>
            <img src={takeout} />
                <h2>66.3</h2>
                <h6>MILLION PEOPLE FINDING AND SAVING DELICIOUS FOOD</h6>

            </div>
            <div className='graphic'>
            <img src={takeout} />
                <h2>66.3</h2>
                <h6>MILLION PEOPLE FINDING AND SAVING DELICIOUS FOOD</h6>

            </div>
        </div>

    </div>
  )
}

export default Infographic