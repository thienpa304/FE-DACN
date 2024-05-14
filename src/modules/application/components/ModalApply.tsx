import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import UploadButton from 'src/components/UploadButton';
import AddIcon from '@mui/icons-material/Add';
import useMutateApplyJob from '../hooks/useMutateApplyJob';
import { ApplicationType } from 'src/constants/enum';
import useQueryOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useQueryAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useQueryAttachedDocument';
import { useApp } from 'src/modules/app/hooks';
import useProfileHook from 'src/modules/users/hooks/useUserHook';
import { v4 } from 'uuid';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';
import useDocumentHook from 'src/modules/jobProfile/attachedDocument/hooks/useDocumentHook';
import { review } from 'src/utils/reviewProfile';
import AnayzeProfileButton from './AnayzeProfileButton';
import { Job } from 'src/modules/jobs/model';
import { removeFileByUrl } from 'src/common/firebaseService';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Title = styled('div')(() => ({
  fontWeight: 600,
  fontSize: 18,
  margin: '5px 0'
}));
const SubTitle = styled('div')(({ theme }) => ({
  fontWeight: 400,
  fontSize: 12,
  color: theme.colors.alpha.black[70]
}));

type Props = {
  postId: number;
  open: boolean;
  position: string;
  company?: string;
  job?: Partial<Job>;
  onClose: () => void;
};

export default function ModalApply(props: Props) {
  const { onSaveData } = useMutateApplyJob();
  const { open, onClose, position, company, postId, job } = props;
  const { profile: user } = useProfileHook();
  const { onlineProfile, isLoading: isLoadingOnline } = useQueryOnlineProfile();
  const { attachedDocument, isLoading: isLoadingDocument } =
    useQueryAttachedDocument();
  const { profile: online, setProfile: setOnline } = useOnlineProfile();
  const { profile: document, setProfile: setDocument } = useDocumentHook();
  const [isChecked, setIsChecked] = useState('');
  const [missInfo, setMissInfo] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [url, setUrl] = useState('');
  const [hintsMessage, setHintsMessage] = useState('');
  const buttonStyle = {
    width: '100%',
    px: 1,
    color: '#000'
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  });

  const handleClose = () => {
    if (url) removeFileByUrl(url);
    setIsChecked(null);
    setHintsMessage(null);
    setShowResult(null);
    onClose();
  };
  const handleApply = (data) => {
    if (!isChecked) {
      setMissInfo(true);
      return;
    }

    let submitProfile = '';

    if (isChecked === ApplicationType.cv_enclosed) submitProfile = data.CV;
    else {
      if (url) removeFileByUrl(url);
      submitProfile = '#' + v4();
    }

    onSaveData({
      ...data,
      postId,
      applicationType: isChecked,
      CV: submitProfile
    });
    setShowResult(null);
    onClose();
  };

  const uploadProfile = (id) => {
    setIsChecked(id);
    setHintsMessage('');
  };

  useEffect(() => {
    reset(user);
    setShowResult(false);
    if (isChecked === ApplicationType.online_profile) {
      setSelectedProfile(online);
    }
    if (isChecked === ApplicationType.attached_document) {
      setSelectedProfile(document);
    }
    if (isChecked === ApplicationType.cv_enclosed) {
      setSelectedProfile(job);
    }
  }, [isChecked]);

  if (isLoadingOnline || isLoadingOnline) return <SuspenseLoader />;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <SubTitle> Vị trí ứng tuyển</SubTitle>
          <Title>{position}</Title>
          {company && <SubTitle>{company}</SubTitle>}
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                disabled={onlineProfile ? false : true}
                fullWidth
                onClick={() => uploadProfile(ApplicationType.online_profile)}
                sx={[
                  buttonStyle,
                  {
                    bgcolor:
                      isChecked === ApplicationType.online_profile
                        ? '#f29c00'
                        : '#fff6e5'
                  }
                ]}
              >
                {onlineProfile ? (
                  'Hồ sơ trực tuyến'
                ) : (
                  <em>Chưa có hồ sơ trực tuyến</em>
                )}
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                fullWidth
                disabled={attachedDocument ? false : true}
                onClick={() => uploadProfile(ApplicationType.attached_document)}
                sx={[
                  buttonStyle,
                  {
                    bgcolor:
                      isChecked === ApplicationType.attached_document
                        ? '#f29c00'
                        : '#fff6e5'
                  }
                ]}
              >
                {attachedDocument ? (
                  'Hồ sơ đính kèm'
                ) : (
                  <em>Chưa có hồ sơ đính kèm</em>
                )}
              </Button>
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormControl
                control={control}
                errors={errors}
                id="CV"
                name="CV"
                label="Tải lên hồ sơ có sẵn"
              >
                <UploadButton
                  sx={[
                    buttonStyle,
                    {
                      bgcolor:
                        isChecked === ApplicationType.cv_enclosed
                          ? '#f29c00'
                          : '#fff6e5'
                    }
                  ]}
                  setIsChecked={setIsChecked}
                  setUrl={setUrl}
                />
              </FormControl>
            </Grid>
          </Grid>
          {missInfo && (
            <Typography
              color="error"
              mb={3}
              fontWeight={700}
              fontStyle="italic"
            >
              * Vui lòng chọn loại hồ sơ cần gửi !
            </Typography>
          )}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="name"
                label="Họ và tên"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="email"
                label="Email"
                name="email"
                pattern="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
                required
                id="phone"
                label="Số điện thoại"
                name="phone"
                pattern="phone"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: { sm: 'space-between', xs: 'center' },
            flexWrap: 'wrap',
            px: 2
          }}
        >
          <AnayzeProfileButton
            job={job}
            selectedProfile={selectedProfile}
            profileType={isChecked}
            setShowResult={setShowResult}
            showResult={showResult}
            fileUrl={url}
            setHintsMessage={setHintsMessage}
          />
          <Box sx={{ display: 'flex', columnGap: 1 }}>
            <Button onClick={handleClose} variant="outlined" color="secondary">
              Hủy
            </Button>
            <Button
              onClick={handleSubmit(handleApply)}
              variant="contained"
              color="info"
            >
              Nộp hồ sơ
            </Button>
          </Box>
        </DialogActions>
        {hintsMessage && (
          <Box mb={1} p={2} gap={1} display="flex" flexDirection="column">
            <Divider sx={{ mb: 1, color: '#f29c00' }} />
            <Typography fontWeight={700} fontSize={18}>
              Gợi ý:
            </Typography>
            <Typography fontStyle="italic" mx={2}>
              {hintsMessage}
            </Typography>
          </Box>
        )}
      </Dialog>
    </div>
  );
}
