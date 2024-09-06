import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from '@pages/home'
import Destination from '@pages/destination'
import Crew from '@pages/crew'
import Technology from '@pages/technology'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='home' element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
      <Route path='technology' element={<Technology />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
