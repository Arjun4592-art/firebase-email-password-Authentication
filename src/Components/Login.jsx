import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Logged in successfully', { position: 'top-center' })

      window.location.href = '/'
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, { position: 'top-center' })
    }
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleLogin}>
        <h1 className='form-heading'>
          <span>L</span>ogin
        </h1>
        <div className='input-group'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            className='form-input'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            className='form-input'
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-dark' />
        <p>
          Don't hava account? <a href='/register'>Register</a>
        </p>
      </form>
    </div>
  )
}

export default Login
