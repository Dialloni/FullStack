import React from 'react'

function ChildComponent({firstname, lastname, age}) {
  return (
   <p>
        My name is {firstname} {lastname} and I am {age} years old.
      </p>
     
  )
}

export default ChildComponent
