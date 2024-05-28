import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Forum from './pages/Forum/Forum';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

