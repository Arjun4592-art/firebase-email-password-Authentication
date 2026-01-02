import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { DNA } from 'react-loader-spinner'
import Navbar from './Navbar'

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null)

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user)
      const docRef = doc(db, 'Users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      } else {
        console.log('User does not login')
      }
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  
  return (
    <>
      <Navbar isLogged={userDetails} />
      {userDetails ? (
        <div className='main-container'>
          <h1>
            Welcome{' '}
            <span>{userDetails.firstName + ' ' + userDetails.lastName}</span>
          </h1>
          <p>{userDetails.email}</p>
        </div>
      ) : (
        <div className='main-container'>
          <h1>
            Welcome <span>User</span>
          </h1>
        </div>
      )}
    </>
  )
}

export default Profile
