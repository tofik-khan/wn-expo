import { API_BASE } from "@/api/constants"
import { MongoDBUpdateResponseType } from "@/types";
import { Admin } from "@/types/admin";
import axios from "axios";

export const adminAPI = {
  getAdmins: (): Promise<{ data: Admin[]; status: string }> => {
    return axios.get(`${API_BASE}/admin`).then((response) => response.data);
  },
  updateAdminImage: ({
    _id,
    image,
  }): Promise<{ data: MongoDBUpdateResponseType; status: string }> => {
    return axios.put(`${API_BASE}/admin/image`, {
      _id,
      image,
    });
  },
};