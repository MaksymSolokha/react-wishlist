import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router'
import { ROUTES } from './constants/routes.ts'
import App from './App.tsx'
import Login from './pages/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ReactRoutes>
                <Route path={ROUTES.HOME} element={<App />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
            </ReactRoutes>
        </BrowserRouter>
    </StrictMode>
)
