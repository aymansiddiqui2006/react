import Login from "./conponents/Login"
import Profile from "./conponents/Profile"
import UserContextProvider from "./context/User_context_provider"


function App() {
  

  return (
    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
