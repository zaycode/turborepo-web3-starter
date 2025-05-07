import type React from "react"
import "@/styles/styles.css"
import { env } from "@/env"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import { WalletProvider } from "@repo/ui/components/web3-provider"
import { supportedChains } from "@repo/blockchain"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Link from "next/link"
import { ConnectButton } from "@repo/ui/components/connect-button"
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Turborepo Web3 Starter - DApp",
    description: "Powerful Web3 DApp built with Next.js 15 and Tailwind CSS v4",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider defaultTheme="system">
            <WalletProvider
                projectId={env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
                appName="Turborepo Web3 Starter"
                chains={supportedChains}
            >
                <div className="flex min-h-screen flex-col">
                    <Header/>
                    <main className="flex-1">{children}</main>
                </div>
            </WalletProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
