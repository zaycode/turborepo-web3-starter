import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <footer
            className="flex container px-4 sm:px-6 lg:px-8 shrink-0 flex-col items-center gap-2 border-t py-6 sm:flex-row">
            <p className="text-muted-foreground text-xs">
                © 2025 Web3. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                <Link className="text-xs hover:underline" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline" href="#">
                    Privacy
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;