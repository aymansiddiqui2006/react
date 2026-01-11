import React, { useState } from "react";
import User_constext from "./User_context";

const UserContextProvider = ({ children }) => {
    const [user,setUser]=useState(null)

    return (
        < User_constext.Provider value={{user,setUser}}>
            {children}
        </User_constext.Provider>

    )

}

            export default UserContextProvider;