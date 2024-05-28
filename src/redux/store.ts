import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'src/modules/app';
import { jobReducer } from 'src/modules/jobs';
import { docReduce } from 'src/modules/jobProfile/attachedDocument/documentSlice';
import { onlineProfileReduce } from 'src/modules/jobProfile/onlineProfile/profileSlice';
import { workExperienceReduce } from 'src/modules/jobProfile/onlineProfile/workExperienceSlice';
import { followJobReducer } from 'src/modules/jobs/followJobSlice';
import { jobListReducer } from 'src/modules/jobs/jobListSlice';
import { companyListReducer } from 'src/modules/company/companyListSlice';
import { followCompanyReducer } from 'src/modules/company/followCompanySlice';
import { employeeReducer } from 'src/modules/getEmployee/employeeSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    job: jobReducer,
    document: docReduce,
    onlineProfile: onlineProfileReduce,
    workExperiences: workExperienceReduce,
    followJobList: followJobReducer,
    jobList: jobListReducer,
    companyList: companyListReducer,
    followCompanyList: followCompanyReducer,
    employee: employeeReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
