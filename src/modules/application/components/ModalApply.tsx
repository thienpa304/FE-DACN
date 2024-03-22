import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
  onClose: () => void;
};

export default function ModalApply(props: Props) {
  const { onSaveData } = useMutateApplyJob();
  const { open, onClose, position, company, postId } = props;
  const { profile: user } = useProfileHook();
  const { onlineProfile, isLoading: isLoadingOnlineProfile } =
    useQueryOnlineProfile();
  const { attachedDocument, isLoading: isLoadingDocumentProfile } =
    useQueryAttachedDocument();
  const [isChecked, setIsChecked] = useState('');
  const [missInfo, setMissInfo] = useState(false);

  const buttonStyle = {
    width: '100%',
    px: 1,
    color: '#000'
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  });

  const handleClose = () => {
    onClose();
  };
  const handleApply = (data) => {
    if (!isChecked) {
      setMissInfo(true);
      return;
    }

    let submitProfile = '';
    if (isChecked === ApplicationType.online_profile) {
      submitProfile = JSON.stringify(onlineProfile);
    } else if (isChecked === ApplicationType.attached_document) {
      submitProfile = JSON.stringify(attachedDocument);
    } else submitProfile = JSON.stringify(onlineProfile);

    onSaveData({
      ...data,
      postId,
      applicationType: isChecked,
      CV: submitProfile
    });
  };

  const uploadProfile = (id) => {
    setIsChecked(id);
    debugger;
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
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
                {onlineProfile
                  ? 'Hồ sơ trực tuyến'
                  : 'Chưa có hồ sơ trực tuyến'}
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                fullWidth
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
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Hủy
          </Button>
          <Button onClick={handleSubmit(handleApply)} variant="outlined">
            Nộp hồ sơ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
