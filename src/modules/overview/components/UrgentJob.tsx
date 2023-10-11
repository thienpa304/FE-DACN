import React from 'react';
import {
    Box,
    Button,
    Grid,
    Container,
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Divider,
} from '@mui/material';

import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function UrgentJob(props) {
    const { jobs } = useQueryJob();
    return (
        <Container>
            <Box sx={{ p: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex">
                        <ScheduleIcon color='primary' sx={{ fontSize: 40 }} />
                        <Typography variant='h3'>Việc làm tuyển gấp</Typography>
                    </Box>
                    <Button
                        variant="text"
                        color="secondary"
                        sx={{ borderRadius: 5 }}
                    >
                        <Typography>Xem thêm</Typography>
                    </Button>
                </Box>
                <Box sx={{ pt: 3, mb: 4 }}>
                    <Grid container mb={4} spacing={2}>
                        {jobs && jobs.map((job, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title={job.jobTitle}
                                    />
                                    <CardContent sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Box>
                                            <Typography variant="body2">
                                                {job.workAddress}
                                            </Typography>
                                            <Typography variant="body2">
                                                {job.minSalary} - {job.maxSalary}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}


                        {/* <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        title="Nhân viên văn phòng"
                                    />
                                    <CardContent sx={{ display: "flex" }}>
                                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                            R
                                        </Avatar>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid> */}

                    </Grid>
                </Box>
            </Box >
        </Container >
    );
}
