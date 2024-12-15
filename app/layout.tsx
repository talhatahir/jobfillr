import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Jobfillr",
  description: "Autofill job applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://www.jobfillr.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Jobfillr" />
        <meta property="og:description" content="Autofill job applications" />
        <meta property="og:image" content="https://www.jobfillr.com/icons/icon-96.png" />
        <meta property="og:url" content="https://www.jobfillr.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Jobfillr" />
        <meta name="twitter:description" content="Autofill job applications" />
        <meta name="twitter:image" content="https://www.jobfillr.com/icons/icon-128.png" />
      </head>
      <GoogleAnalytics gaId="G-3Q7FK0H4T2" />
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
