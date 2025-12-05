"use client";
import { iconResetFilter } from "@/public/icons/icon";
import Amenities from "@/src/components/Buy/Aside/Amenitites";
import BudgetRange from "@/src/components/Buy/Aside/BudgetRange";
import PropertyType from "@/src/components/Buy/Aside/PropertyType";
import Suburbs from "@/src/components/Buy/Aside/Suburbs";
import { useState } from "react";

export default function Buy() {
  const [budgetRange, setBudgetRange] = useState<[number, number]>([
    30000, 670000,
  ]);
  const [selectedSuburbs, setSelectedSuburbs] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const resetFilter = () => {
    setBudgetRange([30000, 670000]);
    setSelectedSuburbs([]);
    setSelectedPropertyTypes([]);
    setSelectedAmenities([]);
  };

  return (
    <div className="w-full min-h-screen flex py-10">
      <div className="grid grid-cols-12 w-full gap-6">
        {/*sidebar*/}
        <aside className="col-span-3 gap-4 flex flex-col">
          {/*Reset*/}
          <div className="flex flex-row p-2 items-center justify-between border border-gray-200 rounded-xl">
            <p className="text-black font-general text-lg font-medium ml-2">
              Property Preferences
            </p>
            <button
              className="flex flex-row items-center gap-2 text-gray-800 font-general font-medium p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
              onClick={resetFilter}
            >
              <span>Reset Filter</span>
              <span dangerouslySetInnerHTML={{ __html: iconResetFilter }} />
            </button>
          </div>
          <BudgetRange
            budgetRange={budgetRange}
            setBudgetRange={setBudgetRange}
          />
          <Suburbs
            selectedSuburbs={selectedSuburbs}
            setSelectedSuburbs={setSelectedSuburbs}
          />
          <PropertyType
            selectedPropertyTypes={selectedPropertyTypes}
            setSelectedPropertyTypes={setSelectedPropertyTypes}
          />
          <Amenities
            selectedAmenities={selectedAmenities}
            setSelectedAmenities={setSelectedAmenities}
          />
        </aside>
        <div className=" col-span-9">{/* Property List */}</div>
      </div>
    </div>
  );
}
