import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const{id}=useParams()
    return(
        <>
        <div className="flex  justify-center text-2xl h-14 bg-gray-400">user :{id} </div>
        </>
    )
}
export default User