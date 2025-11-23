import './App.css'
import Login from './component/login'
import Profile from './component/profile'

import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
