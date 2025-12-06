'use client';
import {
	iconArea,
	iconDownArrow,
	iconLeftArrow,
	iconResetFilter,
	iconRightArrow,
} from '@/public/icons/icon';
import Amenities from '@/src/components/Buy/Aside/Amenitites';
import BudgetRange from '@/src/components/Buy/Aside/BudgetRange';
import PropertyType from '@/src/components/Buy/Aside/PropertyType';
import Suburbs from '@/src/components/Buy/Aside/Suburbs';
import SortBy from '@/src/components/Buy/MainBody/SortBy';
import Image from 'next/image';
import { useState } from 'react';
import { Property } from '../../types/Property';
import ProductCard from '@/src/components/Buy/MainBody/ProductCard';
import Pagination from '@/src/components/Buy/MainBody/Pagination';
import EmailBanner from '@/src/components/Buy/MainBody/EmailBanner';
import Services from '@/src/components/Buy/MainBody/Services';
import Reviews from '@/src/components/Buy/MainBody/Reviews';

export default function Buy() {
	const [budgetRange, setBudgetRange] = useState<[number, number]>([
		30000, 670000,
	]);
	const [selectedSuburbs, setSelectedSuburbs] = useState<string[]>([]);
	const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
		[]
	);
	const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
	const [results, setResults] = useState(0);

	const resetFilter = () => {
		setBudgetRange([30000, 670000]);
		setSelectedSuburbs([]);
		setSelectedPropertyTypes([]);
		setSelectedAmenities([]);
	};

	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 6;
	const totalPages = Math.ceil(properties.length / productsPerPage);
	const paginatedProperties = properties.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage
	);

	return (
		<div className="w-full min-h-screen flex flex-col gap-20 py-10">
			<div className="grid grid-cols-12 w-full gap-6  lg:px-30 xl:px-40">
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
				<div className=" col-span-9 flex flex-col gap-4">
					<SortBy results={results} />
					<div className="w-full grid grid-cols-2 gap-4">
						{paginatedProperties.map(property => (
							<ProductCard key={property.id} property={property} />
						))}
					</div>
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
					/>
				</div>
			</div>
			<EmailBanner />
			<Services />
			<Reviews />
		</div>
	);
}

const properties: Property[] = [
	{
		id: 1,
		name: 'Modern Family Home',
		price: 450,
		bedrooms: 4,
		bathrooms: 3,
		area: 2500,
		address: '123 Main St, Springfield',
		imageUrl: '/images/property1.png',
	},
	{
		id: 2,
		name: 'Downtown Apartment',
		price: 300,
		bedrooms: 2,
		bathrooms: 2,
		area: 1200,
		address: '456 Elm St, Metropolis',
		imageUrl: '/images/property2.png',
	},
	{
		id: 3,
		name: 'Luxury Condo',
		price: 800,
		bedrooms: 3,
		bathrooms: 2,
		area: 1800,
		address: '789 Oak Ave, Gotham',
		imageUrl: '/images/property3.png',
	},
	{
		id: 4,
		name: 'Cozy Cottage',
		price: 250,
		bedrooms: 2,
		bathrooms: 1,
		area: 900,
		address: '321 Maple Rd, Smallville',
		imageUrl: '/images/property4.png',
	},
	{
		id: 5,
		name: 'Suburban House',
		price: 600,
		bedrooms: 5,
		bathrooms: 4,
		area: 3200,
		address: '654 Pine St, Star City',
		imageUrl: '/images/property5.png',
	},
	{
		id: 6,
		name: 'Beachfront Villa',
		price: 1200,
		bedrooms: 6,
		bathrooms: 5,
		area: 5000,
		address: '987 Ocean Dr, Coastline',
		imageUrl: '/images/property6.png',
	},
	{
		id: 7,
		name: 'Urban Loft',
		price: 550,
		bedrooms: 2,
		bathrooms: 2,
		area: 1400,
		address: '159 Cedar Ave, Central City',
		imageUrl: '/images/property1.png',
	},
	{
		id: 8,
		name: 'Country Estate',
		price: 950,
		bedrooms: 7,
		bathrooms: 6,
		area: 7000,
		address: '753 Willow Ln, Riverdale',
		imageUrl: '/images/property5.png',
	},
	{
		id: 9,
		name: 'Penthouse Suite',
		price: 1500,
		bedrooms: 4,
		bathrooms: 4,
		area: 3500,
		address: '852 Skyline Blvd, Metropolis',
		imageUrl: '/images/property3.png',
	},
	{
		id: 10,
		name: 'Mountain Cabin',
		price: 400,
		bedrooms: 3,
		bathrooms: 2,
		area: 1600,
		address: '951 Summit Rd, Hilltown',
		imageUrl: '/images/property6.png',
	},
	{
		id: 11,
		name: 'Studio Flat',
		price: 200,
		bedrooms: 1,
		bathrooms: 1,
		area: 600,
		address: '357 Birch St, Downtown',
		imageUrl: '/images/property2.png',
	},
	{
		id: 12,
		name: 'Family Bungalow',
		price: 500,
		bedrooms: 4,
		bathrooms: 3,
		area: 2200,
		address: '246 Spruce Ave, Suburbia',
		imageUrl: '/images/property4.png',
	},
];
