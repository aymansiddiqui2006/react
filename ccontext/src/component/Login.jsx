import React, {use, useContext,useState} from "react";
import UserContext from "../context/userContext";

function Login(){
    const [userName,setUserName]=useState('');
    const [Password,setPassword]=useState('');
    const {setuser}=useContext(UserContext)
    


    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({userName,Password})
    }
    return(
        <>
        <div>
            <h1>LOGIN</h1>
            <input type="text" placeholder="Enter Username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            <input type="password" placeholder="Eneter Password" value={Password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        </>
    )
}

export default Login;