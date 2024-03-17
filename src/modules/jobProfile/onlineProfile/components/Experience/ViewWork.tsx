import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Divider,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
  AlertTitle
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import BusinessIcon from '@mui/icons-material/Business';
import { defaultImage } from 'src/constants/uploadFileRule';
import EditExperience from './EditWork';
import useMutateDeleteExperience from './hooks/useMutateDeleteExperience';
import useOnlineProfile from '../../hooks/useOnlineProfile';
import useWorkExperience from '../../hooks/useWorkExperience';

export default function ExperienceView(props) {
  const { onDeleteDataById } = useMutateDeleteExperience();
  const { profile } = useOnlineProfile();
  const { work_experiences, setWorkExperience } = useWorkExperience();
  const [listOfWork, setListOfWork] = useState([]);
  const [selectedWorkId, setSelectedWorkId] = useState(null);
  const [isEditWorkVisible, setIsEditWorkVisible] = useState(false);
  const [isNoProfile, setIsNoProfile] = useState(false);

  const handleEditWork = (workId) => {
    if (workId) setSelectedWorkId(workId);
    setIsEditWorkVisible(true);
  };

  const handleAddWork = () => {
    debugger;
    if (!profile?.work_experiences) {
      setIsNoProfile(true);
      return;
    }
    setSelectedWorkId(null);
    setIsEditWorkVisible(true);
  };

  const handleDeleteWork = (workId) => {
    onDeleteDataById(workId);
    // if (profile?.work_experiences?.length > 1)
    // onDeleteDataById(workId);
    // else {
    //   const newList = work_experiences.filter((work) => work.id !== workId);
    //   setWorkExperience(newList);
    // }
  };

  useEffect(() => {
    profile?.work_experiences ? setListOfWork(profile?.work_experiences) : [];
    //   : setListOfWork(work_experiences);
  }, [profile, work_experiences]);

  return (
    <>
      {listOfWork?.map((work) => (
        <Box key={work.id} display="flex" columnGap={2} my={2}>
          <Box>
            <Avatar
              src={defaultImage.companyAvatar}
              variant="rounded"
              sx={{
                bgcolor: '#a0b9cfc2',
                height: 80,
                width: 80
              }}
            >
              <BusinessIcon />
            </Avatar>
          </Box>
          <Box display="flex" flexDirection="column" rowGap="3px" flex={1}>
            <Typography fontWeight={700}>{work.jobTitle}</Typography>
            <Typography fontSize={12}>{work.companyName}</Typography>
            <Typography fontSize={12}>
              {work.startDate} -{' '}
              {work.endDate && work.endDate !== '1899-11-30'
                ? work.endDate
                : 'Hiện tại'}
            </Typography>
            <Box display="flex">
              <Typography fontSize={12}>Mô tả công việc:&nbsp;</Typography>
              <Box>
                <Typography fontSize={12}>{work.jobDescription}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <IconButton onClick={() => handleEditWork(work.id)}>
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteWork(work.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      {isEditWorkVisible && (
        <EditExperience
          workId={selectedWorkId}
          onClose={() => setIsEditWorkVisible(false)}
          onlineProfile={profile}
        />
      )}
      {(!isEditWorkVisible || listOfWork?.length === 0) && (
        <>
          <Typography fontSize={12} color={'grey.600'}>
            <em>
              Mô tả kinh nghiệm làm việc của bạn càng chi tiết càng tốt, điều đó
              giúp bạn có cơ hội được tuyển dụng cao hơn{' '}
            </em>
          </Typography>
          <Divider />
          <Button
            variant="text"
            color="secondary"
            onClick={handleAddWork}
            startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
            sx={{ my: 1 }}
          >
            <Typography>Thêm kinh nghiệm làm việc</Typography>
          </Button>
          <Snackbar
            open={isNoProfile}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={5000}
            onClose={() => setIsNoProfile(false)}
          >
            <Alert severity="error">
              <AlertTitle>
                <strong>
                  {isNoProfile &&
                    'Vui lòng hoàn thành trước phần Thông tin chung!'}
                </strong>
              </AlertTitle>
            </Alert>
          </Snackbar>
        </>
      )}
    </>
  );
}
