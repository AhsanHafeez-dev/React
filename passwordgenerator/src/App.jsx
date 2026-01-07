import { useCallback, useEffect, useState } from 'react';
import './App.css';

import { useRef } from 'react';


function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [useSpcialCharacter, setUseSpecialCharacter] = useState(false)
  const passwordRef = useRef(null);
  const onlyCharacter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const withNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const withSpecialCharacter ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
  const everything =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";


  function generatePassword() {
    let arr;
    if (!useNumber && !useSpcialCharacter) arr = onlyCharacter;
    else if (useNumber && !useSpcialCharacter) arr = withNumber;
    else if (!useNumber && useSpcialCharacter) arr = withSpecialCharacter;
    else arr = everything;
    let ps = "";
    for (let i = 0; i < length; i++){
      ps += arr[Math.floor(Math.random() * arr.length)];

    }
    setPassword(ps);



     
  }


  const cachedGeneratePassword=useCallback(generatePassword,[useNumber,useSpcialCharacter,length,setPassword])


  useEffect(()=>{cachedGeneratePassword()},[useNumber,useSpcialCharacter,length,cachedGeneratePassword])
  
  const copyPasswordToClipboard = useCallback(
    () => { 
      
      
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, length+1)
      window.navigator.clipboard.writeText(password);
      console.log(password);
      
    },
    [password]
  )
  
  



  return (
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={useNumber}
          id="numberInput"
          onChange={() => {
              setUseNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={useSpcialCharacter}
              id="characterInput"
              onChange={() => {
                  setUseSpecialCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}




export default App
