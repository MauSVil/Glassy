'use client';

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import APIService from "@/lib/services/APIService";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const path = usePathname();

  const getData = async () => {
    try {
      if (path === "/onboarding") {
        const restaurants = await APIService.get("/api/restaurants");
        if (restaurants.length > 0) {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [path, router]);

  return children;
};

export default PublicLayout;