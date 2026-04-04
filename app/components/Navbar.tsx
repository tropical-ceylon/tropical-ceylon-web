"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    // Scroll detection (only for home)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        if (isHome) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    // Decide style
    const transparent = isHome && !scrolled;

    return (
        <nav
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${transparent
                    ? "bg-transparent"
                    : "bg-white shadow-md border-b border-gray-200"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <Link href="/">
                    <h1
                        className={`text-2xl font-semibold tracking-wide ${transparent ? "text-white" : "text-gray-900"
                            }`}
                    >
                        Tropical Ceylon
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div
                    className={`hidden md:flex gap-12 text-base font-semibold ${transparent ? "text-white" : "text-gray-700"
                        }`}
                >
                    <Link href="/" className="hover:opacity-80 transition">
                        Home
                    </Link>

                    <Link href="/destinations" className="hover:opacity-80 transition">
                        Destinations
                    </Link>

                    <Link href="/tours" className="hover:opacity-80 transition">
                        Tours
                    </Link>

                    <Link href="/hotels" className="hover:opacity-80 transition">
                        Hotels
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden text-2xl ${transparent ? "text-white" : "text-gray-700"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-700">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link>
                        <Link href="/tours" onClick={() => setMenuOpen(false)}>Tours</Link>
                        <Link href="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}