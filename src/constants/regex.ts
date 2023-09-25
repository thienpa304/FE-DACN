export const regexPhoneNumber =
  /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/gm;
export const regexpNonSpace = /^\S*$/;
export const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const regexBankNumber = /^[1-9a-zA-Z][0-9a-zA-Z]*$/g;
export const regexInteger = /^\d+$/g;
export const regexFloat = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/g;
