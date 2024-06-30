'use client';

import { ReactNode } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const token = Cookies.get("token");
  if (token) {
    router.replace("/dashboard");
  }
  return children;
};

export default PublicLayout;