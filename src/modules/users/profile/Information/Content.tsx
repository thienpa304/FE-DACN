import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Typography,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    styled,
} from "@mui/material";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import { CompanyForm, UserForm } from "../Edit/Form";

const InputLabel = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1.5, 1, 1.5, 0),
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
}));

const InputData = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1.5, 1, 1.5, 1),
    fontFamily: theme.typography.fontFamily,
}));

export default function InfoTab(props) {
    const { user, data, title, editIcon, openForm } = props
    const [open, setOpen] = useState(false);
    const [infoData, setInfoData] = useState(data);

    const handleEdit = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleData = (value) => (value === null ? null : value);

    const myForm = openForm === "User"
        ? <UserForm close={handleClose} user={user} />
        : <CompanyForm close={handleClose} user={user} />

    return (
        <Box bgcolor="#ffff" sx={{ padding: 2, mb: 4 }}>
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex">
                        {editIcon}
                        <Box>
                            <Typography fontWeight={700} fontSize={22} lineHeight={3}>
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleEdit}
                        startIcon={<AutoFixHighOutlinedIcon fontSize="large" />}
                        sx={{ borderRadius: 5 }}
                    >
                        <Typography textTransform="none">Chỉnh sửa</Typography>
                    </Button>
                    <Dialog open={open} fullWidth maxWidth="md">
                        <DialogTitle
                            sx={{ textAlign: "center", fontWeight: 700, fontSize: "1.3rem" }}
                        >
                            {title}
                        </DialogTitle>
                        <DialogContent>{myForm}</DialogContent>
                    </Dialog>
                </Box>
                <Box sx={{ mt: 1 }}>
                    {infoData.map((item, index) => (
                        <Grid
                            container
                            key={index}
                            sx={{ borderTop: 1, borderColor: "grey.300" }}
                        >
                            <InputLabel item xs={6} md={3}>
                                {item.label}
                            </InputLabel>
                            <InputData item xs={6} md={9}>
                                {handleData(item.value)}
                            </InputData>
                        </Grid>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};