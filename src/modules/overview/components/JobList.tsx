import { useState } from 'react';
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
    ToggleButton,
    Divider,
    Link,

} from '@mui/material';

import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function JobCard({ job }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Card sx={{ minHeight: 160 }}>
            <CardHeader
                sx={{ py: 1, color: "grey.700" }}
                action={
                    <IconButton color="primary" onClick={handleFavorite}>
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                }
                title={job.jobTitle}
            />
            <CardContent sx={{ display: "flex", flexDirection: "row", gap: 2, pt: 1 }}>
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                <Box display="flex" flexDirection="column" gap={1}>
                    <Typography fontWeight={700} fontSize={12} color="grey.600">
                        {job.contactAddress}
                    </Typography>
                    <Box display="flex">
                        <LocalAtmIcon sx={{ maxHeight: 20, color: "grey.700" }} />
                        <Typography>
                            {job.minSalary || job.maxSalary ?
                                `${job.minSalary || "Thương lượng"} - ${job.maxSalary || "Thương lượng"} triệu`
                                : "Thương lượng"
                            }
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <LocationOnOutlinedIcon sx={{ maxHeight: 18, color: "grey.700" }} />
                        <Typography>
                            {job.workAddress}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

function JobList() {
    const { jobs } = useQueryJob();
    const [isFavorite, setIsFavorite] = useState(false);
    const [showAllJobs, setShowAllJobs] = useState(false);
    const initialJobsToShow = 12;
    const jobsToShow = showAllJobs ? jobs : jobs.slice(0, initialJobsToShow);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <Container>
            <Box sx={{ p: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" justifyContent="space-between" gap={1}>
                        <ScheduleIcon color='primary' sx={{ fontSize: 40 }} />
                        <Typography variant='h3'>Việc làm tuyển gấp</Typography>
                    </Box>
                    <Link
                        href="#"
                        underline="hover"
                        color="secondary"
                        fontWeight={700}
                        onClick={() => setShowAllJobs(true)}
                    >
                        Xem thêm
                    </Link>
                </Box>
                <Box sx={{ pt: 2, mb: 4 }}>
                    <Grid container mb={4} spacing={2}>
                        {jobsToShow.map((job, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4}>
                                <JobCard key={index} job={job} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box >
        </Container >
    );
}

export default JobList;