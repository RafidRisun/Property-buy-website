import { iconMinimize } from "@/public/icons/icon";
import { useState } from "react";

export default function PropertyType({
  selectedPropertyTypes,
  setSelectedPropertyTypes,
}: {
  selectedPropertyTypes: string[];
  setSelectedPropertyTypes: (types: string[]) => void;
}) {
  const [propertyTypeExpanded, setPropertyTypeExpanded] = useState(true);
  return (
    <div className="flex flex-col gap-3 p-4 items-center justify-between border border-gray-200 rounded-xl">
      <div className="flex flex-row w-full items-center justify-between">
        <p className="text-black font-general text-xl font-semibold">
          Property Type
        </p>
        <button
          className="cursor-pointer"
          onClick={() => setPropertyTypeExpanded((prev) => !prev)}
        >
          <span dangerouslySetInnerHTML={{ __html: iconMinimize }} />
        </button>
      </div>
      {propertyTypeExpanded && (
        <div className="flex flex-col gap-5 w-full">
          <hr className="border-gray-300 w-full" />
          <div className="flex flex-col gap-3">
            {[
              "House",
              "Apartment",
              "Townhouse",
              "Villa",
              "Studio",
              "Duplex",
            ].map((propertyType) => {
              const id = `pt-${propertyType.toLowerCase()}`;
              const checked = selectedPropertyTypes.includes(propertyType);
              return (
                <div key={propertyType} className="flex items-center gap-2">
                  <input
                    id={id}
                    type="checkbox"
                    className="accent-theme-color"
                    checked={checked}
                    onChange={(e) => {
                      setSelectedPropertyTypes(
                        e.target.checked
                          ? [...selectedPropertyTypes, propertyType]
                          : selectedPropertyTypes.filter(
                              (s) => s !== propertyType
                            )
                      );
                    }}
                  />
                  <label htmlFor={id} className="font-general text-black">
                    {propertyType}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
