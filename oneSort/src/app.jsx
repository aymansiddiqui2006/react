import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout';
import Home from './component/pages/home';
import Favorities from './component/pages/Favorities'
import NotFound from './component/pages/NotFound';
import { MovieProvider } from './component/context/MovieContext';

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: 'home',
            element: <Home />
        },
        {
            path: 'favorites',
            element: <Favorities />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}])

function App() {
    return (
        <MovieProvider>
            <RouterProvider router={router} />
        </MovieProvider>


    )
}

export default App