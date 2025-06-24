import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EcoSolar</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">Inicio</Link>
            <Link to="/servicios" className="text-gray-600 hover:text-green-600">Servicios</Link>
            <Link to="/productos" className="text-gray-600 hover:text-green-600">Productos</Link>
            <Link to="/contacto" className="text-gray-600 hover:text-green-600">Contacto</Link>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Iniciar Sesión
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-green-600">Inicio</Link>
              <Link to="/servicios" className="block px-3 py-2 text-gray-600 hover:text-green-600">Servicios</Link>
              <Link to="/productos" className="block px-3 py-2 text-gray-600 hover:text-green-600">Productos</Link>
              <Link to="/contacto" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contacto</Link>
              <Link to="/login" className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}