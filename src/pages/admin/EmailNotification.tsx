import React, { useState, useCallback, useEffect } from 'react';
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
  InputLabel,
  Checkbox,
  FormControlLabel,
  Box
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { EmailResponseType, EmailSendType } from 'src/modules/admin/model';
import useMutateGetEmail from 'src/modules/admin/hooks/useMutateGetEmail';
import Autocomplete from 'src/components/Autocomplete';
import TagInput from 'src/components/TagInput';
import { useForm } from 'react-hook-form';
import FormControl from 'src/components/FormControl';
import TextEditor from 'src/components/TextEditor';
import { removeHTMLTag } from 'src/utils/inputOutputFormat';
import useMutateSendEmail from 'src/modules/admin/hooks/useMutateSendEmail';

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
  const [isEmpty, setIsEmpty] = useState(null);
  const { emailList, inputRecipientKeywords } = useMutateGetEmail();
  const { onSendEmail, isLoading } = useMutateSendEmail();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<EmailSendType>();

  const onSubmit = (data) => {
    console.log('..');

    if (!removeHTMLTag(data?.html)) setIsEmpty(true);
    const formatData = {
      ...data,
      emails: data.emails.map((item) => item?.value || item)
    };
    console.log(formatData);
    onSendEmail(formatData);
  };

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

  useEffect(() => {
    recipient && inputRecipientKeywords({ keyword: recipient });
  }, [recipient]);

  const recipientOption = emailList?.map((item) => {
    console.log(emailList);

    return {
      value: item.email,
      label: item.email
    };
  });
  return (
    <Container maxWidth="md" style={{ marginTop: 20, paddingBottom: 30 }}>
      <Card>
        <CardHeader title="Thông báo qua Email" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl
                element={
                  <Autocomplete
                    onChangeInput={(e) => {
                      setRecipient(e.target.value);
                    }}
                    freeSolo={true}
                  />
                }
                control={control}
                // error={errors}
                options={recipientOption}
                fullWidth
                label="Người nhận"
                variant="outlined"
                id="emails"
                name="emails"
                pattern="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                fullWidth
                label="Chủ đề"
                variant="outlined"
                id="subject"
                name="subject"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" mt={1}>
                <Typography variant="h6">Nội dung</Typography>
                {isEmpty && (
                  <Typography
                    color="error"
                    fontWeight={700}
                    fontStyle="italic"
                    textAlign="center"
                    flex={1}
                  >
                    * Vui lòng nhập nội dung cần gửi
                  </Typography>
                )}
              </Box>
              <FormControl
                element={<TextEditor />}
                control={control}
                errors={errors}
                id="html"
                name="html"
                required
              />
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
                  border: `2px dashed ${isDragActive ? '#00bcd4' : '#bdbdbd'}`,
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
                  <Typography>Kéo và thả hoặc nhấn để chọn tệp tin</Typography>
                )}
              </div>
            </Grid>
            {/* <Grid item xs={12}>
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
              </Grid> */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Gửi Email
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmailNotification;
