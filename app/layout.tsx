import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "IEM-UMPSS | Connecting UMP Students to Engineers",
  applicationName: 'IEM UMPSA | Connecting UMP Students to Engineers',
  description: "Founded in 2013, IEM-UMPSS acts as a liaison, connecting UMP students to engineers, institutions, industries, and professionals. Join us now to embark on professionalism and celebrate our 10 years anniversary. Explore our awards, upcoming events, and membership options. Get in touch with us to contribute to our open-source projects and grow your portfolio.",
  keywords: "IEM-UMPSS, University Malaysia Pahang, Engineering, Student Section, Engineers, Liaison, Industry, Professionals, Events, Awards, Membership, Open Source, Contribution, Portfolio",
  authors: [{ name: 'IEM-UMPSA', url: 'https://iemumpsa.vercel.app/' }],
  creator: 'IEM-UMPSS',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: 'https://iemumpsa.vercel.app/',
    siteName: 'IEM UMPSA',
    title: "IEM UMPSA | Connecting UMP Students to Engineers",
    description: "Founded in 2013, IEM-UMPSS acts as a liaison, connecting UMP students to engineers, institutions, industries, and professionals. Join us now to embark on professionalism and celebrate our 10 years anniversary. Explore our awards, upcoming events, and membership options. Get in touch with us to contribute to our open-source projects and grow your portfolio.",
    images: [
      {
        url: '/logo/logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            

      <body className={cn(
          "min-h-screen bg-background font-sans antialiased  ",
          fontSans.variable
        )}>
        
          {children}
          
        </body>
    </html>
  );
}
