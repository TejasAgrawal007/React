import React from 'react'

import './App.css'
const App = () => {

  function handleClick(){
    alert('Hello')
  }

  function handleMouseOver(){
    alert("Hey")
  }

  function handleInput(e){
    console.log("The Value = " , e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    // I am Writing my constem behivour
    alert("FOrm Submit kar du ky")
  }

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} />
      <button type='submit'>Submit</button>
    </form>


      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleMouseOver}>I am a Prar</p>
    </>
  )
}

export default App
