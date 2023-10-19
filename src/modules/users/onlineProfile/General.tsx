import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    Container,
    styled,
    Divider,
    Avatar
} from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import useMutateUserData from '../hooks/useMutateUserHook';
import FormControl from 'src/components/FormControl';
import SelectInput from 'src/components/SelectInput';
import DatePicker from 'src/components/DatePicker';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { User } from '../model';
import { useApp } from 'src/modules/app/hooks';
import { DEGREE, GENDER, ISMARRIED } from 'src/constants/option';
import { UploadAvatar, GetAvatar, RemoveAvatar } from 'src/common/upload-image';

const Input = styled('input')({
    display: 'none'
});

export default function General() {
    const { user } = useApp();
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [avatar, setAvatar] = useState(null);
    const [storageAvatar, setStorageAvatar] = useState(null);
    const [uploadFile, setUploadFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const { onSaveData } = useMutateUserData('Profile');

    const handleEdit = () => setIsReadOnly(false);

    const handleImageGet = async () => {
        const urlAvatar = await GetAvatar(user);
        setStorageAvatar(urlAvatar);
        setAvatar(urlAvatar);
    };

    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            setAvatar(imageUrl);
            setUploadFile(image);
        }
    };

    const handleImageDelete = () => setAvatar(null);

    const DEGREE_OPTION = DEGREE.map((item) => ({
        value: item.label,
        label: item.label
    }));

    const defaultUserValues = {
        ...user,
        dob: dayjs(user.dob, 'DD-MM-YYYY').isValid()
            ? dayjs(user.dob, 'DD-MM-YYYY').toISOString()
            : null,
        sex: GENDER.find((item) => item.label === user.sex)?.value
    };

    const {
        control,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<User>({
        defaultValues: defaultUserValues
    });

    useEffect(() => {
        reset(defaultUserValues);
        handleImageGet();
    }, [user]);

    const handleSaveProfile = async (data) => {
        setLoading(true);
        if (uploadFile) await UploadAvatar(uploadFile, user);
        let avatarUrl = null;
        if (!avatar) await RemoveAvatar(user);
        else avatarUrl = await GetAvatar(user);
        const formattedDob = dayjs(data.dob, 'DD-MM-YYYY').format('DD-MM-YYYY');
        const newData = { ...data, dob: formattedDob, avatar: avatarUrl };
        onSaveData(newData);
        setLoading(false);
        setIsReadOnly(true);
    };

    const handleCancel = () => {
        reset(defaultUserValues);
        setAvatar(storageAvatar);
        setIsReadOnly(true);
    };

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex">
                    <Typography fontWeight={700} fontSize={22} lineHeight={3}>
                        Thông tin chung
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
            <Grid sx={{ mt: 1 }} py={2} >
                <Grid container mb={4} spacing={3}>
                    <Grid item xs={12}>
                        <FormControl
                            element={<TextField />}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="jobTitle"
                            label="Vị trí mong muốn"
                            name="jobTitle"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            element={<TextField />}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="profession"
                            label="Nghề nghiệp"
                            name="profession"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="curentPosition"
                            label="Cấp bậc hiện tại"
                            name="curentPosition"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={DEGREE_OPTION}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="desiredPosition"
                            label="Cấp bậc mong muốn"
                            name="desiredPosition"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={DEGREE_OPTION}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="desiredSalary"
                            label="Mức lương mong muốn"
                            name="desiredSalary"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={DEGREE_OPTION}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="degree"
                            label="Trình độ học vấn"
                            name="degree"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={GENDER}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="experience"
                            label="Số năm kinh nghiệm"
                            name="experience"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={DEGREE_OPTION}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="workAddress"
                            label="Địa chỉ làm việc"
                            name="workAddress"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                            element={<SelectInput />}
                            options={DEGREE_OPTION}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="employmentType"
                            label="Hình thức làm việc"
                            name="employmentType"
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
                            id="careerGoal"
                            label="Mục tiêu nghề nghiệp"
                            name="careerGoal"
                            required
                            disabled={isReadOnly}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl
                            element={<TextField />}
                            control={control}
                            errors={errors}
                            fullWidth
                            id="skill"
                            label="Kĩ năng"
                            name="skill"
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
                                    onClick={handleSubmit(handleSaveProfile)}
                                    variant="contained"
                                    sx={{ width: 120 }}
                                >
                                    Xác nhận
                                </Button>
                                <Button
                                    onClick={handleCancel}
                                    variant="outlined"
                                    sx={{ width: 120 }}
                                >
                                    Hủy
                                </Button>
                            </>
                        )}
                    </Box>
                )}
            </Grid>
        </Container>
    );
}
