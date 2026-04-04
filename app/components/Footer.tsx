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
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Tours</li>
                        <li>Hotels</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <p className="text-gray-400 text-sm">
                        Email: info@tropicalceylon.com
                    </p>
                    <p className="text-gray-400 text-sm">
                        Phone: +94 77 123 4567
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