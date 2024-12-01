import React from 'react'

function Card({name, setName}) {
  return (
    <>
       <div>
       <input type="text" placeholder='Lifting state up'  onChange={(e) => setName(e.target.value)}/>
        <p>The Name = {name}</p>
       </div>
    </>
  )
}

export default Card
