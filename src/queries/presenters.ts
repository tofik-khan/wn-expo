import { useQuery } from "@tanstack/react-query";
import { API } from "@/api";

export const usePresentersQuery = () =>
  useQuery({
    queryKey: ["presenters"],
    queryFn: API.getPresenters,
    select: (response) => response.data,
  });
