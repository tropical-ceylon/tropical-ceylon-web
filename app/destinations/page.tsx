import DestinationCard from "../components/DestinationCard";

export default function Destinations() {
  const destinations = [
    {
      title: "Sigiriya",
      description: "Ancient rock fortress with stunning views.",
      image: "/sigiriya.jpg",
    },
    {
      title: "Ella",
      description: "Beautiful hills and scenic train rides.",
      image: "/ella.jpg",
    },
    {
      title: "Mirissa",
      description: "Relax on golden beaches and enjoy the sea.",
      image: "/mirissa.jpg",
    },
    {
      title: "Nuwara Eliya",
      description: "Cool climate with tea plantations.",
      image: "/nuwaraeliya.jpg",
    },
    {
      title: "Colombo",
      description: "The vibrant capital city of Sri Lanka.",
      image: "/colombo.jpg",
    },
    {
      title: "Galle",
      description: "Historic coastal city with Dutch fort.",
      image: "/galle.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Destinations in Sri Lanka
        </h1>
        <p className="text-gray-500 mt-2">
          Discover the most beautiful destinations across the island.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((item, index) => (
          <DestinationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}