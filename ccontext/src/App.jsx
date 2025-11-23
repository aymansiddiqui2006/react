import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import UserContext from './context/userContext'
import userContextProvider from './context/UserContextProvider'

function App() {

  return (
    <userContextProvider>
      <h1>hello</h1>
      <Login/>
      <Profile/>
    </userContextProvider>
  )
}

export default App
