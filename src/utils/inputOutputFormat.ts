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
    ? dayjs(data, outputFormat).toISOString()
    : null;
}

export function toOutputDateString(
  data: Date,
  inputFormat?: string,
  outputFormat?: string
) {
  if (!data) return null;
  return dayjs(data, inputFormat).isValid()
    ? dayjs(data).format(outputFormat || 'DD-MM-YYYY')
    : null;
}

export function toOutputOptionLabel(value: string, option) {
  return option.find((item) => item.value === value)?.label;
}

export function findObjectKey(
  experienceValue: string,
  object
): string | undefined {
  for (const key in object) {
    if (object[key as keyof typeof object] === experienceValue) {
      return key;
    }
  }
  return undefined;
}
