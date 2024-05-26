import { Grid, IconButton, Typography } from '@mui/material';
import { useMemo } from 'react';
import professions from 'src/constants/professions';

const professionButtons = [
  {
    code: 0,
    name: 'Tất cả',
    icon: 'https://cdn-icons-png.flaticon.com/512/5110/5110785.png'
  },
  ...professions
];
export default function ProfessionList(props) {
  const { handleSelectProfession, handleViewProfessionMode, total } = props;

  const handleOption = (professionName) => {
    handleSelectProfession(professionName);
    handleViewProfessionMode(false);
  };

  const countAll = useMemo(
    () => total?.reduce((sum, item) => sum + item.count, 0),
    [total]
  );

  const getCount = (item) => {
    if (item.code === 0) return;
    const count =
      total?.find((profession) => profession.profession_value === item.name)
        ?.count || 0;
    return ' (' + count + ')';
  };

  return (
    <>
      <Typography
        textAlign="center"
        fontWeight={700}
        fontSize={20}
        mb={1}
        lineHeight={3}
      >
        Chọn ngành nghề
      </Typography>
      <Grid
        container
        gap={3}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {professionButtons.map((item) => (
          <Grid
            key={item.code}
            item
            xs={12}
            sm={2}
            display="flex"
            justifyContent="center"
          >
            <IconButton
              color="secondary"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
              onClick={() => handleOption(item.name)}
            >
              <img src={item.icon} alt={item.name} width="100" height="100" />
              <Typography sx={{ mt: 1 }}>
                {item.name}
                {total && getCount(item)}
              </Typography>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
