import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import { SplashScreen } from "@/components/SplashScreen";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CustomCursor } from "@/components/CustomCursor";
import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { KrishaCopilot } from "@/components/KrishaCopilot";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — AI Engineer, ML & Blockchain Developer`,
  description: profile.heroDescription,
  authors: [{ name: profile.name }],
  keywords: [
    "Krisha Raval",
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "Blockchain Developer",
    "Solidity",
    "Python Developer",
    "Marwadi University",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>
            <SplashScreen />
            <ScrollProgressBar />
            <GridBackground />
            <CustomCursor />
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <main className="flex-1 pt-[var(--nav-height)]">{children}</main>
              <Footer />
            </div>
            <KrishaCopilot />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "var(--bg-card)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                },
              }}
            />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
