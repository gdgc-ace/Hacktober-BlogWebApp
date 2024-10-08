import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import LoginPage from './pages/LoginPage.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <BlogPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ],

  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
