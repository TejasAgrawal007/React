import React, { useState } from 'react'
import Card from './Components/Card';

function App() {

  // Create State
  // Manage State
  // Change State
  // Sabe child me sabe ko sync karawaduga...


  const [name, setName] = useState('');


  return (
    <>
      <div className='p-10'>
        <Card name={name} setName={setName} />

        <p>I am Inside Parent = {name}</p>
      </div>
    </>
  )
}

export default App
