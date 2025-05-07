import type React from 'react';
import './styles.css';
import {ThemeProvider} from '@repo/ui/components/theme-provider';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Web3 Site',
    description: 'Web3 Site built with Next.js 15 and Tailwind CSS v4',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class"
                       defaultTheme="system"
                       enableSystem
                       disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
                <Header/>
                {children}
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
