import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl '>testing tailwind</h1>
      <h2 className='bg-amber-50 text-2xl p-4 rounded-2xl'></h2>
      <Card username={"ahsan"} btnText='hello moto'/>
      <Card username={"saqib"} btnText='hello 2'/>
     
    </>
  )
}

export default App
