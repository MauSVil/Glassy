'use client';

import Image from "next/image"
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="w-full h-full flex items-center justify-center py-12 relative">
        <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
        <SignIn />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default LoginPage
