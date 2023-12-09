import { Typography } from '@mui/material';
import {
  avatarFormat,
  CVFormat,
  coverImgFormat
} from 'src/constants/uploadFileRule';

const generateErrorText = (
  object: string,
  acceptTypes: string[],
  acceptSize: number,
  fileType: string
) => {
  const typeRegex = new RegExp(`${fileType}/`, 'g');
  return (
    <Typography color="error" my={1} fontWeight={700} fontSize={12}>
      {object} phải có định dạng&nbsp;
      {acceptTypes.join(', ').replace(typeRegex, '.')} và dung lượng{' '}
      {` <=${acceptSize / 1024 / 1024}MB`}
    </Typography>
  );
};

export const avatarErrorText = generateErrorText(
  'Ảnh đại diện',
  avatarFormat.acceptTypes,
  avatarFormat.acceptSize,
  'image'
);
export const coverErrorText = generateErrorText(
  'Ảnh bìa',
  coverImgFormat.acceptTypes,
  coverImgFormat.acceptSize,
  'image'
);
export const applicationErrorText = generateErrorText(
  'CV',
  CVFormat.acceptTypes,
  CVFormat.acceptSize,
  'application'
);
