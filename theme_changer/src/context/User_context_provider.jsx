import React, { useState } from "react";
import UserConstext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        < UserConstext.Provider value={{ user, setUser }}>
            {children}
        </UserConstext.Provider>

    )

}

export default UserContextProvider; 