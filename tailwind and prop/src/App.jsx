import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  
 let obj={
  name:"hero",
  define:"superMan"
 }
  return (
    <>
      <h1 className="bg-green-400 font-bold text-black rounded mb-10">Tailwind and react</h1>
      <Card username="Ayman" text="click"/>
      <Card username="Insha"  text="click me"/>
    </>
  )
}

export default App
