import { CreateUserForm } from '../components/CreateUserForm';

 const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            RentMe
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sistema de Gestión de Alquileres
          </p>
        </div>
        
        <CreateUserForm />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ¿Ya tienes una cuenta?{' '}
            <a 
              href="/login" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;