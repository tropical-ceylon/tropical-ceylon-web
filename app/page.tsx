import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";
import { urlFor } from "../lib/image";

// Fetch cover data
async function getCover() {
  return await client.fetch(`
    *[_type == "cover"][0]{
      title,
      subtitle,
      image
    }
  `);
}

export default async function Home() {
  const cover = await getCover();

  return (
    <div>

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">

        {cover?.image && (
          <Image
            src={urlFor(cover.image)
              .width(2000)          // 🔥 higher resolution
              .height(1200)
              .fit("crop")
              .auto("format")
              .quality(90)          // 🔥 better quality
              .url()}
            alt={cover?.title || "Cover"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

          <h1 className="text-3xl md:text-5xl font-serif font-semibold max-w-3xl">
            {cover?.title || "Discover the Beauty of Sri Lanka"}
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-200">
            {cover?.subtitle}
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/destinations">
              <button className="bg-green-600 px-6 py-3 rounded-full">
                Explore Destinations
              </button>
            </Link>

            <Link href="/tours">
              <button className="bg-white text-black px-6 py-3 rounded-full">
                View Tours
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          About Us
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Tropical Ceylon is dedicated to showcasing the beauty of Sri Lanka through unforgettable travel experiences.
        </p>
      </section>

      {/* DIRECTOR */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/director.jpg"
              alt="Director"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Message from the Director
            </h2>

            <p className="text-gray-600 mb-4">
              Our mission is to provide authentic and memorable travel experiences.
            </p>

            <h3 className="font-medium text-gray-800">
              — Director, Tropical Ceylon
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
}