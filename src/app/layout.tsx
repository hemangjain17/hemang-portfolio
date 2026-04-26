import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemang Jain | Portfolio",
  description: "Personal portfolio of Hemang Jain — AI Engineer specializing in intelligent systems, autonomous pipelines, and scalable solutions.",
  icons: {
    icon: "/initials.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/initials.jpeg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
