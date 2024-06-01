import React from 'react';
import { Box, Typography, Card, Divider, Grid } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ProfessionListDialog from 'src/pages/home/ProfessionListDialog';
import professions from 'src/constants/professions';
import useQueryTotalJobsEachProfession from 'src/modules/jobs/hooks/useQueryTotalJobsEachProfession';
import Link from 'src/components/Link';

function ProfessionType() {
  const [open, setOpen] = React.useState(false);
  const { dataList } = useQueryTotalJobsEachProfession();

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
    <Card
      sx={{
        borderColor: '#98E4FF',
        borderRadius: '5px',
        mt: 2,
        minHeight: 200
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ bgcolor: '#f0e9fe', borderTopRadius: 1, p: 2 }}
      >
        <Box display="flex" justifyContent="space-between">
          <BusinessCenterIcon
            color="secondary"
            sx={{ fontSize: { md: 35, xs: 25 } }}
          />
          <Typography
            fontWeight={700}
            alignSelf="end"
            sx={{ fontSize: { md: 20, sm: 18, xs: 16 } }}
          >
            Nghề nghiệp nổi bật
          </Typography>
        </Box>
        <Divider />
        <Link
          to="#"
          sx={{
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

      <Grid container p={2} rowGap={2}>
        {professionToShow?.map((profession, index) => (
          <Grid
            item
            xs={4}
            sm={3}
            lg={12 / 7}
            component={Link}
            key={index}
            to={`/profession?profession=${profession?.name}`}
            state={{
              profession: profession.name,
              pageTitle: profession.name
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: () => ({
                xs: 1,
                sm: 0
              }),
              textDecoration: 'none',
              '&:hover': {
                color: '#FF7D55'
              }
            }}
          >
            <Box
              component={'img'}
              src={profession.icon}
              alt={profession.name}
              sx={{
                width: {
                  xs: '70px',
                  sm: '90px'
                },
                height: {
                  xs: '70px',
                  sm: '90px'
                },
                objectFit: 'cover',
                borderRadius: 1
              }}
              loading="lazy"
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
                },
                fontSize: (theme) => ({
                  xs: 12,
                  sm: 14
                })
              }}
            >
              {profession.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default ProfessionType;
