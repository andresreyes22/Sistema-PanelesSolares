import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lock } from 'lucide-react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí iría la lógica de autenticación
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Lock className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  {...register("name", { required: !isLogin })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
            )}

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
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              {errors.password && <span className="text-red-500 text-sm">Contraseña inválida</span>}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}