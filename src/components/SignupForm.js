import React, { useState } from 'react'
import { TextField } from '@mui/material'

function SignupForm() {

    const [signup, setSignup] = useState({
        FName: "",
        LName: "",
        userName: "",
        password: "",
        phoneNum:""
    })


    const handleTextInput = (e) =>{
        e.preventDefault()
        setSignup({...signup, [e.target.id]:e.target.value})
    }

  return (
    <div>
        <div>

        <TextField
        // required
        id='outlined-text-input'
        label='First Name*'
        type="text"
        value={signup.firstName}
        />
         <TextField
        // required
        id='outlined-text-input'
        label='Last Name*'
        type="text"
        />
        <div>
          <TextField
        // required
        id='outlined-text-input'
        label='User Name*'
        type="text"
        />

        </div>
        </div>

          <TextField
        // required
        id='outlined-text-input'
        label='Phone Number*'
        type="phone"
        />
          <TextField
        // required
        id='outlined-text-input'
        label='create password*'
        type="text"
        />

    </div>
  )
}

export default SignupForm