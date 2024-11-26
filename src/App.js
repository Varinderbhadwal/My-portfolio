import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Mynavbar from './Mynavbar';
import Home from './Home';  // The new Home component
import FooterNav from './FooterNav'; // Footer is site-wide
import AboutPage from './AboutPage';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="container-fluid">
      <Mynavbar />  {/* Site-wide Navbar */}
      
      {/* Routing setup */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<AboutPage />} /> {/* Home page */}
        <Route path="/projects" element={<Projects />} /> {/* Home page */}
        <Route path="/hireme" element={<Contact />} /> {/* Home page */}
        {/* Add more routes here if necessary */}
      </Routes>
      
      <FooterNav />  {/* Site-wide Footer */}
    </div>
  );
}

export default App;
