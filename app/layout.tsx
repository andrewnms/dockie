
import type React from "react";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import { TwentyFirstToolbar } from "@21st-extension/toolbar-next";
import { ReactPlugin } from "@21st-extension/react";

export const dynamic = "force-static"
export const revalidate = 30

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
            <Footer />
            <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
