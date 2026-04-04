import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">

        <Image
          src="/hero.jpg"
          alt="Sri Lanka"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

          <h1 className="text-3xl md:text-5xl font-bold">
            Discover the Beauty of Sri Lanka
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Explore stunning destinations, unforgettable tours, and luxury stays.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap justify-center">

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
      </div>

    </div>
  );
}