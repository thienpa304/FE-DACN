import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import TableData from 'src/components/TableData';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
const userActivityColumns: GridColDef[] = [
  {
    field: 'user',
    headerName: 'Người dùng',
    minWidth: 200,
    renderCell: (params) => (
      <Link component={RouterLink} to={`/user-details/${params.row.id}`}>
        {params.value}
      </Link>
    )
  },
  {
    field: 'action',
    headerName: 'Hành động',
    minWidth: 200
  },
  {
    field: 'timestamp',
    headerName: 'Thời điểm',
    minWidth: 200
  }
];

const generateSampleUserActivityData = () => {
  const sampleData = [];
  for (let i = 1; i <= 20; i++) {
    sampleData.push({
      id: i,
      user: `user${i}`,
      action: i % 2 === 0 ? 'Login' : 'Logout',
      timestamp: `2023-01-${i < 10 ? `0${i}` : i} 10:00:00`
    });
  }
  return sampleData;
};

const UserActivityTable: React.FC = () => {
  const sampleUserActivityData = generateSampleUserActivityData();

  return (
    <Box sx={{ height: '75vh', width: '100%' }}>
      <TableData rows={sampleUserActivityData} columns={userActivityColumns} />
    </Box>
  );
};

const SecurityAndAccessManagement: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  // Placeholder data for roles and permissions
  const roles = ['Admin', 'Manager', 'Employee'];
  const permissions = [
    'View Dashboard',
    'Manage Users',
    'Create Reports',
    'Approve Requests'
  ];

  const [selectedRole, setSelectedRole] = useState<string | null>('Admin');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    // Additional logic based on role selection
  };

  const handlePermissionToggle = (permission: string) => {
    const updatedPermissions = selectedPermissions.includes(permission)
      ? selectedPermissions.filter((p) => p !== permission)
      : [...selectedPermissions, permission];

    setSelectedPermissions(updatedPermissions);
    // Additional logic based on permission selection
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to roles and permissions
    console.log('Saved changes:', { selectedRole, selectedPermissions });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
            <CardHeader title="Bảo Mật và Quản Lý Quyền Truy Cập" />
            <Divider />
            <CardContent>
              <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Roles & Permissions" />
                <Tab label="User Activity Log" />
              </Tabs>

              <TabPanel value={selectedTab} index={0}>
                {/* Role and Permission Management Content */}
                <Typography variant="h6">Danh sách vai trò:</Typography>
                <List>
                  {roles.map((role) => (
                    <ListItem
                      key={role}
                      button
                      onClick={() => handleRoleSelection(role)}
                    >
                      <ListItemText primary={role} />
                    </ListItem>
                  ))}
                </List>

                {selectedRole && (
                  <>
                    <Typography variant="h6" marginTop={2}>
                      Quyền truy cập cho vai trò {selectedRole}:
                    </Typography>
                    <List>
                      {permissions.map((permission) => (
                        <ListItem
                          key={permission}
                          button
                          onClick={() => handlePermissionToggle(permission)}
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={selectedPermissions.includes(permission)}
                              tabIndex={-1}
                              disableRipple
                            />
                          </ListItemIcon>
                          <ListItemText primary={permission} />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}

                {/* Save Changes Button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveChanges}
                >
                  Lưu Thay Đổi
                </Button>
              </TabPanel>

              <TabPanel value={selectedTab} index={1}>
                {/* User Activity Log Content */}
                <UserActivityTable />
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

export default SecurityAndAccessManagement;
