import type React from "react"
import "@/app/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@repo/ui/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web3 Site",
  description: "Web3 Site built with Next.js 15 and Tailwind CSS v4",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="web3-site-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
