import React from 'react'
import Navbar from './Navbar'
import Image from './robots.png'

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className='not-found'>
        <div className='not-found-data'>
          <h1 className='not-found-heading'>404</h1>
          <h4 className='not-found-text'>Sorry, the page not found</h4>
          <p className='not-found-link'>
            Go to homepage <a href='/'>Home</a>
          </p>
        </div>
        <div className='not-found-image'>
          <img src={Image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default NotFound
