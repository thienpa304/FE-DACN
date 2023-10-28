import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    Divider,
    Checkbox,
    InputLabel,
    Alert,
    AlertTitle
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FormControl from 'src/components/FormControl';
import TextField from 'src/components/TextField';
import { useForm } from 'react-hook-form';
import { WorkExperience } from '../../../model';
import useQueryOnlineProfile from '../hooks/useQueryOnlineProfile';
import useMutateExperience from './hooks/useMutateExperience';
import useMutateUpdateExperience from './hooks/useMutateUpdateExperience';
import DatePicker from 'src/components/DatePicker';
import dayjs from 'dayjs';

export default function EditExperience(props) {
    const { onlineProfile, isLoading } = useQueryOnlineProfile();
    const { onSaveData } = useMutateExperience();
    const { onSaveDataById } = useMutateUpdateExperience();
    const { onClose, workId } = props;
    const [error, setError] = useState({ state: false, message: '' })

    const defaultUserValues = {
        jobTitle: '',
        companyName: '',
        startDate: null,
        endDate: null,
        isDoing: false,
        jobDescription: '',
    };

    const {
        control,
        watch,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<WorkExperience>({
        defaultValues: defaultUserValues,
    });

    const isDoing = watch('isDoing', false);
    const startDate = watch('startDate');
    const endDate = watch('endDate');

    const validateDates = () => {
        if (startDate && endDate) {
            if (dayjs(startDate).isAfter(endDate)) {
                setError({ state: true, message: 'Ngày kết thúc phải sau ngày bắt đầu' });
            } else {
                setError({ state: false, message: '' });
            }
        }
        if (isDoing) setError({ state: false, message: '' });
    };

    useEffect(() => {
        validateDates();
    }, [startDate, endDate, isDoing]);

    const processInputData = (data) => {
        const startDate = dayjs(data.startDate, 'YYYY-MM-DD').isValid()
            ? dayjs(data.startDate, 'YYYY-MM-DD').toISOString()
            : null;
        let endDate = null;
        if (!data.isDoing && dayjs(data.endDate, 'YYYY-MM-DD').isValid())
            endDate = dayjs(data.endDate, 'YYYY-MM-DD').toISOString();
        return { ...data, startDate, endDate };
    }

    const processOutputData = (data) => {
        console.log("data.startDate", data.startDate)
        const startDate = dayjs(data.startDate).isValid()
            ? dayjs(data.startDate).format('DD-MM-YYYY')
            : null;
        let endDate = null;
        if (!data.isDoing && dayjs(data.endDate).isValid())
            endDate = dayjs(data.endDate).format('DD-MM-YYYY');
        return { ...data, startDate, endDate };
    }

    const handleSaveExperienceData = async (data) => {
        if (error.state) return;
        const formattedOutputData = processOutputData(data)
        if (data.id) onSaveDataById([data.id, formattedOutputData]);
        else onSaveData(formattedOutputData);
        onClose();
    };

    useEffect(() => {
        const foundExperience = onlineProfile?.work_experiences.find((experience) => experience.id === workId);
        if (!foundExperience) return;
        const formattedInputData = processInputData(foundExperience)
        reset(formattedInputData);
    }, [workId, onlineProfile]);

    if (isLoading) return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    )

    return (
        <>
            <Divider />
            <Box py={3}>
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
                        />
                    </Grid>
                    <Grid item container xs={12} columnSpacing={3}>
                        <Grid item xs={12} display="flex" height={30}>
                            <FormControl
                                element={<Checkbox checked={isDoing} />}
                                control={control}
                                errors={errors}
                                fullWidth
                                id="isDoing"
                                label="Tôi đang làm ở đây"
                                name="isDoing"
                                sx={{ width: 10, height: 10, mr: 1 }}
                            />
                            <InputLabel htmlFor="isDoing">Tôi đang làm ở đây</InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl
                                element={<DatePicker />}
                                control={control}
                                errors={errors}
                                fullWidth
                                id="startDate"
                                label="Thời gian bắt đầu"
                                name="startDate"
                                maxDate={dayjs()}
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
                                    maxDate={dayjs()}
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
                    {error.state &&
                        <Grid item xs={12}>
                            <Alert severity="error">
                                <AlertTitle>{error.message}</AlertTitle>
                            </Alert>
                        </Grid>
                    }
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
                        />
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
                    <Button
                        color="success"
                        onClick={handleSubmit(handleSaveExperienceData)}
                        variant="contained"
                        sx={{ width: 120 }}
                    >
                        Xác nhận
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        sx={{ width: 120 }}
                    >
                        Hủy
                    </Button>
                </Box>
            </Box>
        </>
    )
}
