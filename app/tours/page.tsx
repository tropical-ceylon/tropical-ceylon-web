import { client } from "../../lib/sanity";
import DestinationCard from "../components/DestinationCard";

//Fetch tours
async function getTours() {
  return await client.fetch(`
    *[_type == "tour"]{
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
    *[_type == "pageContent" && page == "tours"][0]{
      title,
      subtitle
    }
  `);
}

export default async function ToursPage() {
  const tours = await getTours();
  const pageContent = await getPageContent();

  if (!tours || tours.length === 0) {
    return <div className="p-10 text-center">No tours found</div>;
  }

  return (
    <div className="px-6 md:px-12 py-12">

      {/*CMS TITLE SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          {pageContent?.title || "Tours"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {pageContent?.subtitle || "Explore curated tours"}
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((item: any) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
}