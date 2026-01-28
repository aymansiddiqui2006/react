import Header from './component/Header/Header'
import './App.css'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
      <Header />
      <Outlet />
      <footer />
    </>
  )
}

export default App
