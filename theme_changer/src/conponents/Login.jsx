import { useState, useContext } from "react"
import UserConstext from "../context/UserContext"
function Login() {
    const [username, setusername] = useState('');
    const [pass, setpass] = useState('');
    const { setuser } = useContext(UserConstext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({ username, pass })

    }
    return (
        <div>
            <h1>LOGIN</h1>
            <input type="text"
                value={user}
                onChange={(e) = setusername(e.target.value)}
                placeholder="Username" required></input>
            <input type="text"
                value={pass}
                onChange={(e) = setpass(e.target.value)}
                placeholder="password" required></input>
            <label><input type="checkbox">btech</input></label>
            <label><input type="checkbox">medical</input></label>
            <button onClick={handleSubmit}>submit</button>

        </div>
    )
}

export default Login

