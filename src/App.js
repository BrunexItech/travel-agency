import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import Hotels from './pages/Hotels';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/travel-agency">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

