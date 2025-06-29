// import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import AuthProvider from "./context/AuthProvider";
import { ModeProvider } from "./context/ModeProvider";
import NavbarButtonDown from "@/components/layout/NavbarButtonDown";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alados do Rei",
  description:
    "Aplicativo desenvolvido para os desbravadores do clube Alados do Rei",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Davi Celestino" },
    {
      name: "Davi Celestino",
      url: "https://github.com/dicadavi",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <AuthProvider>
          <ModeProvider>
            <Toaster />
            <Suspense fallback="Loading..." />
            {children}
            <NavbarButtonDown />
          </ModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
