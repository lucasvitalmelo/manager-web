// src/hooks/useAuth.ts
import { Api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

export function useAuth() {
  const location = useLocation();

  const query = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const { data } = await Api.get("/auth/profile");

      return data
    },
    retry: false
  });

  useEffect(() => {
    const isOnAuthPage = location.pathname === "/sign-in";

    if (query.isError && !isOnAuthPage) {
      toast.error("Unauthorized!");
    }
  }, [query.isError, location]);

  return query
}
