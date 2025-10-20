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
import { Toaster } from '@/shared/components/ui'
import emailjs from '@emailjs/browser'

const queryClient = new QueryClient()
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
const NotFoundPage = lazy(() => import('../app/NotFoundPage'))
const HomePage = lazy(() => import('../app/HomePage'))
const UserPage = lazy(() => import('../slices/users/pages/UserPage'))

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Cargando...</div>}>
        <Outlet />
        <Toaster />
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
  getParentRoute: () => layoutRoute,
  path: '/',
  component: HomePage
})

const userRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/users',
  component: UserPage
})

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    userRoute
  ])
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