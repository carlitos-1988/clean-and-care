import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import MyServices from './components/MyServices';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header />
      <Router>
      <Routes>
      <Route exact path="/" element={<Body /> }/>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<MyServices />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/work" element={<MyServices />} />
      </Routes>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
