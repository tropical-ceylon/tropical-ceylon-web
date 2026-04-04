import DestinationCard from "../components/DestinationCard";

export default function Tours() {
  const tours = [
    {
      title: "Cultural Triangle Tour",
      description: "Explore Sigiriya, Dambulla, and Polonnaruwa.",
      image: "/sigiriya.jpg",
    },
    {
      title: "Hill Country Tour",
      description: "Visit Ella, Nuwara Eliya, and scenic train routes.",
      image: "/ella.jpg",
    },
    {
      title: "Beach Tour",
      description: "Relax in Mirissa, Unawatuna, and Bentota.",
      image: "/mirissa.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Tour Packages
        </h1>
        <p className="text-gray-500 mt-2">
          Discover curated tours across Sri Lanka.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((item, index) => (
          <DestinationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}