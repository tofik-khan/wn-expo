import { API_BASE } from "@/api/constants"
import axios from "axios"

export const presentersAPI = {
  getPresentersCount: (): Promise<{data: number, status: string}> => {
    return axios.get(`${API_BASE}/presenters/count`)
      .then((response) => response.data)
  }
}