"use client"

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const authCPF = localStorage.getItem("authCPF");

    if (!authToken || !authCPF) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authCPF");
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
