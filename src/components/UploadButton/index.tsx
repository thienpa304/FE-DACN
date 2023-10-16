import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/common/firebase';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import LinearPercent from '../LinearPercent';

const VisuallyHiddenInput = styled('input')({
  display: 'none'
});

const ButtonWrapper = styled(Button)<any>(({ theme }) => ({
  backgroundColor: theme.colors.primary.lighter,
  '&:hover': {
    backgroundColor: theme.colors.primary.lighter
  }
}));
const ChipWrapper = styled(Chip)(({ theme }) => ({
  borderRadius: 6
}));

type Props = {
  label?: string;
  value?: string;
  onChange?: (url: string) => void;
};

function UploadButton(props: Props) {
  const { label, onChange } = props;
  // State to store uploaded file
  const [file, setFile] = useState<File>();

  const [fileUrl, setFileUrl] = useState<string | undefined>();

  // progress
  const [percent, setPercent] = useState(null);

  // Handle file upload event and update state
  function handleChange(event) {
    const file = event.target.files[0];
    setFile(file);
    handleUpload(file);
  }
  const handleDeleteFile = () => {
    setFile(null);
  };
  const handleUpload = (value) => {
    if (!value) {
      alert('Please upload an image first!');
    }

    const storageRef = ref(storage, `/files/${value.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, value);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setPercent(null);
          setFileUrl(url);
          onChange(url);
        });
      }
    );
  };

  return (
    <div>
      <ButtonWrapper
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        {label || 'Upload file'}
        <VisuallyHiddenInput
          type="file"
          onChange={handleChange}
          accept="image/jpeg,image/png,application/pdf,image/x-eps"
        />
      </ButtonWrapper>
      <Box marginTop={2}>
        {percent !== null && <LinearPercent value={percent} />}
        {fileUrl && file && (
          <ChipWrapper
            label={file.name}
            onDelete={handleDeleteFile}
            deleteIcon={<DeleteIcon />}
            variant="outlined"
          />
        )}
      </Box>
    </div>
  );
}

export default UploadButton;
