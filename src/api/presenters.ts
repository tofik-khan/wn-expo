import { API_BASE } from "@/api/constants";
import { Presenter } from "@/types";
import axios from "axios";

export const presentersAPI = {
  getPresenters: (): Promise<{ data: Presenter[] }> => {
    return axios.get(`${API_BASE}/expo/public/presenters`);
  },
};
