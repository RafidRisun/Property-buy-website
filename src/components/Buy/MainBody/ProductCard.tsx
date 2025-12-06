import { iconArea } from '@/public/icons/icon';
import { Property } from '@/src/app/types/Property';
import Image from 'next/image';

export default function ProductCard({ property }: { property: Property }) {
	return (
		<div
			key={property.id}
			className="flex flex-col gap-2 w-full col-span-1 cursor-pointer"
			onClick={() => {}}
		>
			<div className="relative w-full h-60 rounded-xl overflow-hidden">
				<Image
					src={property.imageUrl}
					alt={property.name}
					fill
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex flex-row gap-6 items-center">
					<div className="flex flex-row gap-1 items-center">
						<Image
							src="/images/bed.png"
							alt="Bedrooms"
							width={30}
							height={30}
							className="object-contain"
						/>
						<span className="text-sm font-general text-gray-400">
							Beds- {property.bedrooms}
						</span>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<Image
							src="/images/bath.png"
							alt="Bathrooms"
							width={30}
							height={30}
							className="object-contain"
						/>
						<span className="text-sm font-general text-gray-400">
							Baths- {property.bathrooms}
						</span>
					</div>
					<div className="flex flex-row gap-1 items-center">
						<span dangerouslySetInnerHTML={{ __html: iconArea }} />
						<span className="text-sm font-general text-gray-400">
							{property.area}sft
						</span>
					</div>
				</div>
				<h3 className="text-lg font-general font-medium text-black">
					{property.name}
				</h3>
				<div className="flex flex-row gap-2 items-center">
					<div className="flex flex-row">
						<p className="text-md font-general font-medium text-black">
							${property.price}
						</p>
						<span className="text-sm font-general text-gray-500">/week</span>
					</div>
					<span className="text-md font-general text-gray-500">•</span>
					<p className="text-md font-general text-gray-500">
						{property.address}
					</p>
				</div>
			</div>
		</div>
	);
}
