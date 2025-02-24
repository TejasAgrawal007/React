import { useState } from 'react'

import './App.css'

function App() {

  const [text, setText] = useState("Drop Your text")


  function handleSubmit(e)
  {
    e.preventDefault();
    alert("Form Submitted!");
  }
 
  return (
      <>
        <h1>Events in ReactJS</h1>

        {/* <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> */}


        <form onSubmit={handleSubmit}>
            <button  type="submit" >Submit</button>
        </form>


      </>
  )
}

export default App
