import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image: string;
};

export default function DestinationCard({
    title,
    description,
    image,
}: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
            />

            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    {title}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                    {description}
                </p>

                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm">
                    Explore
                </button>
            </div>
        </div>
    );
}