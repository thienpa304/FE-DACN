import { storage } from './firebaseConfig';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';

export enum DocumentType {
  avatarType = 'avatar',
  companyAvatarType = 'companyAvatar',
  companyCoverType = 'companyCover',
  cvType = 'employeeCV'
}

export async function GetFileByUserId(userId: number, kind: DocumentType) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL.toString();
}

export async function UploadFileByUserId(
  userId: number,
  image: File,
  kind: DocumentType
) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  return uploadBytes(fileRef, image);
}

export async function RemoveFileByUserId(userId: number, kind: DocumentType) {
  const fileRef = ref(storage, `users/uid-${userId}/${kind}`);
  try {
    await getDownloadURL(fileRef);
    await deleteObject(fileRef);
    console.log('Đã xóa ảnh thành công.');
  } catch (error) {
    console.error('Không thể xóa ảnh. Lỗi: ', error);
  }
}

// // Avatar
// export async function GetAvatarByUser(user) {
//   const imageRef = ref(storage, `users/uid-${user.userId}/avatar`);
//   const photoURL = await getDownloadURL(imageRef);
//   return photoURL.toString();
// }

// export async function UploadAvatarByUser(image: File, user) {
//   const imageRef = ref(storage, `users/uid-${user.userId}/avatar`);
//   return uploadBytes(imageRef, image);
// }

// export async function RemoveAvatarByUser(user) {
//   const imageRef = ref(storage, `users/uid-${user.userId}/avatar`);
//   try {
//     await getDownloadURL(imageRef);
//     await deleteObject(imageRef);
//     console.log('Đã xóa ảnh thành công.');
//   } catch (error) {
//     console.error('Không thể xóa ảnh. Lỗi: ', error);
//   }
// }

// // Attached Document
// export async function GetCVByUserId(userId) {
//   const fileRef = ref(storage, `users/uid-${userId}/CV`);
//   const fileURL = await getDownloadURL(fileRef);
//   return fileURL.toString();
// }

// export async function UploadCVByUserId(userId: number | string, file: File) {
//   const fileRef = ref(storage, `users/uid-${userId}/CV`);
//   return uploadBytes(fileRef, file);
// }

// export async function RemoveCVByUserId(userId) {
//   const fileRef = ref(storage, `users/uid-${userId}/CV`);
//   try {
//     await getDownloadURL(fileRef);
//     await deleteObject(fileRef);
//     console.log('Đã xóa CV thành công.');
//   } catch (error) {
//     console.error('Không thể xóa CV. Lỗi: ', error);
//   }
// }
