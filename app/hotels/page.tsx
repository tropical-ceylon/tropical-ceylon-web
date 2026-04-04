import { client } from "../../lib/sanity";
import DestinationCard from "../components/DestinationCard";

// Fetch hotels
async function getHotels() {
  return await client.fetch(`
    *[_type == "hotel"]{
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

// 🔹 Fetch CMS content
async function getPageContent() {
  return await client.fetch(`
    *[_type == "pageContent" && page == "hotels"][0]{
      title,
      subtitle
    }
  `);
}

export default async function HotelsPage() {
  const hotels = await getHotels();
  const pageContent = await getPageContent();

  if (!hotels || hotels.length === 0) {
    return <div className="p-10 text-center">No hotels found</div>;
  }

  return (
    <div className="px-6 md:px-12 py-12">

      {/* CMS TITLE SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          {pageContent?.title || "Hotels"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {pageContent?.subtitle || "Find the best hotels"}
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((item: any) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
}