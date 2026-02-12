import { API_BASE } from "./constants";
import { FAQ } from "@/types/faq";
import axios from "axios";

export const faqAPI = {
  getFaqs: async (): Promise<{ data: FAQ[]; status: string }> => {
    return axios.get(`${API_BASE}/expo/faqs`);
  },
};
