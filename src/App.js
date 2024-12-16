import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './page/Home';
import Visual from './page/Visual';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visual" element={<Visual />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
