import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
