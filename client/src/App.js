import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Shop from './components/Shop/Shop'

function App() {
  return (
    
    <div className="App">
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
     
    </div>
   
  );
}

export default App;
