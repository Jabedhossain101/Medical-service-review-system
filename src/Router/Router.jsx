import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AllService from '../components/AllService';
import AddService from '../components/AddService';
import ErrorPage from '../Error/ErrorPage';
import Details from '../components/Details';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/service/:id',
        Component: Details,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/service/${params.id}`),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/allService',
        Component: AllService,
      },
      {
        path: '/addService',
        Component: AddService,
      },
    ],
  },
]);

export default router;
