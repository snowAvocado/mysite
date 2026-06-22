import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const description = "Senior Software Engineer based in Stockholm. C++, build infrastructure, distributed systems.";

export const metadata: Metadata = {
  title: "Nikhil Reddy Mara — Software Engineer",
  description,
  openGraph: {
    title: "Nikhil Reddy Mara — Software Engineer",
    description,
    type: "website",
    images: [{ url: "/photo.jpg", width: 600, height: 600, alt: "Nikhil Reddy Mara" }],
  },
  twitter: {
    card: "summary",
    title: "Nikhil Reddy Mara — Software Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs synchronously before first paint — reads saved theme and applies it */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.classList.add(t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
