import React from 'react'
import { useParams } from 'react-router-dom';



export default function Detail(props) {


        const { id } = useParams();

        let result = props.items.find((item_menu) => 
            item_menu.id === Number(id));
  if (!result || result === undefined) {
    return <h1>Item not found</h1>;
  }
  return (
    <div>
      <h1>Food: {result.name}</h1>
        <h2>Description: {result.description || ""}</h2>
        <h2>Price: {result.price || ""}</h2>
    </div>
  )
}
