import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="pt-16">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl">Estamos aquí para responder tus preguntas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@ecosolar.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-gray-600">123 Calle Solar, Ciudad Verde</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.message && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 w-full"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}