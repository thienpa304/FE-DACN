import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ResponseData } from 'src/common/http-request';
import { Job } from '../model';
import { JobService } from '../jobService';
import {
  ApprovalStatus,
  Degree,
  EmploymentType,
  Experience,
  PositionLevel
} from 'src/constants/enum';

const generateRandomJob = (): Partial<Job & { id: number }> => {
  return {
    postId: Math.floor(Math.random() * 1000) + 1,
    id: Math.floor(Math.random() * 1000) + 1,
    name: 'Company XYZ',
    email: 'contact@companyxyz.com',
    phone: '123-456-7890',
    contactAddress: '123 Main St, City',
    workAddress: '456 Business Ave, Town',
    jobTitle: 'Software Developer',
    profession: 'Information Technology',
    employmentType: EmploymentType.ConsultingContract,
    degree: Degree.associate,
    experience: Experience.Five,
    positionLevel: PositionLevel.Contributor,
    minAge: 25,
    maxAge: 40,
    sex: 'Any',
    status: ApprovalStatus.approved,
    numberOfVacancies: 3,
    trialPeriod: 90,
    applicationDeadline: '2023-12-31',
    minSalary: 50000,
    maxSalary: 70000,
    skills: 'JavaScript, React, Node.js',
    jobDescription: 'Exciting opportunity for a software developer...',
    jobRequirements: "Bachelor's degree in Computer Science...",
    benefits: 'Health insurance, flexible working hours...'
  };
};

// Generate 10 rows of data
const jobData: Partial<Job>[] = Array.from({ length: 10 }, () =>
  generateRandomJob()
);

const useQueryJob = () => {
  const { data, isLoading } = useQuery<
    ResponseData<Job[]>,
    AxiosError<ResponseData<Job[]>>
  >('job-getList', JobService.get);

  return {
    // jobs: data?.data?.map((item) => ({ ...item, id: item.postId })) || [],
    jobs: jobData,
    isLoading
  };
};

export default useQueryJob;
