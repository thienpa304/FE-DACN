import Axios from 'axios';
import { convertBase64 } from 'src/utils/file';

const httpRequest = Axios.create({
  baseURL: 'https://api.imgbb.com/1/upload?key=8e9c6b454fcb0eb52c0fd9a0f41d7a8e'
});

export const UploadService = (image) => {
  return convertBase64(image).then((result) =>
    httpRequest.post('', {
      image: result
    })
  );
};
