import {  useState } from "react";

import UserContext from "./User_Context";


const UserContextProvider=({children})=>{
    const [user,setuser]=useState({});
    return(
        <UserContext.Provider value={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;