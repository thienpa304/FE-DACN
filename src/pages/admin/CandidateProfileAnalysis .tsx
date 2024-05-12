import React, { useState } from 'react';
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

const CandidateProfileAnalysis = () => {
  const [candidateProfile, setCandidateProfile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [includeJobSuggestions, setIncludeJobSuggestions] = useState(true);

  const handleFileChange = (e) => {
    // Access the file from the input element
    const file = e.target.files[0];
    setCandidateProfile(file);
  };

  const handleAnalysis = () => {
    // Replace the logic below with your actual analysis implementation
    const simulatedAnalysisResults = {
      suggestedJobs: [],
      skills: ['JavaScript', 'React', 'Node.js'],
      experience: '5 years',
      matchedJobs: [
        {
          title: 'Frontend Developer',
          company: 'ABC Tech',
          description: 'Responsible for developing user interfaces...'
        },
        {
          title: 'Full Stack Developer',
          company: 'XYZ Solutions',
          description: 'Work on both front-end and back-end development...'
        }
      ]
    };

    if (includeJobSuggestions) {
      // Additional logic for job suggestions
      // Simulate job suggestion based on analysis results
      const suggestedJobs = [
        {
          title: 'UI/UX Designer',
          company: 'Design Co.',
          description: 'Create user-friendly and visually appealing designs...'
        },
        {
          title: 'Software Engineer',
          company: 'Tech Innovations',
          description: 'Collaborate on software development projects...'
        }
      ];

      simulatedAnalysisResults.suggestedJobs = suggestedJobs;
    }

    setAnalysisResults(simulatedAnalysisResults);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <Card>
        <CardHeader title="Phân tích Hồ sơ Cá nhân" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="upload-file">
                <Input
                  id="upload-file"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Button variant="outlined" component="span">
                  {candidateProfile?.name || 'Chọn Hồ sơ Cá nhân ứng viên'}
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeJobSuggestions}
                    onChange={() =>
                      setIncludeJobSuggestions(!includeJobSuggestions)
                    }
                  />
                }
                label="Bao gồm đề xuất công việc"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAnalysis}
              >
                Phân tích Hồ sơ
              </Button>
            </Grid>
            {analysisResults && (
              <Grid item xs={12}>
                <Divider />
                <Typography variant="h6">Kết quả phân tích:</Typography>
                <Typography>
                  Kỹ năng: {analysisResults.skills.join(', ')}
                </Typography>
                <Typography>
                  Kinh nghiệm: {analysisResults.experience}
                </Typography>
                <Typography variant="h6">Các công việc phù hợp:</Typography>
                <List>
                  {analysisResults.matchedJobs.map((job, index) => (
                    <ListItem key={index} alignItems="flex-start">
                      <ListItemText
                        primary={job.title}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {job.company}
                            </Typography>
                            <br />
                            {job.description}
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                {includeJobSuggestions && analysisResults.suggestedJobs && (
                  <>
                    <Typography variant="h6">Công việc đề xuất:</Typography>
                    <List>
                      {analysisResults.suggestedJobs.map((job, index) => (
                        <ListItem key={index} alignItems="flex-start">
                          <ListItemText
                            primary={job.title}
                            secondary={
                              <>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {job.company}
                                </Typography>
                                <br />
                                {job.description}
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CandidateProfileAnalysis;
