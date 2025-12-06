'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

export default function Reviews({ deviceType }: { deviceType?: string } = {}) {
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

			<div className="w-full">
				<Carousel
					swipeable={true}
					draggable={true}
					showDots={false}
					arrows={false}
					responsive={responsive}
					ssr={false}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={3000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container px-4"
					removeArrowOnDeviceType={['tablet', 'mobile']}
					deviceType={deviceType}
					dotListClass="custom-dot-list-style mt-4"
					itemClass="carousel-item-padding-40-px"
				>
					{reviews.map(review => (
						<div
							key={review.id}
							className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col mx-4"
						>
							<div className="flex items-center gap-4 mb-4">
								<Image
									src={review.imageUrl}
									alt={review.name}
									width={60}
									height={60}
									className="rounded-full"
								/>
								<div>
									<h3 className="font-blauer-semibold text-lg text-black">
										{review.name}
									</h3>
									<p className="font-general text-gray-600 text-sm">
										{review.designation}
									</p>
								</div>
							</div>
							<p className="font-general text-gray-800 text-sm flex-grow">
								{review.review}
							</p>
							<div className="flex flex-row gap-2 flex-wrap mt-4">
								{review.tags.map((tag, i) => (
									<span
										key={i}
										className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="flex flex-row justify-between text-sm text-gray-600 mt-4">
								<span>Earned: {review.earned}</span>
								<span>Location: {review.location}</span>
							</div>
						</div>
					))}
				</Carousel>
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
