
export default function ReservationsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Reservas
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestiona las reservas del sistema
          </p>
        </div>

        {/* <CreateReservationSheet /> */}
      </div>

      {/* Aquí irá la tabla de reservas */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          Lista de reservas próximamente...
        </p>
      </div>
    </div>
  );
}
