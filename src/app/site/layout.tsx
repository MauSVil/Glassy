import Header from "@/components/globals/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
      <Header />
      {children}
    </section>
  );
}
