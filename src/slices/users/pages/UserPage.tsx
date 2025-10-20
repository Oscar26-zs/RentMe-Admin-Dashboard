import { CreateUserSheet } from '../components/CreateUserSheet';

export default function UserPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Usuarios
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestiona los usuarios del sistema
          </p>
        </div>

        <CreateUserSheet />
      </div>

      {/* Aquí irá la tabla de usuarios */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          Lista de usuarios próximamente...
        </p>
      </div>
    </div>
  );
}