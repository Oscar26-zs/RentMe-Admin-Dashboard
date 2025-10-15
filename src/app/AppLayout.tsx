import { Outlet, Link } from "@tanstack/react-router";

export default function AdminLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="border-r p-4">
        <div className="font-semibold mb-4">RentMe Admin</div>
        <nav className="grid gap-2 text-sm">
          <Link to="/" className="[&.active]:font-semibold">Inicio</Link>
        </nav>
      </aside>

      {/* Contenido */}
      <div className="flex flex-col">
        <header className="h-14 border-b px-4 flex items-center justify-end">
          {/* aquí: buscador, theme toggle, avatar */}
        </header>
        <main className="p-4 grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}