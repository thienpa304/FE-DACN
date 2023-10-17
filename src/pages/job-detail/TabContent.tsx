import { Card, CardContent, Grid, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { useApp } from 'src/modules/app/hooks';
import JobContent from 'src/modules/jobs/components/JobContent';
import useJob from 'src/modules/jobs/hooks/useJob';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }, 
`
);

function TabContent() {
  const { itemDetail } = useJob();
  const { isEmployer } = useApp();
  const [currentTab, setCurrentTab] = useState<string>('info_job');
  const tabs = [
    { value: 'info_job', label: 'Chi tiết tuyển dụng', show: true },
    { value: 'info_company', label: 'Thông tin công ty', show: isEmployer }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <CardContent>
        <JobContent data={itemDetail} />
      </CardContent>
    </Card>
  );
}

export default TabContent;
