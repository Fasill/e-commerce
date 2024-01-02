import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import CoffeeTumbler from './pages/products/CoffeeTumbler.jsx';
import WhiteTent from './pages/products/WhiteTent.jsx';

import Layout from './pages/layout/layout.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/products/CoffeeTumbler" element={<CoffeeTumbler />} />
            <Route path="/products/WhiteTent" element={<WhiteTent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
