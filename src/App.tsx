import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Snackbar from './modules/app/Snackbar';
import PreloadImages from './components/PreLoadImages';
import professions from './constants/professions';
import { casouselImages } from './pages/home/Casousel';
import { defaultImage } from './constants/uploadFileRule';

const professionImg = professions.map((item) => item.icon);
const casouselImg = casouselImages.map((item) => item.imgPath);
const logo =
  'https://thuvienvector.com/upload/images/items/vector-logo-truong-dai-hoc-bach-khoa-hcm-file-cdr-coreldraw-ai-217.webp';

const imagesToPreload = [
  // Add more image paths as needed
  ...casouselImg,
  defaultImage.companyAvatar,
  defaultImage.companyCover,
  logo,
  ...professionImg
];

function App() {
  const content = useRoutes(router);
  return (
    <>
      <PreloadImages sources={imagesToPreload} />
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
