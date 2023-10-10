import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Avatar,
    Button,
    Container,
    Grid,
    styled,
} from "@mui/material";

import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import IconButton from '@mui/material/IconButton';
import { useApp } from 'src/modules/app/hooks';
import { UploadAvatar, GetAvatar, RemoveAvatar } from 'src/common/upload-image';
import useMutateUserData from '../../hooks/useMutateUserHook';
import { useForm } from 'react-hook-form';
import { User } from '../../model';
import FormControl from 'src/components/FormControl';

const Input = styled("input")({
    display: 'none'
});

const ButtonText = styled(Typography)({
    fontWeight: 700,
    fontSize: 15,
    textTransform: 'none'
});

export default function Cover() {
    const { user } = useApp();
    const [save, setSave] = useState(true)
    const [avatar, setAvatar] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        getAvatar()
    }, [])

    async function getAvatar() {
        let url = await GetAvatar(user);
        setAvatar(url)
    }

    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            setAvatar(imageUrl);
            setFile(image)
            setSave(false)
        }
    };


    async function handleSaveAvatar(data) {
        await UploadAvatar(file, user)
        const url = await GetAvatar(user)
        setAvatar(url)
        setSave(true)
        // const newData = { ...data, avatar: url }
        // onSaveData(newData)
    }

    async function handleImageDelete() {
        await RemoveAvatar(user)
        setAvatar(null);
    };

    const {
        control,
        handleSubmit,
    } = useForm<User>({
        defaultValues: {
            ...user
        }
    });


    return (
        <Container>
            <Box
                display="flex"
                sx={{ pb: 1, borderBottom: 1, borderColor: "grey.300" }}
            >
                <MilitaryTechIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography fontWeight={700} fontSize={22} lineHeight={2}>
                    Hồ sơ của tôi
                </Typography>
            </Box>
            <Box mt={2}>
                <Grid container columnSpacing={{ sm: 1 }}>
                    <Grid item xs={6} md={3} display="flex" flexWrap="wrap">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            rowGap={0.5}
                        >
                            <label htmlFor="avatar">
                                <IconButton component="label" sx={{ borderRadius: 10 }}>
                                    <Avatar
                                        alt={user.name}
                                        src={avatar}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            bgcolor: "#a0b9cfc2",
                                        }}
                                    />
                                    <FormControl
                                        element={<Input
                                            type="file"
                                            accept="image/*"
                                        />}
                                        control={control}
                                        name="avatar"
                                        id="avatar"
                                        onChange={handleImageUpload}
                                    />
                                </IconButton>
                            </label>

                            {!avatar && <label htmlFor="avatar">
                                <Button
                                    component="label"
                                    size="small"
                                    startIcon={<AddPhotoAlternateOutlinedIcon />}
                                    sx={{ color: 'grey.600' }}
                                >
                                    <FormControl
                                        element={<Input
                                            type="file"
                                            accept="image/*"
                                        />}
                                        control={control}
                                        name="avatar"
                                        id="avatar"
                                        onChange={handleImageUpload}
                                    />
                                    <ButtonText>
                                        Upload
                                    </ButtonText>
                                </Button>
                            </label>}

                            {avatar && (
                                <>
                                    {!save && (<Button
                                        component="label"
                                        onClick={handleSubmit(handleSaveAvatar)}
                                        size="small"
                                        startIcon={<TaskAltIcon />}
                                        sx={{ color: 'grey.600' }}
                                    >
                                        <ButtonText>
                                            Save
                                        </ButtonText>
                                    </Button>)}

                                    <Button
                                        component="label"
                                        onClick={handleImageDelete}
                                        size="small"
                                        startIcon={<DoNotDisturbOnOutlinedIcon />}
                                        sx={{ color: 'grey.600' }}
                                    >
                                        <ButtonText>
                                            Delete
                                        </ButtonText>
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={9}>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ lineHeight: 200 }}>
                            <Typography fontSize={18} fontWeight={700} lineHeight={3}>
                                {user.name}
                            </Typography>
                            <Typography>Phone: {user.phone}</Typography>
                            <Typography>Email: {user.email}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
