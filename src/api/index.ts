import { adminAPI } from '@/api/admin';
import { sessionAPI } from "@/api/session";
import { presentersAPI } from "@/api/presenters";

export const API = {
  ...adminAPI,
  ...sessionAPI,
  ...presentersAPI,
};