import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.js';
import Layout from './pages/layout/layout.js';
function App() {
  return (
    // Main application component
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
          {/* Define routes with their respective components */}
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
