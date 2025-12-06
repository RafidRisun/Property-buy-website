import { iconStarEmpty, iconStarFull } from "@/public/icons/icon";
import Image from "next/image";

interface Review {
  imageUrl: string;
  name: string;
  designation: string;
  tags: string[];
  review: string;
  earned: string;
  location: string;
  rating: number;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-row gap-4 bg-white rounded-3xl mx-60 p-4">
      <div className="w-2/5 relative rounded-2xl overflow-hidden aspect-[4/3]">
        <Image
          src={review.imageUrl}
          alt="Reviewer Image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="flex-1 h-full flex flex-col gap-2">
        <div className="flex flex-row gap-4">
          <div className="relative rounded-full w-12 h-12">
            <Image
              src={review.imageUrl}
              alt="Reviewer Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-clash font-semibold text-md text-black">
              {review.name}
            </h2>
            <p className="font-general text-gray-600 text-xs">
              {review.designation}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {review.tags.map((tag, index) => (
            <div
              key={index}
              className="px-2 py-1 border border-gray-300 rounded-full text-xs text-black"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="font-silka text-black text-lg py-8">{review.review}</p>
        <div className="flex flex-col">
          <span className="font-clash-bold text-black text-3xl">
            {review.earned}
          </span>
          <span className="font-silka text-xl text-black">
            {review.location}
          </span>
        </div>
      </div>
      <div className="flex items-start p-4 gap-1 h-full">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            dangerouslySetInnerHTML={{
              __html: i < review.rating ? iconStarFull : iconStarEmpty,
            }}
          />
        ))}
      </div>
    </div>
  );
}
