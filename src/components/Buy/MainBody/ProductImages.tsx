import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainSrc = images[activeIndex] ?? images[0];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
        <Image
          src={mainSrc}
          alt={`Product main`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`relative h-16 sm:h-16 aspect-video overflow-hidden rounded-lg border cursor-pointer ${
              i === activeIndex ? "border-theme-color" : "border-gray-300"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
