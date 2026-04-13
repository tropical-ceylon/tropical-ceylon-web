import Image from "next/image";
import { urlFor } from "../../lib/image";


type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
};

type CardItem = {
  title: string;
  description: string;
  location?: string;
  image?: SanityImage;
};

export default function Card({ item }: { item: CardItem }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        {item.image ? (
          <Image
            src={urlFor(item.image)
              .width(600)
              .height(400)
              .fit("crop")
              .auto("format")
              .quality(70)
              .url()}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h2 className="text-2xl font-serif text-gray-900 mb-1 leading-snug">
          {item.title}
        </h2>

        {/* 📍 Location */}
        {item.location && (
          <p className="text-sm text-gray-400 mb-2 flex items-center gap-1">
            📍 {item.location}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description || "Discover this amazing destination in Sri Lanka"}
        </p>

      </div>
    </div>
  );
}