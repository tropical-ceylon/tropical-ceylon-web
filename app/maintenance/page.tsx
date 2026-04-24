import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">

      {/* Background Image */}
      <Image
        src="/sri-lanka.webp"
        alt="Sri Lanka"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Tropical Ceylon 🌴
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-200">
          We’re refreshing our travel experiences.  
          <br />
          New tours coming soon!
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>

        {/* Small label */}
        <p className="text-xs text-gray-400 mt-6">
          Website under maintenance
        </p>
      </div>
    </div>
  );
}