import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../firebase'

const Navbar = (props) => {
  // console.log(props)
  const { firstName } = props.isLogged || 0
  console.log(firstName)

  const handleLogout = async () => {
    try {
      await auth.signOut()
      window.location.href = '/'
      console.log('User logged out successfully!!')
      toast.success('User logged out successfully!!', {
        position: 'top-center',
      })
    } catch (error) {
      console.log(error.message)
      toast.success(error.message, {
        position: 'bottom-center',
      })
    }
  }
  return (
    <div className='navbar'>
      <a href='/' className='navbar-link'>
        <ion-icon name='logo-firebase' className='logo-firebase'></ion-icon>
        <span>firebase</span>
      </a>
      <ul className='navbar-list'>
        <li className='navbar-item active'>Home</li>
        <li className='navbar-item'>About</li>
        <li className='navbar-item'>Contact</li>
      </ul>
      {firstName ? (
        <button className='btn' onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <div>
          <button
            className='btn'
            onClick={() => (window.location.href = '/login')}
          >
            Login
          </button>
          <button
            className='btn btn-dark'
            onClick={() => (window.location.href = '/register')}
          >
            Register
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
