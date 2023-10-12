import { storage } from './firebase';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

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
