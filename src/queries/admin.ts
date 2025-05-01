import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "@/api";
import { Admin } from "@/types/admin";
import { useDispatch } from "react-redux";
import { showSuccess } from "@/reducers";
import { useAppDispatch } from "@/hooks";

export const useAdminsQuery = () =>
  useQuery({
    queryKey: ["admins"],
    queryFn: API.getAdmins,
    select: (response) => response.data,
  });

/** MUTATIONS */

export const useAdminImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ _id, image }: { _id: number; image: string }) =>
      API.updateAdminImage({ _id, image }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admins"] }),
  });
};

export const useAdminLastLoginMutation = () => {
  return useMutation({
    mutationFn: ({ _id }: { _id: number }) => API.updateLastLogin({ _id }),
  });
};

export const useAdminMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: ({ authToken, data }: { authToken: string; data: Admin }) =>
      API.createAdmin({ authToken, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      dispatch(showSuccess({ open: true, message: "Admin Created!" }));
    },
  });
};

export const useUpdateAdminMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ authToken, data }: { authToken: string; data: Admin }) =>
      API.updateAdmin({
        authToken,
        data,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      dispatch(showSuccess({ open: true, message: "Admin Updated!" }));
    },
  });
};
