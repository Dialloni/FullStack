import React from 'react'

export default function EventHandler() {

    const HandleButton = ()=>{
        console.log("The button was click")

    }
  return (
    <div>
      <button onClick={HandleButton} >Click Me</button>
    </div>
  )
}
