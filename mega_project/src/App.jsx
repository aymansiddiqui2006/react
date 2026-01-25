import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './config/store/authSlice'
function App() {
  const [loading, setload] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData))
      } else {
        dispatch(logout())
      }

    }).finally(() => {
      setload(false)
    })
  }, [])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
    </div>
  ):null
  
}

export default App
