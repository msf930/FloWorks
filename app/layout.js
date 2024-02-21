import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FloWorks Plumbing",
  description: "Denver local plumbing solutions for your home or business. Expert repairs, installations, and prompt service. Contact us today!",
  openGraph: {
    title: 'FloWorks Plumbing',
    description: 'Denver local plumbing solutions for your home or business. Expert repairs, installations, and prompt service. Contact us today!',
    url: 'https://floworksplumbing.com',
    siteName: 'FloWorks Plumbing',
    images: [
      {
        url: 'https://floworksplumbing.com/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://floworksplumbing.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'FloWorks Plumbing Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      {children}
      </body>
      </html>
  );
}
