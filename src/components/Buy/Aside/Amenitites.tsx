import { iconMinimize } from "@/public/icons/icon";
import { useState } from "react";

export default function Amenities({
  selectedAmenities,
  setSelectedAmenities,
}: {
  selectedAmenities: string[];
  setSelectedAmenities: (amenities: string[]) => void;
}) {
  const [amenitiesExpanded, setAmenitiesExpanded] = useState(true);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col gap-3 p-4 items-center justify-between border border-gray-200 rounded-xl">
      <div className="flex flex-row w-full items-center justify-between">
        <p className="text-black font-general text-xl font-semibold">
          Amenities
        </p>
        <button
          className="cursor-pointer"
          onClick={() => setAmenitiesExpanded((prev) => !prev)}
        >
          <span dangerouslySetInnerHTML={{ __html: iconMinimize }} />
        </button>
      </div>
      {amenitiesExpanded && (
        <div className="flex flex-col gap-5 w-full">
          <hr className="border-gray-300 w-full" />
          <div className="flex flex-col gap-3">
            {[
              "Pet-Friendly",
              "Gym",
              "Pool",
              "Parking",
              "Wi-Fi",
              "Air Conditioning",
            ]
              .slice(0, showMore ? undefined : 4)
              .map((amenity) => {
                const id = `amenity-${amenity
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`;
                const checked = selectedAmenities.includes(amenity);
                return (
                  <div key={amenity} className="flex items-center gap-2">
                    <input
                      id={id}
                      type="checkbox"
                      className="accent-theme-color"
                      checked={checked}
                      onChange={(e) => {
                        setSelectedAmenities(
                          e.target.checked
                            ? [...selectedAmenities, amenity]
                            : selectedAmenities.filter((s) => s !== amenity)
                        );
                      }}
                    />
                    <label htmlFor={id} className="font-general text-black">
                      {amenity}
                    </label>
                  </div>
                );
              })}
          </div>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-theme-color font-general font-normal underline self-start text-xs cursor-pointer"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
