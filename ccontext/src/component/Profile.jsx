import React, { useContext } from "react";
import UserContext from "../context/User_Context";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user.userName) {
    return <div>Please Login</div>;
  }

  return <div>WELCOME {user.userName}</div>;
}

export default Profile;
