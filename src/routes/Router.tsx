import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Layout} from '../components';
import {Chat} from './Chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Chat />,
      },
    ],
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
