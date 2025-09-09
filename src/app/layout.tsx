import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
export const metadata: Metadata = {
  title: "Portafolio de Andrick Piedra",
  description: "Desarrollador Web | Backend & Fullstack",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  );
}