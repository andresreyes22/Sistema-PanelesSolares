import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;