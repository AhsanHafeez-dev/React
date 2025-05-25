import { useState } from "react"

function App() {
  const [color, setColour] = useState('red');  

  return (
    <div className="w-full h-screen duration-200
"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">

      </div>

    </div>
  )
}

export default App
