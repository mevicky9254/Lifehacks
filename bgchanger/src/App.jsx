import { useState } from 'react'



function App() {
  const [bgcolor, setColor] = useState("orange");

  return (
    <>
      <div className='w-full h-screen duration-500' style={{backgroundColor: bgcolor}}>

      </div>
      <div className='fixed flex flex-wrap justify-center bottom-10 left-1/2 -translate-x-1/2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='w-20 h-10 rounded-full bg-red-500 border-4 border-white cursor-pointer' onClick={() => setColor("red")}>Red</button>
          <button className='w-20 h-10 rounded-full bg-blue-500 border-4 border-white cursor-pointer' onClick={() => setColor("blue")}>Blue</button>
          <button className='w-20 h-10 rounded-full bg-green-500 border-4 border-white cursor-pointer' onClick={() => setColor("green")}></button>
          <button className='w-20 h-10 rounded-full bg-yellow-500 border-4 border-white cursor-pointer' onClick={() => setColor("yellow")}></button>
          <button className='w-20 h-10 rounded-full bg-purple-500 border-4 border-white cursor-pointer' onClick={() => setColor("purple")}></button>
          <button className='w-20 h-10 rounded-full bg-pink-500 border-4 border-white cursor-pointer' onClick={() => setColor("pink")}>Pink</button> 
          <button className='w-20 h-10 rounded-full bg-orange-500 border-4 border-white cursor-pointer' onClick={()=>setColor("black")}>Black</button>   
          </div>
      </div>
    </>
  )
}

export default App
