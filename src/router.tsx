import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from './modules/app/layouts/BaseLayout';
import SidebarLayout from './modules/app/layouts/SidebarLayout';
import AuthRouteProvider from './modules/auth/components/AuthRouteProvider';
import { Role } from './modules/users/model';

import UserManagementTable from './pages/admin/UserManagement';
import SecurityAndAccessManagement from './pages/admin/SecurityAndAccessManagement';
import EmailNotification from './pages/admin/EmailNotification';
import CandidateProfileAnalysis from './pages/admin/CandidateProfileAnalysis ';
import ProfileManagement from './pages/admin/ProfileManagement';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Recruitment
const JobCreate = Loader(lazy(() => import('src/pages/job-create')));
const StatisticsAndReports = Loader(
  lazy(() => import('src/pages/admin/StatisticsAndReports'))
);
const JobList = Loader(lazy(() => import('src/pages/job-list')));
const RecruitmentListApproval = Loader(
  lazy(() => import('src/pages/job-approval'))
);
const RecruitmentEdit = Loader(lazy(() => import('src/pages/job-edit')));

// Candidate
const CandidateProfiles = Loader(
  lazy(() => import('src/pages/review-candidate-profiles'))
);
const ViewCandidateProfile = Loader(
  lazy(() => import('src/pages/view-candidate-profile'))
);

// User
const Login = Loader(lazy(() => import('src/modules/auth/components/Login')));
const Register = Loader(
  lazy(() => import('src/modules/auth/components/Register'))
);
const ForgotPassword = Loader(
  lazy(() => import('src/modules/auth/components/ForgotPassword'))
);

// Pages
const Home = Loader(lazy(() => import('src/pages/home')));
const JobDetail = Loader(lazy(() => import('src/pages/job-detail')));
const JobOpenings = Loader(lazy(() => import('src/pages/job-openings')));
const ResultJobList = Loader(lazy(() => import('src/pages/result-job-list')));
const CompanyInformation = Loader(
  lazy(() => import('src/pages/company-information'))
);
const ShowCompanyPage = Loader(lazy(() => import('src/pages/company-list')));

// Applications
const UserProfile = Loader(lazy(() => import('src/modules/users/profile')));
const EmployeeProfile = Loader(
  lazy(() => import('src/pages/employee-profile'))
);
const OnlineProfile = Loader(
  lazy(() => import('src/modules/jobProfile/onlineProfile'))
);
const AttachedDocument = Loader(
  lazy(() => import('src/modules/jobProfile/attachedDocument'))
);
const JobApplied = Loader(lazy(() => import('src/pages/job-applied')));

const JobFollow = Loader(lazy(() => import('src/pages/job-follow')));

const CompanyFollow = Loader(lazy(() => import('src/pages/company-follow')));

const JobRecommend = Loader(lazy(() => import('src/pages/recommend-job')));

// Employer
const EmployeeFollow = Loader(lazy(() => import('src/pages/employee-follow')));

const FindProfiles = Loader(lazy(() => import('src/pages/find-profiles')));

const RecommendProfile = Loader(
  lazy(() => import('src/pages/recommend-profiles'))
);
const TestGPT = Loader(lazy(() => import('src/pages/testGPT')));

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
        element: <SidebarLayout showSideBar={false} />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/hiring-job',
            element: <JobOpenings />
          },
          {
            path: '/job/:id',
            element: <JobDetail />
          },
          {
            path: '/profession',
            element: <ResultJobList />
          },
          {
            path: '/company/:id',
            element: <CompanyInformation />
          },
          {
            path: '/company',
            element: <ShowCompanyPage />
          },
          {
            path: '/testGPT',
            element: <TestGPT />
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
          },
          {
            path: 'job-applied',
            element: <JobApplied />
          },
          {
            path: 'job-recommend',
            element: <JobRecommend />
          },
          {
            path: 'job-follow',
            element: <JobFollow />
          },
          {
            path: 'company-follow',
            element: <CompanyFollow />
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
        path: 'forgot-password',
        element: <ForgotPassword />
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
            element: <JobCreate />
          },
          {
            path: 'list',
            element: <JobList />
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
          },
          {
            path: 'profile/:id',
            element: <ViewCandidateProfile />
          }
        ]
      },
      {
        path: 'find-profiles',
        element: <FindProfiles />
      },
      {
        path: 'find-profiles/:id',
        element: <FindProfiles />
      },
      {
        path: 'recommend-profiles',
        element: <RecommendProfile />
      },
      {
        path: 'follow-profile',
        element: <EmployeeFollow />
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
          }
        ]
      },
      {
        path: 'jobs-posting',
        element: <RecruitmentListApproval />
      },
      {
        path: 'user-manage',
        element: <UserManagementTable />
      },
      {
        path: 'statistic-report',
        element: <StatisticsAndReports />
      },
      {
        path: 'manage-access',
        element: <SecurityAndAccessManagement />
      },
      {
        path: 'mailer',
        element: <EmailNotification />
      },
      {
        path: 'analyze-profile',
        element: <CandidateProfileAnalysis />
      },
      {
        path: 'manage-profile',
        element: <ProfileManagement />
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
