import './App.css';
import HelloWorld from './components/HelloWorld';
import PersnoalInfo from './components/PersonalInfo';
import ParentComponent from './ParentComponent';
import ElementRenderer from './components/ElementRenderer';

function App() {
    return (
        <div className="App">
            <HelloWorld />
            <PersnoalInfo />
            <ParentComponent />
            <ElementRenderer />
        </div>
    );
}

export default App;