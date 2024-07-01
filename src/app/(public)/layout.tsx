'use client';

import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import APIService from "@/lib/services/APIService";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const path = usePathname();
  const token = Cookies.get("token");

  const getData = async () => {
    try {

      const restaurants = await APIService.get("/restaurants");
      console.log(restaurants);

      if (token) {
        if (path === "/login") router.replace("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [token, path, router]);

  return children;
};

export default PublicLayout;