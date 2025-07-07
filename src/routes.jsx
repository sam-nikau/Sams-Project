import { createBrowserRouter } from 'react-router-dom'
import App from './App'

import Contact from './layout/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Contact /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Contact /> },
    ],
  },
])

export default router
