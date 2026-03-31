import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estética Natural | Tratamientos estéticos personalizados",
  description:
    "Limpieza facial, depilación definitiva y tratamientos corporales. Reservá tu turno por WhatsApp.",
  openGraph: {
    title: "Estética Natural",
    description:
      "Tratamientos estéticos personalizados para que te sientas radiante.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${merriweather.variable} h-full antialiased scroll-smooth`}      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
