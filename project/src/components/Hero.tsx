import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Energía Solar para un Futuro Sostenible
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Transforme su hogar o negocio con energía limpia y renovable. Nuestras soluciones solares
          le ayudan a reducir costos y proteger el medio ambiente.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/contacto"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/productos"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
}