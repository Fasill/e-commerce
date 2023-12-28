import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Products from './pages/products/products.jsx';
import Layout from './pages/layout/layout.jsx';
function App() {
  return (
    // Main application component
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/products/CoffeeTumbler" element={<Products />} />

          </Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
