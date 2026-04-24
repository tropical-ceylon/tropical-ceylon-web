"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    // Scroll effect (only home)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        if (isHome) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    // Lock scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const transparent = isHome && !scrolled;

    const navStyle = transparent
        ? "bg-transparent"
        : "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200";

    const textStyle = transparent ? "text-white" : "text-gray-900";

    return (
        <>
            {/* NAVBAR */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navStyle}`}>
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LOGO + TEXT */}
                    <Link href="/" className="flex items-center gap-3">
                      <Image
  src="/logo.png"
  alt="logo"
  width={55}
  height={55}
  className="w-[55px] h-[55px] object-contain"
/>
                        <h1 className={`text-2xl font-serif tracking-wide ${textStyle}`}>
                            Tropical Ceylon
                        </h1>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className={`hidden md:flex gap-10 ${textStyle}`}>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Destinations", path: "/destinations" },
                            { name: "Tours", path: "/tours" },
                            { name: "Hotels", path: "/hotels" },
                        ].map((link) => {
                            const isActive = pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative text-lg font-serif transition ${
                                        isActive ? "font-semibold" : "font-normal"
                                    } hover:opacity-80`}
                                >
                                    {link.name}

                                    {/* UNDERLINE */}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${
                                            isActive ? "w-full" : "w-0"
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className={`md:hidden text-2xl ${textStyle}`}
                        onClick={() => setMenuOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="fixed inset-0 z-[9999]">

                    {/* Background */}
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                    {/* Content */}
                    <div className="relative flex flex-col items-center justify-center h-full text-white">

                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-3xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Links */}
                        <div className="flex flex-col gap-10 text-2xl font-serif text-center">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Destinations", path: "/destinations" },
                                { name: "Tours", path: "/tours" },
                                { name: "Hotels", path: "/hotels" },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-green-400 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}