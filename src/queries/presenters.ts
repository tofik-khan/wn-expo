import { useQuery } from '@tanstack/react-query';
import { API } from "@/api";

export const usePresentersCountQuery = () => useQuery({
    queryKey: ['presentersCount'],
    queryFn: API.getPresentersCount,
    select: response => response.data
  }
)