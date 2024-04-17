import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Plants discovery",
  description: "Junior web developer Portfolio",
  keywords: "porTfolio",
  author: "Roger Banze",

  icons: [
    {
      rel: "icon",
      type: "image/x-icon?v=2",
      sizes: "16x16",
      url: "/favicon.ico",
    },
    {
      rel: "shortcut",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png?v=2",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png?v=2",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png?v=2",
    },

    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "apple-icon-180x180.png?v=2",
    },
    {
      rel: "icon",
      sizes: "192x192",
      url: "/android-icon-192x192.png?v=2",
    },
    {
      rel: "icon",
      sizes: "180x180",
      url: "/android-icon-180x180.png?v=2",
    },
  ],

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    Sitemap: "https://www.plantk.org/sitemap.xml",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
