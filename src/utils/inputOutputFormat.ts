import dayjs from 'dayjs';
import { object } from 'prop-types';

interface Option {
  value: any;
  label: string;
}

export function convertStringToObjectList(
  inputString: string,
  options: Option[]
): Option[] {
  if (!inputString) return null;
  const inputArray = inputString.split(', ');

  const objectList = inputArray.map((label) => {
    const option = options.find((option) => option.label === label);
    if (option) {
      return { value: option.value, label };
    }
    return null;
  });

  return objectList.filter((object) => object !== null);
}

export function convertObjectListToString(objectList: Option[]): string {
  if (!objectList) return '';
  const labels = objectList
    .map((option) => option.label)
    .filter((label) => label !== null);

  return labels.join(', ');
}

export function toInputDateString(
  data: string,
  inputFormat?: string,
  outputFormat?: string
) {
  if (!data) return '';
  return dayjs(data, inputFormat).isValid()
    ? dayjs(data, inputFormat).toISOString()
    : null;
}

export function toOutputDateString(
  data: Date,
  inputFormat?: string,
  outputFormat?: string
) {
  if (!data) return null;
  return dayjs(data, inputFormat).isValid()
    ? dayjs(data, inputFormat).format(outputFormat || 'DD/MM/YYYY')
    : null;
}

export function toOutputOptionLabel(value: string, option) {
  return option.find((item) => item.value === value)?.label;
}

export function findObjectKey(stringValue: string, object): string | undefined {
  for (const key in object) {
    if (object[key as keyof typeof object] === stringValue) {
      return key;
    }
  }
  return undefined;
}

export function preProcessText(documentText: string) {
  if (!documentText) return;
  const str = JSON.stringify(documentText);
  // Loại bỏ các thẻ HTML
  const textWithoutHTML = str.replace(/<\/?[^>]+(>|$)/g, '');
  // Loại bỏ các ký tự không phải chữ cái và chuyển về chữ thường
  const textOnlyLetters = textWithoutHTML
    // .replace(/[^a-zA-Z\s]/g, '')
    .toLowerCase();

  // Tách từ và gộp lại
  return textOnlyLetters.split(/\s+/).join(' ');
}

export function convertToObjectsForSkill(str) {
  // Tách chuỗi thành các từ riêng biệt bằng dấu phẩy
  const words = str.split(',').map((word) => word.trim());

  // Chuyển đổi từng từ thành object với id và text
  const objects = words.map((word) => ({
    id: word,
    text: word
  }));

  return objects;
}

export function convertObjectListToStringForSkill(objectList): string {
  if (!objectList) return '';
  const text = objectList
    .map((item) => item.text)
    .filter((text) => text !== null);

  return text.join(', ');
}
