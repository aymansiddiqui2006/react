import { useState, useCallback, useEffect,useRef } from 'react'

import './App.css'


function App() {
  const [length, setlength] = useState(6);
  const [num, setnum] = useState(false);
  const [chare, setchar] = useState(false);
  const [pass, setpass] = useState("");
  const passref=useRef(null)

  const generatepass = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (chare) str += "!@#$%^&*()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)

    }
    setpass(password)

  }, [length, num, chare])

  const keyboard=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(pass)
    setTimeout(() => setpass(""), 5000);
  },[pass])

  const refresh=useCallback(()=>{
    setpass("")
  },[pass])

// useEffect(() => {
//     generatepass()
//   }, [length, num, chare])
  const generate=useCallback(()=>{generatepass()},[generatepass])

  return (
    <div className='flex justify-center items-center h-screen text-orange-400 font-bold'>
      {/* main box */}
      <div className='h-[250px] w-[550px] bg-gray-500/40 rounded-3xl shadow-xl shadow-yellow-100/20  flex flex-col items-center '>
        <h2 className='font-bold text-2xl text-amber-50 '>PASSWORD GENERETOR</h2>

        {/* display box */}
        <div className='w-[450px] mt-6 flex items-center justify-between
         bg-white rounded-md ove'>
          <input type="text" value={pass} placeholder='PASSWORD' className='w-[400px] h-10 px-3 text-black '
            readOnly
            ref={passref}
          />
          <button className='text-white font-bold bg-blue-700 h-10 w-[85px] rounded-r-md active:scale-95  active:bg-blue-950 transition-all duration-150'
          onClick={keyboard}>COPY</button>
        </div>

        {/* options box */}
        <div className='flex gap-5 mt-5'>
          <div className='flex items-center gap-x-l'>
            <input type="range" min={6} max={50}
              value={length} className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label >length:{length}</label>
          </div>
          <div className='flex items-center gap-x-l'>
            <input type="checkbox" defaultChecked={num}
              onChange={() => setnum((prev) => !prev)}
            /><label>Number</label>
          </div>
          <div className='flex items-center gap-x-l'>
            <input type="checkbox" defaultChecked={chare}
              onChange={() => setchar((prev) => !prev)}
            /><label>Charecter</label>
          </div>
        </div>

        {/* generate box */}
        <div className='gap-6 flex '>
        <button className='rounded-md h-10 w-40 bg-blue-500 mt-9 text-amber-50 font-extrabold font-serif active:scale-95' onClick={()=>generate()}>Generate</button>

        <button className='rounded-md h-10 w-40 bg-blue-500 mt-9 text-amber-50 font-extrabold font-serif active:scale-95' onClick={()=>refresh()}>Refresh</button></div>

      </div>
    </div>
  )
}

export default App
