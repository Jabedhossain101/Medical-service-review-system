import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AllService from '../components/AllService';
import AddService from '../components/AddService';
import ErrorPage from '../Error/ErrorPage';
import Details from '../components/Details';
import PrivateRouter from './PrivateRouter';
import All from '../components/All';

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
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/service/${params.id}`),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/all',
        Component: All,
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
