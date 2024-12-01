import React, { useState } from 'react'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'

const App = () => {

  const [isLoggedIn, setLogin] = useState(true)

  // 1. If-else


  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }

  // 2. Ternery Rendering

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )


  // 3. Logical Operator

  // return (
  //   <div>
  //     <h1 className='text-3xl font-bold text-center'>Welcome EveryOne</h1>

  //     {isLoggedIn && <LogoutBtn/>}

  //   </div>
  // )


  //  4. Early Return 

  if (!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }
  
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Welcome EveryOne</h1>

      {isLoggedIn && <LogoutBtn/>}

    </div>
  )


}

export default App

