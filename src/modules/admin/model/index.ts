type EmailFormate = {};

export type EmailResponseType = {
  userId: number;
  email: string;
  name: string;
  role: string;
};

export interface EmailSendType {
  emails: string[];
  subject: string;
  html: string;
}
