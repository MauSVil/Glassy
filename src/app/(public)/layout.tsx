'use client';

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  if (isSignedIn) router.push("/dashboard");
  return children;
};

export default PublicLayout;