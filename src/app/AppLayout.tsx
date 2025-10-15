// AdminLayout.tsx
import { Outlet } from "@tanstack/react-router"
import Sidebar from "../shared/components/Sidebar"

export default function AdminLayout() {
  return (
    <div className="min-h-svh flex bg-gray-50/30">
      <Sidebar />
      <div className="flex-1">
        <main className="p-4 w-full min-h-svh">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
