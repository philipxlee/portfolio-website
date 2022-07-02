import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/portfolio-website" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/experience" element={<Experience />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
