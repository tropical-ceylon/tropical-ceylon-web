export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/sri-lanka.jpg"
          alt="Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Tropical Ceylon 🌴
        </h1>

        <p className="text-lg mb-6">
          We’re refreshing our travel experiences.
          New tours coming soon!
        </p>

        <button className="bg-white text-black px-6 py-2 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
}