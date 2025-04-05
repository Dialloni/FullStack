import React, { useState, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Abubakar Diallo');

  useEffect(() => {
    console.log('value change', counter);
  }, [counter]);

  const addCount = () => {
    setCounter(counter + 1);
  };

  const subCount = () => {
    setCounter(counter - 1);
  };

  let resetCount = () => {
    setCounter(0);
  };

  let updateName = () => {
    let names = ['Abshir', 'Diallo', 'Lyn', 'Ayesha', 'Maverick', 'Amina'];
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Name: {name}</h1>
      <button onClick={addCount}>Increment</button>
      <button onClick={subCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default Counter;