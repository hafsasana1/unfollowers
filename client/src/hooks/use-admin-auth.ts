import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  isActive: boolean;
}

export function useAdminAuth() {
  const queryClient = useQueryClient();

  const { data: admin, isLoading, error } = useQuery({
    queryKey: ["/api/admin/me"],
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const res = await apiRequest("/api/admin/login", {
        method: "POST",
        body: credentials,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("/api/admin/logout", {
        method: "POST",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/admin/me"], null);
    },
  });

  const setupMutation = useMutation({
    mutationFn: async (adminData: {
      username: string;
      email: string;
      password: string;
      isActive?: boolean;
    }) => {
      const res = await apiRequest("/api/admin/setup", {
        method: "POST",
        body: adminData,
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/me"] });
    },
  });

  return {
    admin: admin as AdminUser | null,
    isLoading,
    isAuthenticated: !!admin,
    error,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    setup: setupMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    isSettingUp: setupMutation.isPending,
    loginError: loginMutation.error,
    logoutError: logoutMutation.error,
    setupError: setupMutation.error,
  };
}