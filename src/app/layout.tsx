import type { Metadata, Viewport } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://porsche-3d-showcase.vercel.app"),
  title: "PORSCHE 918 SPYDER | Interactive 3D Luxury Showroom",
  description: "Experience the legendary Porsche 918 Spyder in an award-winning interactive 3D showroom powered by React Three Fiber, Three.js, and Next.js 15.",
  keywords: [
    "Porsche",
    "Porsche 918 Spyder",
    "3D Car Customizer",
    "React Three Fiber",
    "Three.js",
    "Next.js 15",
    "Awwwards",
    "Luxury Automotive",
    "WebGL",
  ],
  authors: [{ name: "Automotive 3D Studio" }],
  creator: "Automotive 3D Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://porsche-3d-showcase.vercel.app",
    siteName: "Porsche 918 Spyder 3D Showcase",
    title: "PORSCHE 918 SPYDER | Interactive 3D Luxury Showroom",
    description: "An award-winning interactive 3D hypercar experience with real-time paint customization, studio lighting, and performance metrics.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Porsche 918 Spyder 3D Showcase Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PORSCHE 918 SPYDER | Interactive 3D Luxury Showroom",
    description: "An award-winning interactive 3D hypercar experience built with React Three Fiber & Next.js 15.",
    images: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${cinzel.variable} dark h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#050507] text-white font-sans selection:bg-amber-500/30 selection:text-amber-200"
      >
        {children}
      </body>
    </html>
  );
}
