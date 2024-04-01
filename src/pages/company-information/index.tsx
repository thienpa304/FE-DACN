import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomContainer from 'src/components/CustomContainer';
import { defaultImage } from 'src/constants/uploadFileRule';
import JobList from 'src/modules/jobs/components/JobList';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import CompanyInfoTab from 'src/modules/jobs/components/CompanyInfoTab';
import useQueryCompanyInfoByUser from 'src/modules/users/hooks/useQueryCompanyInfoById';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  coverImage: {
    width: '100%',
    height: '280px',
    objectFit: 'cover'
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const renderBanner = (banner: string) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={12}>
      <img
        src={banner || defaultImage.companyCover}
        alt="cover"
        className={classes.coverImage}
      />
    </Paper>
  );
};

const renderLogo = (avatar: string) => (
  <Avatar
    src={avatar || defaultImage.companyAvatar}
    sx={{
      width: 120,
      height: 120,
      bgcolor: '#a0b9cfc2',
      border: 2,
      borderColor: 'grey.300',
      mt: -5
    }}
  />
);

export default function index() {
  const { id } = useParams();
  const { company, isLoading } = useQueryCompanyInfoByUser({ employerId: id });
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      {renderBanner(company?.banner)}
      <CustomContainer
        sx={{ flex: 1, display: 'flex', alignItems: 'center', px: 5 }}
      >
        {renderLogo(company?.logo)}
        <Typography variant="h3" ml={2}>
          {company?.companyName}
        </Typography>
      </CustomContainer>
      <CompanyInfoTab company={company} />
      <JobList
        pageTitle={`Việc làm đang tuyển`}
        profession={''}
        queryJobs={useQueryAllJob}
        numOfJobPerPage={5}
        employerId={id}
        sx={{ p: 0 }}
      />
    </Container>
  );
}
