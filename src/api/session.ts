import { API_BASE } from "@/api/constants"
import axios from "axios"

export const sessionAPI = {
  getSessionsCount: (): Promise<{data: number, status: string}> => {
    return axios.get(`${API_BASE}/sessions/count`)
      .then((response) => response.data)
  }
}