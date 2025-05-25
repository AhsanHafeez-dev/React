import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);;
  console.log(setCounter)
  const addValue = () => { console.log("called ", Math.random()); setCounter(counter + 1); }
  const subtractValue = () => { console.log("called ", Math.random()); setCounter(counter - 1); }

  return (
    <>
      <h1>react</h1>
      <h2>counter value : { counter}</h2>
      <button
        onClick={addValue}> Add value { counter}</button>
      <br />
      <button onClick={subtractValue}>subtract value { counter}</button>
          </>
  )
}

export default App
