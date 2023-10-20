import { storage } from './firebase';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

export async function UploadAvatarByUser(image, user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  return uploadBytes(imageRef, image);
}

export async function GetAvatarByUser(user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  const photoURL = await getDownloadURL(imageRef);
  return photoURL.toString();
}

export async function RemoveAvatarByUser(user) {
  const imageRef = ref(storage, `users/uid-${user.userId}/avatar.png`);
  return deleteObject(imageRef);
}

export async function GetAvatarToImage(user) {
  const photoURL = await GetAvatarByUser(user); // Lấy URL ảnh từ Firebase

  const response = await fetch(photoURL);
  const blob = await response.blob();

  const imageFile = new File([blob], 'avatar.png', { type: 'image/png' });

  // const updatedUser = {
  //   ...user,
  //   avatar: imageFile,
  // };

  // return updatedUser;
  return imageFile;
}
