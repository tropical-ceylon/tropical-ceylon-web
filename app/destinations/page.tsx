import { client } from "../../lib/sanity";
import DestinationCard from "../components/DestinationCard";

//Fetch destinations
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

//Fetch page content (CMS)
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
    return <div className="p-10 text-center">No destinations found</div>;
  }

  return (
    <div className="pt-28 px-6 md:px-12 pb-12">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          {pageContent?.title || "Destinations"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {pageContent?.subtitle || "Explore amazing destinations"}
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item: any) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

    </div>

  );
}