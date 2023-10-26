import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from './modules/app/layouts/BaseLayout';
import SidebarLayout from './modules/app/layouts/SidebarLayout';
import AuthRouteProvider from './modules/auth/components/AuthRouteProvider';
import { Role } from './modules/users/model';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Recruitment

const RecruitmentCreate = Loader(
  lazy(() => import('src/pages/recruitment-create'))
);

const RecruitmentList = Loader(
  lazy(() => import('src/pages/recruitment-list'))
);
const RecruitmentListApproval = Loader(
  lazy(() => import('src/pages/recruitment-approval'))
);
const RecruitmentEdit = Loader(lazy(() => import('src/pages/job-edit')));
// Candidate

const CandidateProfiles = Loader(
  lazy(() => import('src/pages/candidate-profiles'))
);

// User

const Login = Loader(lazy(() => import('src/modules/auth/components/Login')));
const Register = Loader(
  lazy(() => import('src/modules/auth/components/Register'))
);

// Pages

const Home = Loader(lazy(() => import('src/pages/home')));
const JobDetail = Loader(lazy(() => import('src/pages/job-detail')));
const UrgentHiringJob = Loader(
  lazy(() => import('src/pages/urgent-hiring-job'))
);

// Applications

const Messenger = Loader(lazy(() => import('src/modules/messenger')));
const UserProfile = Loader(lazy(() => import('src/modules/users/profile')));
const UserSettings = Loader(lazy(() => import('src/modules/users/settings')));
const EmployeeProfile = Loader(
  lazy(() => import('src/modules/employee/profile'))
);
const OnlineProfile = Loader(
  lazy(() => import('src/modules/employee/profile/onlineProfile'))
);
const AttachedDocument = Loader(
  lazy(() => import('src/modules/employee/profile/attachedDocument'))
);

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
            element: <Home />
          },
          {
            path: '/urgent-hiring-job',
            element: <UrgentHiringJob />
          },
          {
            path: '/job/:id',
            element: <JobDetail />
          },
          {
            path: 'messenger',
            element: <Messenger />
          }
        ]
      },
      {
        // route for employee
        path: '/employee',
        element: (
          <AuthRouteProvider role={[Role.EMPLOYEE]}>
            <SidebarLayout />
          </AuthRouteProvider>
        ),
        children: [
          {
            path: 'profile',
            element: <UserProfile />
          },
          {
            path: 'recruitment-profile',
            element: <EmployeeProfile />
          },
          {
            path: 'online-profile',
            element: <OnlineProfile />
          },
          {
            path: 'attachment-profile',
            element: <AttachedDocument />
          }

          // {
          //   path: 'form',
          //   element: <Forms />
          // }
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
    // route for employer
    path: 'employer',
    element: (
      <AuthRouteProvider role={[Role.EMPLOYER]}>
        <SidebarLayout />
      </AuthRouteProvider>
    ),
    children: [
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
          }
        ]
      },
      {
        path: 'recruitment',
        children: [
          {
            path: '',
            element: <Navigate to="create" replace />
          },
          {
            path: 'create',
            element: <RecruitmentCreate />
          },
          {
            path: 'list',
            element: <RecruitmentList />
          },
          {
            path: 'list/:id',
            element: <RecruitmentEdit />
          }
        ]
      },
      {
        path: 'candidate',
        children: [
          {
            path: '',
            element: <Navigate to="profile" replace />
          },
          {
            path: 'profile',
            element: <CandidateProfiles />
          }
        ]
      }
    ]
  },
  {
    // route for admin
    path: 'admin',
    element: (
      <AuthRouteProvider role={[Role.ADMIN]}>
        <SidebarLayout />
      </AuthRouteProvider>
    ),
    children: [
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
      },
      {
        path: 'jobs-posting',
        element: <RecruitmentListApproval />
      }
    ]
  },
  {
    path: '/components',
    element: (
      <AuthRouteProvider role={[Role.ADMIN, Role.EMPLOYER]}>
        <SidebarLayout />
      </AuthRouteProvider>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      }
    ]
  }
];

export default routes;
