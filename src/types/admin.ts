export type Admin = {
  _id: number;
  email: string;
  title: string;
  isSuperuser: boolean;
  isAuthorized: boolean;
};