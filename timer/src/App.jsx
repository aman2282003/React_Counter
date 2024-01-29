import { useState } from 'react'
import Timer from "./Components/Timer"

import './App.css'

function App() {
  const [showComponent,setshowComponent] = useState(true)

  return (
    <>
      <button className ="btn1" onClick={() => {setshowComponent(!showComponent)}}>{ showComponent ? "Hide Timer" : "Show timer"} </button>
      <div className="main">
      {showComponent ? <Timer/> : "Click on Button to see the Timer"}
    </div>
    </>
  )
}

export default App
