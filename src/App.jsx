import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Error from './components/Error/Error';


let router = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Navigate to={'/'} /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Error /> },
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
