// https://api.imgbb.com/1/upload?key=8e9c6b454fcb0eb52c0fd9a0f41d7a8e

// import Axios from 'axios';
// import { convertBase64 } from 'src/utils/file';

// const httpRequest = Axios.create({
//   baseURL: 'https://api.imgbb.com/1/upload?key=e45837d8fafcc1fdd77c29e9b12e39de'
// });

// export const UploadService = (image) => {
//   return convertBase64(image).then((result) =>
//     httpRequest.post('', {
//       image: result
//     })
//   );
// };

import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export async function UploadAvatar(image, user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  return uploadBytes(imageRef, image);
}

export async function GetAvatar(user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  const photoURL = await getDownloadURL(imageRef);
  return photoURL.toString(); // Return the URL as a string
}

export async function RemoveAvatar(user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  return deleteObject(imageRef);
}