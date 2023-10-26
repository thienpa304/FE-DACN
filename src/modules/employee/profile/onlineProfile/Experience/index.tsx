// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Grid,
//   Typography,
//   Container,
//   Divider,
//   Checkbox,
//   InputLabel
// } from '@mui/material';
// import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
// import CircularProgress from '@mui/material/CircularProgress';
// import LinearProgress from '@mui/material/LinearProgress';
// import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// import FormControl from 'src/components/FormControl';
// import TextField from 'src/components/TextField';
// import { useForm } from 'react-hook-form';
// import { WorkExperience } from '../../../model';
// import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
// import useMutateExperience from './hooks/useMutateWorkExperience';
// import DatePicker from 'src/components/DatePicker';
// import dayjs from 'dayjs';

// export default function Experience() {
//   const [loading, setLoading] = useState(false);
//   const [isReadOnly, setIsReadOnly] = useState(true);
//   const { onlineProfile, isLoading } = useQueryOnlineProfile();
//   const { onSaveExperienceData } = useMutateExperience();

//   const handleEdit = () => setIsReadOnly(false);

//   const defaultUserValues = {
//     ...onlineProfile
//   };

//   const {
//     control,
//     watch,
//     reset,
//     handleSubmit,
//     formState: { errors }
//   } = useForm<WorkExperience>();

//   const isDoing = watch('isDoing', false);

//   useEffect(() => {
//     reset(defaultUserValues);
//   }, [onlineProfile]);

//   const handleSaveExperienceData = async (data) => {
//     setLoading(true);
//     const startDate = dayjs(data.startDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
//     const endDate = dayjs(data.endDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
//     const newData = { ...data, startDate, endDate };
//     onSaveExperienceData(newData);
//     setLoading(false);
//     setIsReadOnly(true);
//   };

//   const handleCancel = () => {
//     reset(defaultUserValues);
//     setIsReadOnly(true);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <Box sx={{ width: '100%' }}>
//           <LinearProgress />
//         </Box>
//       ) : (
//         <Container id="work_experience">
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box display="flex">
//               <Typography fontWeight={700} fontSize={21} lineHeight={3}>
//                 Thông tin nghề nghiệp
//               </Typography>
//             </Box>
//             {isReadOnly && (
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={handleEdit}
//                 startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
//                 sx={{ borderRadius: 5 }}
//               >
//                 <Typography textTransform="none">Chỉnh sửa</Typography>
//               </Button>
//             )}
//           </Box>
//           <Divider />
//           <Box pt={3} pb={6}>
//             <Grid container mb={4} spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <FormControl
//                   element={<TextField />}
//                   control={control}
//                   errors={errors}
//                   fullWidth
//                   id="jobTitle"
//                   label="Chức danh"
//                   name="jobTitle"
//                   required
//                   disabled={isReadOnly}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl
//                   element={<TextField />}
//                   control={control}
//                   errors={errors}
//                   fullWidth
//                   id="companyName"
//                   label="Công ty"
//                   name="companyName"
//                   required
//                   disabled={isReadOnly}
//                 />
//               </Grid>

//               <Grid item container xs={12} columnSpacing={3}>
//                 <Grid item xs={12} display="flex" height={30}>
//                   <FormControl
//                     element={<Checkbox />}
//                     control={control}
//                     errors={errors}
//                     fullWidth
//                     id="isDoing"
//                     label="Tôi đang làm ở đây"
//                     name="isDoing"
//                     sx={{ width: 10, height: 10, mr: 1 }}
//                     disabled={isReadOnly}
//                   />
//                   <InputLabel htmlFor="isDoing">Tôi đang làm ở đây</InputLabel>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <FormControl
//                     element={<DatePicker />}
//                     control={control}
//                     errors={errors}
//                     fullWidth
//                     id="startDate"
//                     label="Thời gian bắt đầu"
//                     name="startDate"
//                     disabled={isReadOnly}
//                   />
//                 </Grid>
//                 {!isDoing && (
//                   <Grid item xs={12} sm={6}>
//                     <FormControl
//                       element={<DatePicker />}
//                       control={control}
//                       errors={errors}
//                       fullWidth
//                       id="endDate"
//                       label="Thời gian kết thúc"
//                       name="endDate"
//                       disabled={isReadOnly}
//                     />
//                   </Grid>
//                 )}
//                 {isDoing && (
//                   <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     display="flex"
//                     alignContent="center"
//                     alignItems="center"
//                   >
//                     <TrendingFlatIcon />
//                     <Typography fontSize={20}>Hiện tại</Typography>
//                   </Grid>
//                 )}
//               </Grid>

//               <Grid item xs={12}>
//                 <FormControl
//                   element={<TextField />}
//                   control={control}
//                   errors={errors}
//                   fullWidth
//                   id="jobDescription"
//                   label="Mô tả công việc"
//                   name="jobDescription"
//                   minRows={3}
//                   required
//                   multiline
//                   disabled={isReadOnly}
//                 />
//               </Grid>
//             </Grid>
//             {!isReadOnly && (
//               <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
//                 {loading ? (
//                   <CircularProgress size={20} />
//                 ) : (
//                   <>
//                     <Button
//                       color="success"
//                       onClick={handleSubmit(handleSaveExperienceData)}
//                       variant="contained"
//                       sx={{ width: 120 }}
//                     >
//                       Xác nhận
//                     </Button>
//                     <Button
//                       onClick={handleCancel}
//                       variant="outlined"
//                       sx={{ width: 120 }}
//                     >
//                       Hủy
//                     </Button>
//                   </>
//                 )}
//               </Box>
//             )}
//           </Box>
//         </Container>
//       )}
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
  Checkbox,
  InputLabel
} from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import { WorkExperience } from '../../../model';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import useMutateExperience from './hooks/useMutateWorkExperience';
import DatePicker from 'src/components/DatePicker';
import dayjs from 'dayjs';

// Constants
const TEXT_START_DATE = 'Thời gian bắt đầu';
const TEXT_IS_DOING = 'Tôi đang làm ở đây';
const TEXT_CONFIRM = 'Xác nhận';
const TEXT_CANCEL = 'Hủy';

export default function Experience() {
  const [loading, setLoading] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { onlineProfile, isLoading } = useQueryOnlineProfile();
  const { onSaveExperienceData } = useMutateExperience();

  const handleEdit = () => setIsReadOnly(false);

  const defaultUserValues = {
    ...onlineProfile
  };

  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkExperience>();

  const isDoing = watch('isDoing', false);

  useEffect(() => {
    reset(defaultUserValues);
  }, [onlineProfile]);

  const handleSaveExperienceData = async (data) => {
    setLoading(true);
    const startDate = dayjs(data.startDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
    const endDate = dayjs(data.endDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
    const newData = { ...data, startDate, endDate };
    onSaveExperienceData(newData);
    setLoading(false);
    setIsReadOnly(true);
  };

  const handleCancel = () => {
    reset(defaultUserValues);
    setIsReadOnly(true);
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Container id="work_experience">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex">
              <Typography fontWeight={700} fontSize={21} lineHeight={3}>
                Thông tin nghề nghiệp
              </Typography>
            </Box>
            {isReadOnly && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleEdit}
                startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
                sx={{ borderRadius: 5 }}
              >
                <Typography textTransform="none">Chỉnh sửa</Typography>
              </Button>
            )}
          </Box>
          <Divider />
          <Box pt={3} pb={6}>
            <Grid container mb={4} spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  fullWidth
                  id="jobTitle"
                  label="Chức danh"
                  name="jobTitle"
                  required
                  disabled={isReadOnly}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  fullWidth
                  id="companyName"
                  label="Công ty"
                  name="companyName"
                  required
                  disabled={isReadOnly}
                />
              </Grid>

              <Grid item container xs={12} columnSpacing={3}>
                <Grid item xs={12} display="flex" height={30}>
                  <FormControl
                    element={<Checkbox />}
                    control={control}
                    errors={errors}
                    fullWidth
                    id="isDoing"
                    label={TEXT_IS_DOING}
                    name="isDoing"
                    sx={{ width: 10, height: 10, mr: 1 }}
                    disabled={isReadOnly}
                  />
                  <InputLabel htmlFor="isDoing">{TEXT_IS_DOING}</InputLabel>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    element={<DatePicker />}
                    control={control}
                    errors={errors}
                    fullWidth
                    id="startDate"
                    label={TEXT_START_DATE}
                    name="startDate"
                    disabled={isReadOnly}
                  />
                </Grid>
                {!isDoing && (
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      element={<DatePicker />}
                      control={control}
                      errors={errors}
                      fullWidth
                      id="endDate"
                      label="Thời gian kết thúc"
                      name="endDate"
                      disabled={isReadOnly}
                    />
                  </Grid>
                )}
                {isDoing && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    display="flex"
                    alignContent="center"
                    alignItems="center"
                  >
                    <TrendingFlatIcon />
                    <Typography fontSize={20}>Hiện tại</Typography>
                  </Grid>
                )}
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  element={<TextField />}
                  control={control}
                  errors={errors}
                  fullWidth
                  id="jobDescription"
                  label="Mô tả công việc"
                  name="jobDescription"
                  minRows={3}
                  required
                  multiline
                  disabled={isReadOnly}
                />
              </Grid>
            </Grid>
            {!isReadOnly && (
              <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <>
                    <Button
                      color="success"
                      onClick={handleSubmit(handleSaveExperienceData)}
                      variant="contained"
                      sx={{ width: 120 }}
                    >
                      {TEXT_CONFIRM}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outlined"
                      sx={{ width: 120 }}
                    >
                      {TEXT_CANCEL}
                    </Button>
                  </>
                )}
              </Box>
            )}
          </Box>
        </Container>
      )}
    </>
  );
}
