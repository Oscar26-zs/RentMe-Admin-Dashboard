import { lazy, Suspense } from 'react'
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider
} from '@tanstack/react-router'
import AppLayout from './AppLayout'

const NotFoundPage = lazy(() => import('../app/NotFoundPage'))
const HomePage = lazy(() => import('../app/HomePage'))

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<div>Cargando...</div>}>
      <AppLayout />
    </Suspense>
  ),
  notFoundComponent: NotFoundPage
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})

const routeTree = rootRoute.addChildren([
homeRoute,
])

// Configuración del router
export const router = createRouter({ routeTree })

// Tipado opcional
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Proveedor del router
export function AppRouterProvider() {
  return <RouterProvider router={router} />
}