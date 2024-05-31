import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
import { removeHTMLTag } from 'src/utils/formatData';
import useMutateSendEmail from 'src/modules/admin/hooks/useMutateSendEmail';
import useQueryAllUserByAdmin from 'src/modules/admin/hooks/useQueryAllUserByAdmin';
import { Role } from 'src/modules/users/model';
import useQueryAllEmailByAdmin, {
  useQuerySuggestEmailByAdmin
} from 'src/modules/admin/hooks/useQueryAllEmailByAdmin';

const EmailNotification = () => {
  const [recipient, setRecipient] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  // const { emailList, inputRecipientKeywords } = useMutateGetEmail();
  const { onSendEmail, isLoading } = useMutateSendEmail();
  const { allEmailList } = useQueryAllEmailByAdmin(
    {
      role: selectedUser === 'ALL' ? null : selectedUser
    },
    Boolean(selectedUser)
  );
  const selectedUserEmailList = useMemo(
    () =>
      allEmailList?.map((item) => ({
        value: item.email,
        label: item.email
      })),
    [JSON.stringify(allEmailList)]
  );
  const { suggestEmailList } = useQuerySuggestEmailByAdmin(
    {
      page: 1,
      num: 6,
      role: '',
      keyword: recipient
    },
    Boolean(recipient)
  );

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm<EmailSendType>();

  const onSubmit = (data) => {
    if (!removeHTMLTag(data?.html)) {
      setIsEmpty(true);
      return;
    }
    const formatData = {
      ...data,
      emails: data.emails.map((item) => item?.value || item)
    };
    onSendEmail(formatData);
  };

  const handleGetUserByRole = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const currentValues = getValues();
    reset({
      ...currentValues,
      emails: selectedUserEmailList
    });
  }, [JSON.stringify(selectedUserEmailList)]);

  // useEffect(() => {
  //   recipient && inputRecipientKeywords({ keyword: recipient });
  // }, [recipient]);

  const recipientOption = useMemo(
    () =>
      suggestEmailList?.map((item) => {
        console.log(suggestEmailList);

        return {
          value: item.email,
          label: item.email
        };
      }),
    [suggestEmailList]
  );
  return (
    <Container maxWidth="md" style={{ marginTop: 20, paddingBottom: 30 }}>
      <Card>
        <CardHeader title="Thông báo qua Email" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display={'flex'} flexWrap={'wrap'} gap={1} mb={1}>
                <Typography alignSelf={'center'} fontWeight={700}>
                  Chọn nhanh:
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 100,
                    maxHeight: 40,
                    bgcolor: selectedUser === 'ALL' ? '#f29c00' : '#fff6e5'
                  }}
                  size="small"
                  onClick={() => handleGetUserByRole('ALL')}
                >
                  Tất cả
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 150,
                    maxHeight: 40,
                    bgcolor:
                      selectedUser === Role.EMPLOYER ? '#f29c00' : '#fff6e5'
                  }}
                  size="small"
                  onClick={() => handleGetUserByRole(Role.EMPLOYER)}
                >
                  Nhà tuyển dụng
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 150,
                    maxHeight: 40,
                    bgcolor:
                      selectedUser === Role.EMPLOYEE ? '#f29c00' : '#fff6e5'
                  }}
                  size="small"
                  onClick={() => handleGetUserByRole(Role.EMPLOYEE)}
                >
                  Người tìm việc
                </Button>
              </Box>
              <FormControl
                element={
                  <Autocomplete
                    onChangeInput={(e) => {
                      setRecipient(e.target.value);
                    }}
                    freeSolo={true}
                    limitTags={4}
                  />
                }
                control={control}
                errors={errors}
                options={recipientOption}
                fullWidth
                label="Người nhận"
                variant="outlined"
                id="emails"
                name="emails"
                pattern="email"
                defaultValue={selectedUserEmailList}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                element={<TextField />}
                control={control}
                errors={errors}
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
