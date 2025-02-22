import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(false)


  // 1. Universely Occured!
  // useEffect(()=>{
  //   alert("useEffect Hook Occured!")
  // })


  
  // 2. For a single state
  useEffect(() => {
    alert("You Hit the Update Button");
  }, [count, login])

  return (
    <>
      <h1>useEffect Hooks</h1>

      <h3>The value of Count = {count}</h3>

      <button onClick={() => setCount(count + 1) }>Update</button>

    </>
  )
}

export default App
