import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  console.log(useState(5)[1] )
  // let counter = 15;
  const addValue = () => { if (counter<20)setCounter(counter+1); console.log("value added ", Math.random(),counter); }
  const subtractValue = () => { if(counter>0)setCounter(counter-1); console.log("value subtracted ", Math.random());}
  return (
    <>
      <h1>counter is : {counter}</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={subtractValue}>subtract value {counter} </button>
      <h3>{ counter}</h3>
    </>
  )
}

export default App
