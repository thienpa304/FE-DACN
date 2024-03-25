import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import professions from 'src/constants/professions';
import useQueryAllJob from 'src/modules/jobs/hooks/useQueryAllJob';
import { styled } from '@mui/styles';

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

  useEffect(() => {
    setJobsPosted(jobs);
  }, [jobs.length]);

  return (
    <Box
      sx={{
        minHeight: 180,
        flexGrow: 1,
        width: 300,
        boxShadow: '2px 2px 6px #aae2f7'
      }}
    >
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem
          nodeId={'root'}
          label={'Tất cả' + ` (${jobsPosted.length})`}
          sx={[
            treeItemStyle,
            {
              borderBottom: '2px solid #e5eaf2'
            }
          ]}
          onClick={(e) => {
            console.log('clicked ', e);
          }}
        >
          {professions.map((profession) => (
            <TreeItem
              key={profession.code}
              nodeId={'A' + profession.code.toString()}
              label={
                profession.name +
                ` (${
                  jobsPosted?.filter(
                    (job) => job.profession === profession.name
                  ).length
                })`
              }
              sx={[treeItemStyle, { borderBottom: '2px solid #e5eaf2' }]}
            >
              {jobsPosted
                ?.filter((job) => job.profession === profession.name)
                .map((job, index) => (
                  <TreeItem
                    key={job.postId}
                    nodeId={'B' + job.postId.toString()}
                    label={job.jobTitle}
                    sx={[
                      treeItemStyle,
                      {
                        borderTop: '2px solid #e5eaf2'
                      }
                    ]}
                  />
                ))}
            </TreeItem>
          ))}
        </TreeItem>
      </TreeView>
    </Box>
  );
}
