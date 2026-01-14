import { useContext } from "react";

import UserConstext from "../context/UserContext";

function Profile(){
 const {user}= useContext(UserConstext)
 if (!user) {
    return <div>please login </div>
 }
 return <div>you are welcome {user.username}</div>
}
export default Profile