import { Box, Container, Grid } from '@mui/material';
import Cover from '../profile/Information/UserCover';
import InfoTab from '../profile/Information/UserInfo';
import Personal from './Personal';
import General from './General';

const MyBox = ({ children }) => (
    <Box bgcolor="#ffff" sx={{ py: 2, m: 3 }}>
        {children}
    </Box>
);

export default function OnlineProfile() {
    return (
        <Container>
            <MyBox>
                <Personal />
            </MyBox>
            <MyBox>
                <General />
            </MyBox>
        </Container>
    );
}
