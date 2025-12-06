'use client';

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';

export default function Reviews() {
	const swiperWrapperRef = useRef<HTMLDivElement>(null);

	function adjustMargin() {
		const screenWidth = window.innerWidth;
		if (swiperWrapperRef.current) {
			swiperWrapperRef.current.style.marginLeft =
				screenWidth <= 520
					? '0px'
					: screenWidth <= 650
					? '-50px'
					: screenWidth <= 800
					? '-100px'
					: '-150px';
		}
	}

	useEffect(() => {
		adjustMargin();
		window.addEventListener('resize', adjustMargin);
		return () => {
			window.removeEventListener('resize', adjustMargin);
		};
	}, []);

	return (
		<div className="flex flex-col w-full items-center justify-center gap-10 bg-linear-to-t from-[#3C4C5A]/83 to-[#2A0019] py-20">
			<div className="flex py-2 px-3 bg-gradient-to-r from-[#FCC3FF] to-[#F75EFF] rounded-full font-silka font-semibold text-black text-sm">
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
					// install Swiper modules
					modules={[Pagination]}
					grabCursor
					initialSlide={2}
					centeredSlides
					slidesPerView={'auto'}
					speed={800}
					slideToClickedSlide
					pagination={{ clickable: true }}
					className="w-full px-10"
					breakpoints={{
						320: { spaceBetween: 40 },
						650: { spaceBetween: 30 },
						1000: { spaceBetween: 20 },
					}}
				>
					{reviews.map(review => (
						<SwiperSlide key={review.id} className="">
							<div className="flex flex-row bg-white rounded-xl h-130 p-2">
								<div className="w-2/5 h-full relative rounded-lg overflow-hidden">
									<Image
										src={review.imageUrl}
										alt="Reviewer Image"
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex-1 h-full flex flex-col">
									<div className="flex flex-row items-center justify-between w-full px-4 py-2">
										<div className="flex flex-row gap-2">
											<div className="relative rounded-full w-16 h-16">
												<Image
													src={review.imageUrl}
													alt="Reviewer Image"
													fill
													className="object-cover rounded-full"
												/>
											</div>
											<div className="flex flex-col gap-2">
												<h2 className="font-clash-semibold text-xl">
													{review.name}
												</h2>
												<p className="font-general text-gray-600">
													{review.designation}
												</p>
											</div>
										</div>
										<span>Stars</span>
									</div>
								</div>
							</div>
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
		name: 'John Doe',
		designation: 'Content Creator',
		tags: ['Content Creator', 'Youtuber', 'Blogger'],
		review:
			"Growhubs transformed my content creation journey. The platform's tools and community support helped me scale my audience and monetize my work effectively.",
		earned: '$2M',
		location: 'New York, USA',
		imageUrl: '/images/review.png',
	},
	{
		id: 2,
		name: 'Jane Smith',
		designation: 'Online Coach',
		tags: ['Coach', 'Mentor'],
		review:
			'I never thought I could reach so many clients so quickly. Growhubs made it possible to expand my coaching business globally.',
		earned: '$1.2M',
		location: 'London, UK',
		imageUrl: '/images/review.png',
	},
	{
		id: 3,
		name: 'Carlos Rodriguez',
		designation: 'Podcaster & Author',
		tags: ['Podcaster', 'Author'],
		review:
			'The built-in sales network is a game changer. My podcast subscriptions and book sales have skyrocketed since joining Growhubs.',
		earned: '$850K',
		location: 'Madrid, Spain',
		imageUrl: '/images/review.png',
	},
	{
		id: 4,
		name: 'Priya Patel',
		designation: 'Community Builder',
		tags: ['Community', 'Events'],
		review:
			'Growhubs gave me the tools to build a thriving community and host successful online events. The support is unmatched!',
		earned: '$600K',
		location: 'Mumbai, India',
		imageUrl: '/images/review.png',
	},
	{
		id: 5,
		name: 'Liam Nguyen',
		designation: 'E-learning Specialist',
		tags: ['E-learning', 'Instructor'],
		review:
			'From course creation to marketing, everything is seamless. My student base doubled in just a few months!',
		earned: '$1M',
		location: 'Sydney, Australia',
		imageUrl: '/images/review.png',
	},
];
