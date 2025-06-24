import { SERVICES } from '../constants/services';

export function Services() {
  return (
    <div className="pt-16">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl">Soluciones completas en energía solar para hogares y empresas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex gap-6">
              <div className="flex-shrink-0">
                <service.icon className="h-12 w-12 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}