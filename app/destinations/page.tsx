import { client } from "../../lib/sanity";
import DestinationCard from "../components/DestinationCard";

// Fetch destinations
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

// Fetch CMS content
async function getPageContent() {
  return await client.fetch(`
    *[_type == "pageContent" && page == "destinations"][0]{
      title,
      subtitle
    }
  `);
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  const pageContent = await getPageContent();

  if (!destinations || destinations.length === 0) {
    return <div className="pt-28 p-10 text-center">No destinations found</div>;
  }

  return (
    <div className="pt-32 px-6 md:px-12 pb-16 bg-gray-50">

      {/* HEADER */}
      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-4">
          {pageContent?.title || "Destinations"}
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          {pageContent?.subtitle || "Explore amazing destinations"}
        </p>

      </div>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {destinations.map((item: any) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
}