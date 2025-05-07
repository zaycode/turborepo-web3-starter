import React from 'react';
import Link from "next/link";
import {ConnectButton} from "@repo/ui/components/connect-button";

function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-xl font-bold">
                        Turborepo Web3 Starter
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="/tokens" className="text-sm font-medium hover:text-primary">
                            Tokens
                        </Link>
                    </nav>
                </div>
                <ConnectButton/>
            </div>
        </header>
    );
}

export default Header;