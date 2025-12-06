'use client';
import {
	iconBrokerage,
	iconCoaching,
	iconCommunities,
	iconCourses,
	iconEvents,
	iconMerchandise,
	iconPodcast,
} from '@/public/icons/icon';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
	const courseIcon = iconCourses;
	const communityIcon = iconCommunities;
	const coachingIcon = iconCoaching;
	const merchandiseIcon = iconMerchandise;
	const podcastIcon = iconPodcast;
	const eventsIcon = iconEvents;
	const brokerageIcon = iconBrokerage;

	const [selectedServiceId, setSelectedServiceId] = useState<number>(
		services[0].id
	);

	return (
		<div className="flex flex-col gap-10 items-center justify-center">
			<div className="flex flex-col gap-6 bg-white items-center justify-center">
				<h2 className="font-silka text-lg text-gray-700">
					TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
				</h2>
				<div className="overflow-hidden whitespace-nowrap bg-gray-100 py-6 w-full relative">
					<div className="absolute left-0 top-0 h-full w-100 bg-gradient-to-r from-white to-transparent z-10"></div>
					<div className="absolute right-0 top-0 h-full w-100 bg-gradient-to-l from-white to-transparent z-10"></div>
					<div className="flex infinite-scroll gap-10 items-center">
						{/* 1st copy */}
						{[...clients, ...clients].map((client, index) => (
							<div key={index} className="mx-4 flex-shrink-0">
								<Image
									src={client.logo}
									alt={client.name}
									width={100}
									height={80}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full bg-linear-to-t from-[#F9C4FE]/0 via-[#F9C4FE]/50 to-[#F9C4FE]/0 flex flex-col gap-10 items-center justify-center mt-10">
				<div className="flex py-2 px-3 bg-gradient-to-r from-[#FCC3FF] to-[#F75EFF] rounded-full font-silka font-semibold text-black text-sm">
					DIVERSIFY REVENUES STREAM
				</div>
				<div className="flex flex-col w-210 gap-6 items-center justify-center">
					<h1 className="font-clash-bold text-[#212121] text-6xl text-center">
						Maximise earnings with limitless revenue streams.
					</h1>
					<p className="font-general text-[#212121] text-center text-xl">
						Create and sell courses, consulting services, and communities - with
						Zero marketing cost and a built-in sales network.
					</p>
				</div>
				<div className="flex flex-row gap-2 items-center justify-center p-1 bg-white rounded-full">
					{services.map(service => (
						<div
							key={service.id}
							className={`flex flex-row items-center justify-center gap-2 px-2 py-2 rounded-full cursor-pointer ${
								selectedServiceId === service.id
									? 'bg-linear-to-r from-[#5C0639] to-[#2A0019]'
									: ''
							}`}
						>
							<span dangerouslySetInnerHTML={{ __html: service.icon }} />
							<span
								className={`font-general font-semibold mr-2 ${
									selectedServiceId === service.id ? 'text-white' : 'text-black'
								} text-center`}
							>
								{service.name}
							</span>
						</div>
					))}
				</div>
				<div className="flex flex-row bg-linear-to-r from-[#4C002D] to-[#4C002D]/50 w-320  rounded-r-[100px] rounded-l-[300px] p-3">
					<div className="w-1/2 flex flex-col gap-6 pl-25 py-20">
						<h2 className="font-blauer-semibold text-4xl text-white">
							Courses
						</h2>
						<p className="font-silka text-white text-lg">
							Turn your knowledge into structured, sellable products. <br />
							<br /> Build online, drip, academic, or challenge-based courses
							with built-in tools for gamification, accountability, and
							engagement.
							<br />
							<br /> Every course is optimized to deliver value and generate
							recurring income.
						</p>
						<div>
							<button className="flex items-center justify-center bg-[#2A0019] px-4 py-2 rounded-full text-white font-general cursor-pointer">
								Learn more
							</button>
						</div>
					</div>
					<div className="relative w-1/2 h-130 rounded-r-[100px] rounded-l-[300px] overflow-hidden">
						<Image
							src="/images/meeting.png"
							alt="Services Illustration"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

const clients = [
	{ id: 1, name: 'Client A', logo: '/images/client1.png' },
	{ id: 2, name: 'Client B', logo: '/images/client2.png' },
	{ id: 3, name: 'Client C', logo: '/images/client3.png' },
	{ id: 4, name: 'Client D', logo: '/images/client4.png' },
	{ id: 5, name: 'Client E', logo: '/images/client5.png' },
	{ id: 6, name: 'Client F', logo: '/images/client6.png' },
	{ id: 7, name: 'Client G', logo: '/images/client7.png' },
];

const services = [
	{ id: 1, name: 'Courses', icon: iconCourses },
	{ id: 2, name: 'Communities', icon: iconCommunities },
	{ id: 3, name: 'Coaching & Consulting', icon: iconCoaching },
	{ id: 4, name: 'Merchandise', icon: iconMerchandise },
	{ id: 5, name: 'Podcasts', icon: iconPodcast },
	{ id: 6, name: 'Events', icon: iconEvents },
	{ id: 7, name: 'Brokerage', icon: iconBrokerage },
];
