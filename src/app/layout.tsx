import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { dark } from '@clerk/themes';


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glassy",
  description: "A restaurant dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        signIn: {
          variables: { colorBackground: 'transparent', colorPrimary: '#3B79F6'}
        },
        createOrganization: {
          variables: { colorPrimary: '#3B79F6'}
        }
      }}
    >
      <html lang="en">
          <body className={dmSans.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
              <Toaster />
                {children}
              </TooltipProvider>
            </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
