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
  try {
    await getDownloadURL(imageRef);
    await deleteObject(imageRef);
    console.log('Đã xóa tệp ảnh thành công.');
  } catch (error) {
    console.error('Không thể xóa tệp ảnh. Lý do: ', error);
  }
}
