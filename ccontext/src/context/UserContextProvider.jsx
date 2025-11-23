import React, {  useState } from "react";
import UserContext from "./userContext";



const userContextProvider=({children})=>{
    const [user,setuser]=React.useState({})
    return(
        <UserContext.Provider value={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )

}

export default userContextProvider;