import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { LoaderCircle } from "lucide-react";

export function ProtectedRoute() {
  const { data: user, isLoading, isError } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center mt-16">
        <LoaderCircle className="animate-spin" size={20} />
      </div>
    );
  }

  if (!user || isError) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
