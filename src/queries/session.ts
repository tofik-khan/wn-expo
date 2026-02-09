import { useQuery } from "@tanstack/react-query";
import { API } from "@/api";

export const useSessionsQuery = (date) =>
  useQuery({
    queryKey: ["sessions"],
    queryFn: () => API.getSessions(date),
    select: (response) => response.data,
  });
