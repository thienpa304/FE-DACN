import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import professions from 'src/constants/professions';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import { Box, Button, Typography } from '@mui/material';
import SuspenseLoader from 'src/components/SuspenseLoader';

const treeItemStyle = {
  '.MuiTreeItem-label': {
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    paddingRight: '10px'
  }
};

export default function DirectoryTreeView(props) {
  const { setSelectedProfession } = props;
  const [jobsPosted, setJobsPosted] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(professions.length / pageSize);
  const { jobs, isLoading, refetch } = useQueryAllJob();

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const visibleJobs = professions?.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  useEffect(() => {
    setJobsPosted(jobs);
  }, [jobs.length]);

  if (isLoading) return <SuspenseLoader />;
  return (
    <Box
      sx={{
        boxShadow: '1px 1px 2px #aae2f7',
        display: { xs: 'none', md: 'inline' }
      }}
    >
      <TreeView sx={{ minHeight: 570, border: 1, borderColor: 'divider' }}>
        <TreeItem
          nodeId={'root'}
          label={<Typography fontWeight={700}>Tất cả</Typography>}
          sx={[
            treeItemStyle,
            {
              borderBottom: '2px solid #e5eaf2'
            }
          ]}
          onClick={() => {
            setSelectedProfession(null);
          }}
        />
        {visibleJobs?.map((profession) => (
          <TreeItem
            key={profession.code}
            nodeId={'A' + profession?.code?.toString()}
            label={profession.name}
            sx={[treeItemStyle, { borderBottom: '2px solid #e5eaf2' }]}
            onClick={() => {
              setSelectedProfession(profession.name);
            }}
          />
        ))}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginY: '10px'
          }}
        >
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            size="small"
            sx={{ fontSize: 12 }}
          >
            Trước
          </Button>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: 12
            }}
          >
            Trang {page} / {totalPages}
          </Typography>
          <Button
            onClick={handleNextPage}
            disabled={page === totalPages}
            size="small"
            sx={{ fontSize: 12 }}
          >
            Sau
          </Button>
        </Box>
      </TreeView>
    </Box>
  );
}
