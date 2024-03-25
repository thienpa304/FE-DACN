import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid
} from '@mui/material';
import useQueryJob from 'src/modules/jobs/hooks/useQueryJob';
import Table from './Table';
import SelectInput from 'src/components/SelectInput';
import { APPROVAL_STATUS } from 'src/constants';
import { useState } from 'react';

const RecruitmentApproval = () => {
    const [status, setStatus] = useState('')

    const handleChangeStatusFilter = (e) => {
        setStatus(e.target.value)
    }

    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
                marginTop={0}
            >
                <Grid item xs={12}>
                    <Card>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <CardHeader title="Danh sách tin tuyển dụng" />
                            <Box sx={{ margin: 'auto 25px auto auto', width: '120px' }}>
                                <SelectInput
                                    label='Trạng thái'
                                    value={status}
                                    options={APPROVAL_STATUS}
                                    onChange={(e) => handleChangeStatusFilter(e)}>
                                </SelectInput>
                            </Box>
                        </Box>

                        <Divider />
                        <CardContent>
                            <Table statusFilter={status} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RecruitmentApproval;
