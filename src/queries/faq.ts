import { useQuery } from "@tanstack/react-query";
import { API } from "@/api";

export const useFaqQuery = () =>
  useQuery({
    queryKey: ["faqs"],
    queryFn: API.getFaqs,
    select: (response) => response.data,
  });
