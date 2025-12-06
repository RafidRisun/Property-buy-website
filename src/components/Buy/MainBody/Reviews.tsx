"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import { iconStarEmpty, iconStarFull } from "@/public/icons/icon";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="flex flex-col py-20 w-full items-center justify-center gap-10 bg-linear-to-t from-[#3C4C5A]/83 to-[#2A0019]">
      <div className="flex py-2 px-3 bg-linear-to-r from-[#FCC3FF] to-[#F75EFF] rounded-full font-silka font-semibold text-black text-sm">
        TESTIMONIALS
      </div>
      <div className="flex flex-col w-full max-w-6xl gap-6 items-center justify-center">
        <h1 className="font-clash-bold text-white text-5xl text-center">
          Trusted by Creators & Proven by Results.
        </h1>
        <p className="font-general text-white text-center text-lg">
          See how others grow with Growhubs — real stories, real success.
        </p>
      </div>

      <div className="w-full flex flex-row items-center justify-center">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          loop
          grabCursor={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          //modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="mySwiperSlide">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const reviews = [
  {
    id: 1,
    name: "John Doe",
    designation: "Content Creator",
    tags: ["Content Creator", "Youtuber", "Blogger"],
    review:
      "Growhubs transformed my content creation journey. The platform's tools and community support helped me scale my audience and monetize my work effectively.",
    earned: "$2M",
    location: "New York, USA",
    imageUrl: "/images/review.png",
    rating: 3,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Online Coach",
    tags: ["Coach", "Mentor"],
    review:
      "I never thought I could reach so many clients so quickly. Growhubs made it possible to expand my coaching business globally.",
    earned: "$1.2M",
    location: "London, UK",
    imageUrl: "/images/review.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    designation: "Podcaster & Author",
    tags: ["Podcaster", "Author"],
    review:
      "The built-in sales network is a game changer. My podcast subscriptions and book sales have skyrocketed since joining Growhubs.",
    earned: "$850K",
    location: "Madrid, Spain",
    imageUrl: "/images/review.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Patel",
    designation: "Community Builder",
    tags: ["Community", "Events"],
    review:
      "Growhubs gave me the tools to build a thriving community and host successful online events. The support is unmatched!",
    earned: "$600K",
    location: "Mumbai, India",
    imageUrl: "/images/review.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Liam Nguyen",
    designation: "E-learning Specialist",
    tags: ["E-learning", "Instructor"],
    review:
      "From course creation to marketing, everything is seamless. My student base doubled in just a few months!",
    earned: "$1M",
    location: "Sydney, Australia",
    imageUrl: "/images/review.png",
    rating: 5,
  },
];
