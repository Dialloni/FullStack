import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayName from './components/DisplayName';
import DisplayFood from './components/DisplayFood';
import DisplayVacation from './components/DisplayVacation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/display-name" element={<DisplayName />} />
                <Route path="/display-food" element={<DisplayFood />} />
                <Route path="/display-vacation" element={<DisplayVacation />} />
            </Routes>
        </Router>
    );
}

export default App;