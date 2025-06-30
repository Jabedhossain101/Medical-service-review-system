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
import MyReview from '../components/MyReview';
import MyService from '../components/MyService';
import Update from '../components/Update';

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
        path: '/update/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/service/${params.id}`),
        Component: Update,
      },
      {
        path: '/login',
        Component: Login,
      },

      {
        path: '/all',
        loader: () => fetch('http://localhost:3000/service'),
        Component: All,
      },
      {
        path: '/myReview',
        element: (
          <PrivateRouter>
            <MyReview></MyReview>
          </PrivateRouter>
        ),
      },
      {
        path: 'myService',
        loader: () => fetch('http://localhost:3000/service'),
        element: (
          <PrivateRouter>
            <MyService></MyService>
          </PrivateRouter>
        ),
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
