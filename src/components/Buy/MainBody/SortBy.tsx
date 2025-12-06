import { iconDownArrow } from '@/public/icons/icon';

export default function SortBy({ results }: { results: number }) {
	return (
		<div className="flex flex-row w-full p-2 items-center justify-between border border-gray-200 rounded-xl">
			<div className="flex flex-row items-center gap-2">
				<p className="text-black font-general text-lg font-medium ml-2">
					Property
				</p>
				<p className="text-gray-600 font-general text-lg font-medium ml-2">
					--- Showing results-({results})
				</p>
			</div>
			<button className="flex flex-row items-center gap-2 text-gray-800 font-general font-medium px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
				<div className="flex flex-col items-start ">
					<span className="text-sm text-gray-600">Sort By</span>
					<span>Reset Filter</span>
				</div>
				<span dangerouslySetInnerHTML={{ __html: iconDownArrow }} />
			</button>
		</div>
	);
}
