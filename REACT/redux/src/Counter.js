import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    // Access the counter value from the Redux store
    const counter = useSelector((state) => state.counter);

    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
};

export default Counter;