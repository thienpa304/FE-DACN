import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Divider,
  Avatar,
  IconButton
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import BusinessIcon from '@mui/icons-material/Business';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import { defaultImage } from 'src/constants/uploadFileRule';
import EditExperience from './EditWork';
import useMutateDeleteExperience from './hooks/useMutateDeleteExperience';

export default function ExperienceView(props) {
  const { onDeleteDataById } = useMutateDeleteExperience();
  const { onlineProfile } = useQueryOnlineProfile();
  const [listOfWork, setListOfWork] = useState([]);
  const [selectedWorkId, setSelectedWorkId] = useState(null);
  const [isEditWorkVisible, setIsEditWorkVisible] = useState(false);

  const handleEditWork = (workId) => {
    if (workId) setSelectedWorkId(workId);
    setIsEditWorkVisible(true);
  };

  const handleAddWork = () => {
    setSelectedWorkId(null);
    setIsEditWorkVisible(true);
  };

  useEffect(() => {
    setListOfWork(onlineProfile?.work_experiences);
  }, [onlineProfile]);

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
              <Box width={500}>
                <Typography fontSize={12}>{work.jobDescription}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <IconButton onClick={() => handleEditWork(work.id)}>
              <ModeEditOutlineIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteDataById(work.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      {isEditWorkVisible && (
        <EditExperience
          workId={selectedWorkId}
          onClose={() => setIsEditWorkVisible(false)}
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
        </>
      )}
    </>
  );
}
