import { useState } from "react";
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
import ClearIcon from "@mui/icons-material/Clear";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import IconButton from '@mui/material/IconButton';
import { useApp } from 'src/modules/app/hooks';
import { UploadService } from 'src/common/upload-image';
// import useMutateProfile from '../hooks/useMutateProfileHook';
import useMutateUserData from '../../hooks/useMutateUserHook';

const Input = styled("input")({
    display: 'none'
});

export default function Cover() {
    const { user } = useApp();
    const { onSaveData } = useMutateUserData("Profile");

    const [image, setImage] = useState(user.avatar);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            UploadService(file);
            onSaveData(file)
        }
    };

    const handleImageDelete = () => {
        setImage(null);
    };


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
                            <label htmlFor="upload-avatar">
                                <IconButton component="label" sx={{ borderRadius: 10 }}>
                                    <Avatar
                                        alt={user.name}
                                        src={image}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            bgcolor: "#a0b9cfc2",
                                        }}
                                    />
                                    <Input
                                        id="upload-avatar"
                                        name="upload-avatar"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </IconButton>
                            </label>
                            <label htmlFor="upload-avatar">
                                <Button
                                    component="label"
                                    size="small"
                                    startIcon={<AddPhotoAlternateOutlinedIcon />}
                                    sx={{ color: 'grey.600' }}
                                >
                                    <Input
                                        id="upload-avatar"
                                        name="upload-avatar"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                    <Typography
                                        fontWeight={700}
                                        fontSize={15}
                                        textTransform="none"
                                    >
                                        Upload
                                    </Typography>
                                </Button>
                            </label>
                            {image && (
                                <Button
                                    component="label"
                                    onClick={handleImageDelete}
                                    size="small"
                                    startIcon={<ClearIcon />}
                                    sx={{ color: 'grey.600' }}
                                >
                                    <Typography
                                        fontWeight={700}
                                        fontSize={15}
                                        textTransform="none"
                                    >
                                        Delete
                                    </Typography>
                                </Button>
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
