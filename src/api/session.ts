import { API_BASE } from "@/api/constants";
import { HourSession } from "@/types";
import axios from "axios";

export const sessionAPI = {
  getSessions: (date): Promise<{ data: HourSession[] }> => {
    return axios.get(`${API_BASE}/expo/public/sessions/${date}`);
  },
};
