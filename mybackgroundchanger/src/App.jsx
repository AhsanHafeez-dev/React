import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div class="main bg-black h-[100vh] w-full flex items-end p-9">
  <div class="list  bg-white flex h-9 items-center">
          <div id="red"
            class="bg-red-500 w-20 h-7 text-center rounded-2xl ml-3 mr-3"
            onClick={() => { document.querySelector(".main").style.backgroundColor = "red"; }}> red </div>

    <div id= "green" class="bg-green-500 w-20 h-7 text-center rounded-2xl  mr-3"> green </div>

    <div id="blue" class="bg-blue-500 w-20 text-center h-7 rounded-2xl  mr-3"> blue </div>

    <div id="yellow" class="bg-yellow-500 w-20 text-center h-7 rounded-2xl  mr-3"> yellow </div>

    <div id="pink" class="bg-pink-500 w-20 text-center h-7 rounded-2xl  mr-3"> pink </div>
  </div>
</div>
    </>
  )
}

export default App
