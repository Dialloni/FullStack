import React, { useEffect, useState } from "react";



export default function Displaying() {

    //const initialPosts = [ postMessage, setPostMessage ] = useState([]);
    const [posts, setPosts] = useState([]); // empty array

    useEffect (() => {
        const initialPosts = [ { id: 1, title: "Hello World" }, { id: 2, title: "Introduction to React" }, { id: 3, title: "Using useEffect and useState" } ];
    setTimeout( ()=>{
        setPosts(initialPosts)
    }, 5000)

}, []);


const deletePost = (id) =>{
    const filterPost = posts.filter(item=>item.id !== id);
    console.log(filterPost);
    setPosts(filterPost)
    
};

  return (
    <div>
        <h2>Displaying</h2>
        <ul>
            {posts.map(postDelete => (
            <li key={postDelete.id}> 
                {postDelete.title}
            <button onClick = {() => deletePost(postDelete.id)}> Delete </button>
            </li>
            
            ))}
        </ul>
    </div>
  )
}
