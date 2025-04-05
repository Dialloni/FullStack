import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Example = () => <div>
    <h1>Hello World</h1>
     <Example2/>
     <Example2/>
     <Example3/>
     </div>
let  Example2 = () => <h2>Example two</h2>
let  Example3 = () => <h2>Example three</h2>

export default function DemoMe() {
  return (
   <Router>
    <div>This is Router</div>
    <Routes>
        <Route path= "/hello" element = {<Example/>}> </Route>
        {/* <Route path= "/hello/1" element = {<Example2/>}> </Route> */}
    </Routes>
   </Router>
  );
};
