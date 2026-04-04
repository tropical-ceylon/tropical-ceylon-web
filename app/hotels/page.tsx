import DestinationCard from "../components/DestinationCard";

export default function Hotels() {
  const hotels = [
    {
      title: "Jetwing Blue",
      description: "Luxury beachfront hotel in Negombo.",
      image: "/hotel1.jpg",
    },
    {
      title: "Heritance Kandalama",
      description: "Eco-luxury hotel with Sigiriya views.",
      image: "/hotel2.jpg",
    },
    {
      title: "Cape Weligama",
      description: "Cliff-top resort with ocean views.",
      image: "/hotel3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Partner Hotels
        </h1>
        <p className="text-gray-500 mt-2">
          Stay at the best hotels across Sri Lanka.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((item, index) => (
          <DestinationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}