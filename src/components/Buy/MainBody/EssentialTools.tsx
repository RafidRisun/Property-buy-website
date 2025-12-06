"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import ReviewCard from "./ReviewCard";

export default function EssentialTools() {
  return (
    <div className="flex flex-col py-20 w-full items-center justify-center gap-10 bg-[#FDF6E8]">
      <div className="flex py-2 px-3 bg-linear-to-r from-[#BCB3A0] to-[#E0D8C9] rounded-full font-silka font-semibold text-black text-sm">
        ESSENTIAL TOOLS
      </div>
      <div className="flex flex-col w-120 max-w-6xl gap-6 items-center justify-center">
        <h1 className="font-clash-bold text-[#212121] text-5xl text-center">
          Essential Tools <br /> Zero Distractions
        </h1>
        <p className="font-general text-[#212121] text-center text-lg">
          Create diverse products on the platform and leverage our powerful
          tools to drive sales within and beyond GrowHubs.
        </p>
      </div>

      <div className="w-full flex flex-row items-center justify-center"></div>
    </div>
  );
}
