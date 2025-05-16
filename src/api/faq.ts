import { API_BASE } from "./constants";
import { MongoDBUpdateResponseType } from "@/types";
import { Faq } from "@/types/faq";
import axios from "axios";

export const faqAPI = {
  createFaq: ({authToken, data}): Promise<{data: MongoDBUpdateResponseType; status: string}> => {
    return axios.post(`${API_BASE}/faq`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
  },
  getFaqs: async (): Promise<{data: Faq[], status: string}> => {
    const response = await axios.get(`${API_BASE}/faq`);
    return response.data;
  }
}