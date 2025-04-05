import React from 'react'

export default function Home(props) {

  return (
    <div>
      {props.items.map((item) => (
        <div key={item.id}>
          <h2>Name: {item.name}</h2>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  )
}
