import React from 'react'
import '../Pages/CSS/LoginSignUp.css'
function LoginSignUp() {
  return (
    <div className='login-signuup'>
      <div className="upper">
        <h1>Sign Up</h1>
        <input className='input-field' type="text" placeholder='Your Name' />
        <input className='input-field' type="email" placeholder='Email Address' />
        <input className='input-field' type="password" placeholder='Password' />
        <button className='button input-field'>Continue</button>
      </div>
      <div className="login-signUp-lower">
        <div className="already">
          <p>Already have an account?</p>
          <p className='already-red'>Login here</p>
        </div>
        <div>
          <input className='already-checkbox' type="checkbox" />
        </div>
        <p className='last-para-already' >By continuing,I agree to the terms of use and privacy policy. </p>
      </div>
    </div>
  )
}

export default LoginSignUp
