import React from 'react';
import Link from "next/link";
import {ModeToggle} from "@repo/ui/components/mode-toggle";

const Header = () => {
    return (
        <header className="flex h-16 items-center container px-4 sm:px-6 lg:px-8">
            <Link className="flex items-center justify-center" href="#">
                <span className="font-bold text-2xl">Turborepo Web3</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="font-medium text-sm hover:underline" href="#">
                    Features
                </Link>
                <Link className="font-medium text-sm hover:underline" href="#">
                    Pricing
                </Link>
                <Link className="font-medium text-sm hover:underline" href="#">
                    About
                </Link>
                <Link className="font-medium text-sm hover:underline" href="#">
                    Contact
                </Link>
                <ModeToggle/>
            </nav>
        </header>
    );
};

export default Header;