import React from 'react';
import './App.css';
import Counter from './components/counter'; // Adjust the path if necessary
import Time from './components/Timer'; // Adjust the path if necessary
import Displaying from './components/Displaying'; // Adjust the path if necessary
import EventHandler from './components/EventHandler';
import ListRenderer from './components/ListRenderer'; // Adjust the path if necessary

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Time />
      <Displaying /> *
      <EventHandler/>*/}
      <ListRenderer />
    </div>
  );
}

export default App;