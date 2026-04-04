import { client } from "../../lib/sanity";
import DestinationCard from "../components/DestinationCard";

async function getDestinations() {
  return await client.fetch(`
    *[_type == "destination"]{
      _id,
      title,
      description,
      image{
        asset->{
          url
        }
      }
    }
  `);
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  if (!destinations || destinations.length === 0) {
    return <div className="p-10 text-center">No destinations found</div>;
  }

  return (
    <div className="px-6 md:px-12 py-12">

      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Destinations</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover the best destinations in Sri Lanka with our curated experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item: any) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
}