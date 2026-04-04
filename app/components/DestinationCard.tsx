import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export default function DestinationCard({ item }: { item: CardItem }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">

      {/* Image (NO BORDER LOOK) */}
      {item.image?.asset?.url ? (
        <div className="relative w-full h-48">
          <Image
            src={item.image.asset.url}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}