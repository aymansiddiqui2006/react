import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //count = initial value and setcount = the updated value
  let [count,setcount]=useState(0) //useState is resposible for updating the value

  function action(){
    //if we are calling function multiple time i does not mean that it will call one by one
    //like count = 0->1->2->3...->n
    //with the help of fiber if the function is similar then i will call the functions in bulk so it will use as one
    //but i we want to use in this we that in one call the count will increase 0->1->2->3...->n this way then we have to use this
    //setcount((prevcount)=>prevcount+1)  prevcount is the previvious value
    setcount(count+1)
    setcount(count+1)
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
    
  }

  return (

    <>
      <h1>hello world</h1>
      <h2>count value:{count}</h2>
      <button onClick={action}>ADD VALUE</button>
      <br></br>
      <button onClick={dec}>REMOVE VALUE</button>
    </>
  )
}

export default App
