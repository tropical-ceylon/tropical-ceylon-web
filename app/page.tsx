import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";

// ✅ Fetch cover data from Sanity
async function getCover() {
  return await client.fetch(`
    *[_type == "cover"][0]{
      title,
      subtitle,
      buttonText,
      image{
        asset->{
          url
        }
      }
    }
  `);
}

export default async function Home() {
  const cover = await getCover();

  return (
    <div>

      {/* ================= HERO / COVER SECTION ================= */}
      <section className="relative h-[90vh] w-full">

        {/* ✅ Cover Image */}
        {cover?.image?.asset?.url && (
          <Image
            src={cover.image.asset.url}
            alt={cover.title || "Cover Image"}
            fill
            priority
            sizes="100vw" // ✅ FIX warning
            className="object-cover"
          />
        )}

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ================= TEXT CONTENT ================= */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {cover?.title || "Discover the Beauty of Sri Lanka"}
          </h1>

          {/* Subtitle (SMALL DESCRIPTION FROM SANITY) */}
          <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-200">
            {cover?.subtitle ||
              "Explore stunning destinations, unforgettable tours, and luxury stays."}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">

            <Link href="/destinations">
              <button className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition">
                {cover?.buttonText || "Explore Destinations"}
              </button>
            </Link>

            <Link href="/tours">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
                View Tours
              </button>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}