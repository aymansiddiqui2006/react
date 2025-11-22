import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    // const [data, setdata] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aymansiddiqui2006')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setdata(data)
    //         })
    // }, [])
    return (
        <>
            <div className="bg-gray-500" >
                <div className="flex  justify-center text-2xl h-14 bg-gray-400">follower : {data.followers}</div>
                <div className="flex  justify-center text-2xl h-14 bg-gray-400">user : {data.name || data.login}</div>

                <img src={data.avatar_url} alt="not there!!" className="h-[350px] w-[350px] shadow-2xl rounded-md slide-right" />
            </div>

        </>
    )
}

export default Github
export const getGithub=async()=>{
 const response=await fetch('https://api.github.com/users/aymansiddiqui2006')
 return response.json()
}