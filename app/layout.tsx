import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Shreya Sinha | Portfolio",
  description: "Computer Science undergraduate exploring software development, data science, and machine learning.",
  keywords: "Shreya Sinha, Computer Science, Python, Java, Data Science, Machine Learning, Web Development, Portfolio",
  authors: [{ name: "Shreya Sinha" }],
  creator: "Shreya Sinha",
  publisher: "Shreya Sinha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Shreya Sinha | Portfolio",
    description: "Computer Science undergraduate exploring software development, data science, and machine learning.",
    siteName: "Shreya Sinha's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Sinha | Portfolio",
    description: "Computer Science undergraduate exploring software development, data science, and machine learning.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
