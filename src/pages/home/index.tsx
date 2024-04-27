import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import UrgentJobTab from './UrgentJobTab';
import ProfessionType from './ProfessionType';
import Casousel from './Casousel';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { dot } from 'mathjs';
import { getEmbedding } from 'src/modules/ai/sendChatGPTRequest';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);
const Home = () => {
  const calc = async () => {
    const vector1 = await getEmbedding([
      'Tiếng Anh',
      'giao tiếp với khách hàng',
      'Excel',
      'PowerPoint',
      'quản trị',
      'kinh doanh',
      'tiếp thị',
      'ngoại giao',
      'thuyết trình trước đám đông'
    ]);
    const vector2 = await getEmbedding([
      'quản trị',
      'ngoại giao',
      'tiếp thị',
      'nói trước đám đông',
      'chăm sóc khách hàng'
    ]);
    debugger;
    const list = [];
    for (const vec1 of vector1) {
      for (const vec2 of vector2) {
        const res = dot(vec1.res, vec2.res);
        if (res > 0.7) {
          list.push({ word: vec1.word, res: res });
          break;
        }
      }
    }
    console.log(list);

    // const result = vector1.map((item) => ({
    //   word: item.word,
    //   res: dot(item.res, vector2.res)
    // }));
    // console.log('Dot product:', result);
  };
  useEffect(() => {
    // calc();
  }, []);

  return (
    <OverviewWrapper>
      <Casousel />
      <Container>
        <SearchBar to="profession" />
        <ProfessionType />
        <UrgentJobTab />
      </Container>
    </OverviewWrapper>
  );
};

export default Home;
