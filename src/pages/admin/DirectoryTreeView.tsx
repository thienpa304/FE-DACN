import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import professions from 'src/constants/professions';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import { styled } from '@mui/styles';
import { Button, Typography } from '@mui/material';

// const TreeItem = styled(DefaultTreeItem)(({ theme }) => ({
//   borderBottom: '2px solid #e5eaf2',
//   '.MuiTreeItem-label': {
//     minHeight: 50,
//     display: 'flex',
//     alignItems: 'center'
//   }
// }));

const treeItemStyle = {
  '.MuiTreeItem-label': {
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    paddingRight: '10px'
  }
};

export default function DirectoryTreeView() {
  const { jobs } = useQueryAllJob();
  const [jobsPosted, setJobsPosted] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(professions.length / pageSize);

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

  return (
    <Box
      sx={{
        width: 300,
        boxShadow: '1px 1px 2px #aae2f7'
      }}
    >
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ minHeight: 570 }}
      >
        <TreeItem
          nodeId={'root'}
          label={<Typography fontWeight={700}>Tất cả</Typography>}
          sx={[
            treeItemStyle,
            {
              borderBottom: '2px solid #e5eaf2'
            }
          ]}
          onClick={(e) => {
            console.log('clicked ', e);
          }}
        />
        {visibleJobs?.map((profession) => (
          <TreeItem
            key={profession.code}
            nodeId={'A' + profession?.code?.toString()}
            label={profession.name}
            sx={[treeItemStyle, { borderBottom: '2px solid #e5eaf2' }]}
          />
        ))}
      </TreeView>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Trước
        </Button>
        <Typography
          sx={{ mx: 2, display: 'flex', alignItems: 'center', fontWeight: 700 }}
        >
          Trang {page} / {totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          Sau
        </Button>
      </Box>
    </Box>
  );
}
