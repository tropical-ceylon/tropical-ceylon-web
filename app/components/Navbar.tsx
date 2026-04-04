"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-green-700">
                    Tropical Ceylon 🌴
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
                    <Link href="/" className="hover:text-green-600">Home</Link>
                    <Link href="/destinations" className="hover:text-green-600">Destinations</Link>
                    <Link href="/tours" className="hover:text-green-600">Tours</Link>
                    <Link href="/hotels" className="hover:text-green-600">Hotels</Link>

                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                        Explore →
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 text-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/destinations">Destinations</Link>
                    <Link href="/tours">Tours</Link>
                    <Link href="/hotels">Hotels</Link>

                    <button className="bg-green-600 text-white px-4 py-2 rounded-full">
                        Explore →
                    </button>
                </div>
            )}
        </nav>
    );
}