import { iconMinimize } from "@/public/icons/icon";
import { useState } from "react";

export default function Suburbs({
  selectedSuburbs,
  setSelectedSuburbs,
}: {
  selectedSuburbs: string[];
  setSelectedSuburbs: (suburbs: string[]) => void;
}) {
  const [suburbsExpanded, setSuburbsExpanded] = useState(true);

  return (
    <div className="flex flex-col gap-3 p-4 items-center justify-between border border-gray-200 rounded-xl">
      <div className="flex flex-row w-full items-center justify-between">
        <p className="text-black font-general text-xl font-semibold">Suburb</p>
        <button
          className="cursor-pointer"
          onClick={() => setSuburbsExpanded((prev) => !prev)}
        >
          <span dangerouslySetInnerHTML={{ __html: iconMinimize }} />
        </button>
      </div>
      {suburbsExpanded && (
        <div className="flex flex-col gap-5 w-full">
          <hr className="border-gray-300 w-full" />
          <div className="flex flex-col gap-3">
            {[
              "Eshelby Drive, Cranbrook",
              "2-6 Eshelby Drive, Cranbrook",
              "59/3 Eshelby Drive, Cranbrook",
            ].map((suburb) => {
              const id = `suburb-${suburb.replace(/[^a-z0-9]+/gi, "-")}`;
              const checked = selectedSuburbs.includes(suburb);

              return (
                <div key={suburb} className="flex items-center gap-2">
                  <input
                    id={id}
                    type="checkbox"
                    className="accent-theme-color"
                    checked={checked}
                    onChange={(e) => {
                      setSelectedSuburbs(
                        e.target.checked
                          ? [...selectedSuburbs, suburb]
                          : selectedSuburbs.filter((s) => s !== suburb)
                      );
                    }}
                  />
                  <label htmlFor={id} className="font-general text-black">
                    {suburb}
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
