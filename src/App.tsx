import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Snackbar from './modules/app/Snackbar';
import PreloadImages from './components/PreLoadImages';

function App() {
  const content = useRoutes(router);
  return (
    <>
      <PreloadImages />
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Snackbar />
          <CssBaseline />
          {content}
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
