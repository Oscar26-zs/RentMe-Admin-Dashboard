import { Link } from '@tanstack/react-router';
import { BedDouble, FileText, Home, LogOut, Send, Settings, Users, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  collapsed?: boolean;
}

const NavItem = ({ icon, text, to, collapsed = false }: NavItemProps) => {

  return (
    <Link
      to={to}
      activeOptions={{ exact: to === '/' }}
      className={
        "relative flex items-center gap-2 px-2 py-1.5 text-sm transition-all duration-200 rounded-md" +
        (collapsed ? " justify-center" : "") +
        " text-gray-800 hover:text-[#52655B] hover:bg-gradient-to-r hover:from-[#52655B]/20 hover:to-[#52655B]/5"
      }
      activeProps={() => ({
        className:
          "relative flex items-center gap-2 px-2 py-1.5 text-sm transition-all duration-200 rounded-md" +
          (collapsed ? " justify-center" : "") +
          " text-[#52655B] bg-gradient-to-r from-[#52655B]/25 to-[#52655B]/10"
      })}
    >
      <span className="p-1">{icon}</span>
      {!collapsed && <span className="font-medium">{text}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
   <aside
      className={[
        "shrink-0",
        "sticky top-0 h-svh",
        "bg-gradient-to-b from-[#52655B]/10 to-[#52655B]/5",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      ].join(" ")}
    >
      <div className="flex flex-col h-full px-3 py-4 w-full">
        <div className="flex items-center justify-between mb-6 px-2">
          {!collapsed && (
            <h2 className="text-xl font-bold text-[#52655B] whitespace-nowrap">
              Sistema RentMe
            </h2>
          )}
          {/* El toggle solo visible en sm+ porque en xs el sidebar está oculto */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:cursor-pointer hover:bg-[#52655B]/10 text-[#52655B]"
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="space-y-1">
          <NavItem icon={<Home size={16} />} text="Dashboard"    to="/"            collapsed={collapsed} />
          <NavItem icon={<Send size={16} />} text="Reservas"      to="/reservations"    collapsed={collapsed} />
          <NavItem icon={<BedDouble size={16} />} text="Alojamientos" to="/products" collapsed={collapsed} />
          <NavItem icon={<FileText size={16} />} text="Ventas"    to="/orders"      collapsed={collapsed} />
          <NavItem icon={<Users size={16} />} text="Usuarios"     to="/users"       collapsed={collapsed} />
        </nav>

        <div className="mt-auto">
          <div className="h-px bg-[#52655B]/10 my-4" />
          <nav className="space-y-1">
            <NavItem icon={<Settings size={16} />} text="Configuración" to="/settings" collapsed={collapsed} />
            <NavItem icon={<LogOut size={16} />} text="Cerrar Sesión"   to="/logout"   collapsed={collapsed} />
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;