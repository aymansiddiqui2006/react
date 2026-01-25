import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './config/store/authSlice'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import {Outlet}from 'react-router-dom'

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
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
  
}

export default App
