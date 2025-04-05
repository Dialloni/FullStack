import React from 'react'

export default function ListRenderer() {

let fruits = ['Apple', 'Banana', 'Orange', 'Mango']

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) =>(
       <li key={index}>{fruit}</li>     
        ))}
      </ul>
    </div>
  )
}
