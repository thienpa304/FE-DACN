import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Divider,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  Grid,
  Container
} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import ProfessionListDialog from 'src/pages/home/ProfessionListDialog';
import professions from 'src/constants/professions';
import useQueryTotolJobsEachProfession from 'src/modules/jobs/hooks/useQueryTotolJobsEachProfession';
import Link from 'src/components/Link';

function ProfessionType() {
  const [open, setOpen] = React.useState(false);
  const { dataList } = useQueryTotolJobsEachProfession();

  const matchProfessionWithCount = professions
    .map((profession) => {
      const foundItem = Array.isArray(dataList)
        ? dataList.find((data) => data.profession_value === profession.name)
        : null;

      if (foundItem) {
        return {
          ...profession,
          count: foundItem.count
        };
      } else
        return {
          ...profession,
          count: 0
        };
    })
    .sort((a, b) => {
      return b.count - a.count;
    });
  const professionToShow = matchProfessionWithCount.slice(0, 7);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ border: 1, borderColor: '#98E4FF', borderRadius: 1, mt: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, p: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <BusinessCenterIcon color="secondary" sx={{ fontSize: 35 }} />
          <Typography fontWeight={700} fontSize={18} alignSelf="end">
            Nghề nghiệp nổi bật
          </Typography>
        </Box>
        <Divider />
        <Link
          to="#"
          sx={{
            fontSize: 16,
            fontWeight: 700
          }}
          onClick={() => setOpen(true)}
        >
          Xem thêm
        </Link>
      </Box>

      <ProfessionListDialog
        open={open}
        handleClose={handleClose}
        professionList={matchProfessionWithCount}
      />

      <Container
        sx={{
          overflow: 'hidden',
          p: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {professionToShow?.map((profession, index) => (
          <Link
            key={index}
            to={`/profession/${profession.code}`}
            state={{ profession: profession.name, pageTitle: profession.name }}
            sx={{
              width: 170,
              height: 170,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginX: 2,
              gap: '5px',
              textDecoration: 'none',
              '&:hover': {
                color: '#FF7D55'
              }
            }}
          >
            <img
              src={profession.icon}
              alt="shopping-bag"
              style={{
                objectFit: 'cover',
                width: '90px',
                height: '90px',
                borderRadius: 2
              }}
            />
            <Box display={'flex'} columnGap="2px" alignItems="center">
              <Typography
                fontWeight={700}
                fontSize={16}
                color="#379aff"
                textAlign="center"
              >
                {profession.count}
              </Typography>
              <Typography
                fontWeight={700}
                color="#939295"
                textAlign="center"
                fontSize={13}
              >
                việc
              </Typography>
            </Box>
            <Typography
              fontWeight={700}
              textAlign="center"
              sx={{
                '&:hover': {
                  color: '#FF7D55'
                }
              }}
            >
              {profession.name}
            </Typography>
          </Link>
        ))}
      </Container>
    </Card>
  );
}

export default ProfessionType;
