import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Home(){
  return <h1>Home</h1>
}

function About(){
  return <h1>About</h1>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/ Home' element = {<Home/>} />
        <Route path='/about' element ={<About/>} />
      </Routes>
    </Router>    
  );
}

export default App;
