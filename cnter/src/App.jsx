

import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);


  
  return (
    <>
      <h1>react counter {counter} </h1>
      
      
      <button onClick={() => {
        
        if (counter < 20) {
        
          setCounter(++counter);
          
        }
        
      }}>  add  {counter} </button>


      <br />
      <br />
      <button onClick={() => {
        
        if (counter > 0) {
          setCounter(--counter);
        }
        
        setTimeout(() => { console.log("current counter ", counter); }, 0)
      }}>remove {counter}</button>a
      <div>footer : { counter }</div>
    </>
  )
}

export default App
