import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);



  // 1. program - 


  // const a = useRef(0);

  // useEffect(() => {
  //   a.current = a.current + 1
  //   console.log(`The Value of a = ${a.current}`)
  // })


    // 2. program - 

    const ref = useRef();

    // useEffect(() => {
    //   console.log("Page is Rendering...")
    //   ref.current.style.display = "royalblue";
    // }, [])


    //  3. program - 

    const btnRef = useRef();


    const hideMe = () => {
      btnRef.current.style.display = "none"
    }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">


        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


        <button ref={btnRef}  onClick={hideMe} >Hide Me</button>


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
