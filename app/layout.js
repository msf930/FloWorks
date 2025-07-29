import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const roboto_flex = Roboto_Flex({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "FloWorks Plumbing",
  description:
    "Denver local plumbing solutions for your home or business. Expert repairs, installations, and prompt service. Contact us today!",
  openGraph: {
    title: "FloWorks Plumbing",
    description:
      "Denver local plumbing solutions for your home or business. Expert repairs, installations, and prompt service. Contact us today!",
    url: "https://floworks.vercel.app",
    siteName: "FloWorks Plumbing",
    images: [
      {
        url: "https://floworks.vercel.app/og.png",
        width: 800,
        height: 600,
        alt: "FloWorks Plumbing Logo",
      },
      {
        url: "https://floworks.vercel.app/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "FloWorks Plumbing Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="rSQ9LcpuhfFz6g3GksYkiqqIB0BPGz0Dy-7Axvkv8JM"
        />
        <meta name="robots" content="noindex" />
      </head>
      <body className={roboto_flex.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
