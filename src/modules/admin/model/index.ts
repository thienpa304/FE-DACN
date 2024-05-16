type EmailFormate = {};

export type EmailResponseType = {
  userId: number;
  email: string;
  name: string;
  role: string;
};

export interface EmailSendType {
  emails: any[];
  subject: string;
  html: string;
}
