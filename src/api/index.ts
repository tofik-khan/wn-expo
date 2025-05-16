import { adminAPI } from '@/api/admin';
import { sessionAPI } from "@/api/session";
import { presentersAPI } from "@/api/presenters";
import { faqAPI } from "@/api/faq";

export const API = {
  ...adminAPI,
  ...sessionAPI,
  ...presentersAPI,
  ...faqAPI,
};