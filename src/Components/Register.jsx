import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      console.log(user)

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        })
      }

      console.log('User Registered Successfully!!!')
      toast.success('User Register Successfully!!', { position: 'top-center' })
      window.location.href = '/'
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, { position: 'bottom-center' })
    }
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleRegister}>
        <h1 className='form-heading'>
          <span>R</span>egister Now
        </h1>
        <div className='input-group'>
          <label htmlFor='fname' className='form-label'>
            First Name
          </label>
          <input
            className='form-input'
            type='text'
            id='fname'
            name='fname'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='lname' className='form-label'>
            Last Name
          </label>
          <input
            className='form-input'
            type='text'
            id='lname'
            name='lname'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
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
        <input type='submit' value='Register' className='btn btn-dark' />
        <p>
          Already hava an account? <a href='/login'>Log in</a>
        </p>
      </form>
    </div>
  )
}

export default Register
