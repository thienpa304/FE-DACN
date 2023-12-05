import React, { useState, useCallback } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

const EmailNotification = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState('normal');
  const [isAttachmentIncluded, setIsAttachmentIncluded] = useState(false);
  const [eventTypes, setEventTypes] = useState({
    jobApplication: true,
    applicationStatus: false,
    newJobPosting: true
  });
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSendEmail = () => {
    // Add logic to send the email with the provided details and uploaded file
    console.log('Sending email:', {
      recipient,
      subject,
      message,
      priority,
      isAttachmentIncluded,
      eventTypes,
      uploadedFile
    });
    // You can use an email sending library or make an API call to your server for email sending
    // Example API call: fetch('/api/send-email', { method: 'POST', body: formData });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 20, paddingBottom: 30 }}>
      <Card>
        <CardHeader title="Thông báo qua Email" />
        <Divider />
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Người nhận"
                  variant="outlined"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Chủ đề"
                  variant="outlined"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nội dung"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="priority">Ưu tiên</InputLabel>
                  <Select
                    label="Ưu tiên"
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <MenuItem value="low">Thấp</MenuItem>
                    <MenuItem value="normal">Bình thường</MenuItem>
                    <MenuItem value="high">Cao</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAttachmentIncluded}
                      onChange={() =>
                        setIsAttachmentIncluded(!isAttachmentIncluded)
                      }
                    />
                  }
                  label="Bao gồm tệp đính kèm"
                />
              </Grid>
              <Grid item xs={12}>
                <div
                  {...getRootProps()}
                  style={{
                    border: `2px dashed ${
                      isDragActive ? '#00bcd4' : '#bdbdbd'
                    }`,
                    borderRadius: '4px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <input {...getInputProps()} />
                  <Typography variant="h6">Chọn tệp đính kèm:</Typography>
                  {uploadedFile ? (
                    <Typography>{uploadedFile.name}</Typography>
                  ) : (
                    <Typography>
                      Kéo và thả hoặc nhấn để chọn tệp tin
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Chọn loại sự kiện:</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={eventTypes.jobApplication}
                      onChange={() =>
                        setEventTypes((prev) => ({
                          ...prev,
                          jobApplication: !prev.jobApplication
                        }))
                      }
                    />
                  }
                  label="Xác nhận đơn xin việc"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={eventTypes.applicationStatus}
                      onChange={() =>
                        setEventTypes((prev) => ({
                          ...prev,
                          applicationStatus: !prev.applicationStatus
                        }))
                      }
                    />
                  }
                  label="Thông báo về tình trạng ứng tuyển"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={eventTypes.newJobPosting}
                      onChange={() =>
                        setEventTypes((prev) => ({
                          ...prev,
                          newJobPosting: !prev.newJobPosting
                        }))
                      }
                    />
                  }
                  label="Cập nhật việc làm mới"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendEmail}
                >
                  Gửi Email
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmailNotification;
