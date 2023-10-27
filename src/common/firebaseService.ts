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
