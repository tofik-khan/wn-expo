import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "@/api";
import { Faq } from "@/types/faq";
import { useAppDispatch } from "@/hooks";
import { showSuccess } from "@/reducers";

export const useFaqMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: ({authToken, data}: {authToken: string; data: Faq}) => 
      API.createFaq({
        authToken,
        data
      }),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["faqs"]
        });
        dispatch(showSuccess({open: true, message: "FAQ Created!"}))
      }
  })
}

export const useFaqQuery = () => useQuery({
    queryKey: ["faqs"],
    queryFn: API.getFaqs,
    select: (response) => response.data
  });