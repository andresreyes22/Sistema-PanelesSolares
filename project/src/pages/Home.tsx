import { ImageCarousel } from '../components/ImageCarousel';
import { ArrowRight, Sun, Battery, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      <ImageCarousel />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir energía solar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energía Limpia</h3>
              <p className="text-gray-600">Reduce tu huella de carbono y contribuye a un futuro más sostenible.</p>
            </div>
            <div className="text-center p-6">
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ahorro Energético</h3>
              <p className="text-gray-600">Reduce significativamente tus facturas de electricidad.</p>
            </div>
            <div className="text-center p-6">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustentabilidad</h3>
              <p className="text-gray-600">Inversión a largo plazo en tecnología renovable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios Destacados</h2>
            <p className="text-gray-600">Soluciones completas para todas tus necesidades de energía solar</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/servicios"
                    className="text-green-600 hover:text-green-700 inline-flex items-center"
                  >
                    Saber más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Instalación Residencial",
    description: "Sistemas solares personalizados para tu hogar",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Instalación Comercial",
    description: "Soluciones energéticas para empresas",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mantenimiento",
    description: "Servicio técnico y mantenimiento preventivo",
    image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80"
  }
];