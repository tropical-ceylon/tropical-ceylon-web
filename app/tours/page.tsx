import { client } from "../../lib/sanity";
import Card from "../components/Card";

export const dynamic = "force-dynamic";
// Fetch tours
async function getTours() {
  return await client.fetch(`
    *[_type == "tour"]{
      _id,
      title,
      description,
      image
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
    return <div className="pt-32 p-10 text-center">No tours found</div>;
  }

  return (
    <div className="pt-32 px-6 md:px-12 pb-16 bg-gray-50">

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-4">
          {pageContent?.title || "Tours"}
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          {pageContent?.subtitle || "Explore curated tours across Sri Lanka"}
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {tours.map((item: any) => (
          <Card key={item._id} item={item} />
        ))}
      </div>

    </div>
  );
}