import { useState, useCallback } from 'react'



function App() {
  const [length, setLength] = useState(10)
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {

    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) chars += '0123456789';
    if (character) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    
    setPassword(generatedPassword);
  }, [length, number, character, password]);

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-xl mx-auto shadow-2xl rounded-lg px-4 py-5 bg-gray-700'>

        <div className='flex justify-between items-center mb-4'>
        <input type="text" value={password} className="outline-none w-full px-1 py-3 bg-amber-50 text-black" placeholder="password" readOnly/>
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
         <div className=' flex items-center gap-2'>
         <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
         <lable>Length: {length}</lable>
         <input type="checkbox" defaultChecked={number} id='numberInput'  onChange={()=>{
          setNumber((prev)=>!prev)
         }}/>
         <lable htmlFor='numberInput'>Include Numbers</lable>
         <input type="checkbox" defaultChecked={character} id='characterInput' onChange={()=>{
          setCharacter((prev)=>!prev)  
          }}/>
         <lable htmlFor='characterInput'>Include Symbols</lable> 
         </div>
      </div>
      </div>
      
    </>
  )
}

export default App
