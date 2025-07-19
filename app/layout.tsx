import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Divya R - Portfolio | Software Developer",
  description: "MERN Developer & ML Enthusiast",
  icons: {
    icon: "/logo_divya.png", // ✅ Use your image here
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-all duration-300 font-sans">
        
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}