import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new ReactDOM API
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);