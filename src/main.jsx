import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import CategorisationPage from './pages/CategorisationPage'
import DisplayCategoriesPage from './pages/DisplayCategoriesPage'
import StartPage from './pages/StartPage'
import TopValuesPage from './pages/TopValuesPage'
import './index.css'

import { CategoriesProvider } from './contexts/CategoryContext'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:'/',
        element: <StartPage/>
      },
      {
        path:'/app',
        element: <CategorisationPage/>
      },
      {
        path:'/resultats',
        element: <DisplayCategoriesPage/>
      },
      {
        path:'/tri-valeurs',
        element: <TopValuesPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <CategoriesProvider>
  <RouterProvider router={router} />
  </CategoriesProvider>
)