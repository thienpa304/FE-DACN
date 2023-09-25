import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from './modules/app/layouts/BaseLayout';
import SidebarLayout from './modules/app/layouts/SidebarLayout';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// User

const Login = Loader(lazy(() => import('src/modules/auth/components/Login')));
const Register = Loader(
  lazy(() => import('src/modules/auth/components/Register'))
);
// Pages

const Overview = Loader(lazy(() => import('src/modules/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/modules/crypto')));

// Applications

const Messenger = Loader(lazy(() => import('src/modules/messenger')));
const Transactions = Loader(lazy(() => import('src/modules/transactions')));
const UserProfile = Loader(lazy(() => import('src/modules/users/profile')));
const UserSettings = Loader(lazy(() => import('src/modules/users/settings')));

// Components

const Buttons = Loader(lazy(() => import('src/modules/components/Buttons')));
const Modals = Loader(lazy(() => import('src/modules/components/Modals')));
const Accordions = Loader(
  lazy(() => import('src/modules/components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/modules/components/Tabs')));
const Badges = Loader(lazy(() => import('src/modules/components/Badges')));
const Tooltips = Loader(lazy(() => import('src/modules/components/Tooltips')));
const Avatars = Loader(lazy(() => import('src/modules/components/Avatars')));
const Cards = Loader(lazy(() => import('src/modules/components/Cards')));
const Forms = Loader(lazy(() => import('src/modules/components/Forms')));

// Status

const Status404 = Loader(lazy(() => import('src/modules/status/Status404')));
const Status500 = Loader(lazy(() => import('src/modules/status/Status500')));
const StatusComingSoon = Loader(
  lazy(() => import('src/modules/status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/modules/status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <SidebarLayout showSidebar={false} />,
        children: [
          {
            path: '',
            element: <Overview />
          },
          {
            path: 'messenger',
            element: <Messenger />
          }
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
