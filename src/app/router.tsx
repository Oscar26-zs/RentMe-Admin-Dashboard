import { lazy, Suspense } from 'react'
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider
} from '@tanstack/react-router'
import AppLayout from './AppLayout'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()
const NotFoundPage = lazy(() => import('../app/NotFoundPage'))
const HomePage = lazy(() => import('../app/HomePage'))
const RegisterPage = lazy(() => import('../slices/users/pages/RegisterPage'))

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Cargando...</div>}>
      <Outlet />
    </Suspense>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFoundPage
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: AppLayout
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage
})

const routeTree = rootRoute.addChildren([
  layoutRoute,
  registerRoute,
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