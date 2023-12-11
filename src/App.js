import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.js';

function App() {
  return (
    // Main application component
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes with their respective components */}
          <Route path="/" element={<Home />} />
         
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
