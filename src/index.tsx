import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './normalize.css'
import './index.css'
import { Home } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = document.getElementById('root')!
const root = createRoot(container)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/:page',
        element: <Home />,
    },
])

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
