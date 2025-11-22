import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Mainpage() {
    return (
        <>
            <main>

                <div className='mt-7 flex justify-around'>
                    <div><img src="img1.png" alt="not there" /></div>
                    <div className='flex flex-col justify-center items-end text-right gap-1'>
                        <h1 className='font-bold text-4xl '>DOWNLOAD NOW</h1>
                        <h1 className='font-bold text-2xl text-right '>Lorem, ipsum.</h1>
                        <button className='bg-orange-600 p-1 text-white font-semibold rounded-md shadow-md items-end hover:scale-95 gap-0.5'>DOWNLOAD NOW</button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col mt-36 justify-center items-center'><img src="image.png" alt="not there" className='h-[400px] w-[400px]' /><h1 className='font-bold text-4xl'>Lorem, ipsum dolor.</h1></div>
                </div>


            </main>
        </>
    )
}

export default Mainpage