import { useQuery } from '@tanstack/react-query';
import { API } from "@/api";

export const useSessionsCountQuery = () => useQuery({
    queryKey: ['sessionCount'],
    queryFn: API.getSessionsCount,
    select: response => response.data
  }
)