import { iconLeftArrow, iconRightArrow } from '@/public/icons/icon';

export default function Pagination({
	currentPage,
	setCurrentPage,
	totalPages,
}: {
	currentPage: number;
	setCurrentPage: (type: number) => void;
	totalPages: number;
}) {
	return (
		<div className="flex w-full justify-between mt-4 gap-2">
			<button
				onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
				disabled={currentPage === 1}
				className="px-3 py-1 rounded-lg border border-gray-300 flex flex-row gap-2 items-center font-general text-gray-600 cursor-pointer"
			>
				<span dangerouslySetInnerHTML={{ __html: iconLeftArrow }} />
				Previous
			</button>
			<div className="flex flex-row gap-2">
				{[...Array(totalPages)].map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						className={`px-3 py-1 rounded-lg cursor-pointer ${
							currentPage === i + 1 ? 'bg-[#6c0443] text-white' : 'bg-gray-100'
						}`}
					>
						{i + 1}
					</button>
				))}
			</div>
			<button
				onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
				disabled={currentPage === totalPages}
				className="px-3 py-1 rounded-lg border border-gray-300 flex flex-row gap-2 items-center font-general text-gray-600 cursor-pointer"
			>
				Next
				<span dangerouslySetInnerHTML={{ __html: iconRightArrow }} />
			</button>
		</div>
	);
}
