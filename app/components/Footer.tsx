import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Tropical Ceylon 🌴</h2>
                    <p className="text-gray-400 text-sm">
                        Discover the beauty of Sri Lanka with unforgettable tours,
                        destinations, and stays.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">

                        <li>
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/destinations" className="hover:text-white transition">
                                Destinations
                            </Link>
                        </li>

                        <li>
                            <Link href="/tours" className="hover:text-white transition">
                                Tours
                            </Link>
                        </li>

                        <li>
                            <Link href="/hotels" className="hover:text-white transition">
                                Hotels
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3">Contact</h3>

                    <p className="text-gray-400 text-sm">
                        Email:{" "}
                        <a
                            href="mailto:contact@tropicalceylontravels.com"
                            className="hover:text-white"
                        >
                            contact@tropicalceylontravels.com
                        </a>
                    </p>

                    <p className="text-gray-400 text-sm">
                        Phone:{" "}
                        <a
                            href="tel:+94771234567"
                            className="hover:text-white"
                        >
                            +94 77 123 4567
                        </a>
                    </p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 text-sm pb-4">
                © {new Date().getFullYear()} Tropical Ceylon. All rights reserved.
            </div>
        </footer>
    );
}