import React from 'react';
// import './App.css';
// import Counter from './components/Counter'; // Adjust the path if necessary
// import Timer from './components/Timer'; // Adjust the path if necessary
// import Displaying from './components/Displaying'; // Adjust the path if necessary
// import EventHandler from './components/EventHandler';
// import ListRenderer from './components/ListRenderer'; // Adjust the path if necessary
// import Form from './components/login';
// import Dashboard from './dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail'; // Adjust the path if necessary

function App() {
const items = [{id: 1, name: "Pasta", description: "Italian Pasta", price: "$5"},
  {id: 2, name: "Burger", description: "American Burger", price: "$7"},
  {id: 3, name: "Tea", description: "Indian Tea", price: "$2"}
]

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Form />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard/:username" element={<Dashboard />} /> */}
          <Route path="/" element={<Home items = {items}  />} />
          <Route path="/item/:id" element={<Detail items = {items}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;