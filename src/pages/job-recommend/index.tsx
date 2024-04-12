import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Input,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import useOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useOnlineProfile';
import useDocumentHook from 'src/modules/jobProfile/attachedDocument/hooks/useDocumentHook';
import useQueryOnlineProfile from 'src/modules/jobProfile/onlineProfile/hooks/useQueryOnlineProfile';
import useQueryAttachedDocument from 'src/modules/jobProfile/attachedDocument/hooks/useQueryAttachedDocument';
import AnalyzeProfile from './AnalyzeProfile';

const JobRecommend = () => {
  const { onlineProfile } = useQueryOnlineProfile();
  const { setProfile: setOnline } = useOnlineProfile();
  const { attachedDocument } = useQueryAttachedDocument();
  const { setProfile: setDocumentProfile } = useDocumentHook();

  // useEffect(() => {
  //   setOnline(onlineProfile);
  //   setDocumentProfile(attachedDocument);
  // }, [onlineProfile, attachedDocument]);

  return (
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <AnalyzeProfile id="online" />
      <AnalyzeProfile id="document" />
      <AnalyzeProfile id="upload-cv" />
    </Container>
  );
};

export default JobRecommend;
