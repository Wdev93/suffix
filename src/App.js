import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Case from './pages/Case';
import ScheduleDemo from './pages/ScheduleDemo';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case" element={<Case />} />
          <Route path="/scheduledemo" element={<ScheduleDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
