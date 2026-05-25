import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Next-Gen Learning",
  description: "Futuristic education platform powered by Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="flex min-h-screen">
        <Sidebar />

        <section className="flex flex-1 flex-col">
          <Header />

          <section className="flex-1 pb-24 md:pb-6">{children}</section>
        </section>
      </section>
    </main>
  );
}
