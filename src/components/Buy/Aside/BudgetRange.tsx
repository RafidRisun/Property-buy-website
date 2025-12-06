import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { iconMinimize } from '@/public/icons/icon';
import { useState } from 'react';

export default function BudgetRange({
	budgetRange,
	setBudgetRange,
}: {
	budgetRange: [number, number];
	setBudgetRange: (range: [number, number]) => void;
}) {
	const [budgetExpanded, setBudgetExpanded] = useState(true);

	return (
		<div className="flex flex-col gap-3 p-4 items-center justify-between border border-gray-200 rounded-xl">
			<div className="flex flex-row w-full items-center justify-between">
				<p className="text-black font-general text-xl font-semibold">
					Rent Budget
				</p>
				<button
					className="cursor-pointer"
					onClick={() => setBudgetExpanded(prev => !prev)}
				>
					<span dangerouslySetInnerHTML={{ __html: iconMinimize }} />
				</button>
			</div>
			{budgetExpanded && (
				<div className="flex flex-col gap-5 w-full">
					<hr className="border-gray-300 w-full" />
					<RangeSlider
						max={1000000}
						min={1}
						step={100}
						value={budgetRange}
						onInput={value => setBudgetRange(value)}
					/>
					<div className="flex flex-row items-center justify-between gap-4">
						<div className="w-full relative">
							<input
								type="number"
								className="w-full bg-gray-100 rounded-lg px-2 pb-2 pt-6 font-general text-black focus:outline-none"
								value={budgetRange[0]}
								onChange={e =>
									setBudgetRange([Number(e.target.value), budgetRange[1]])
								}
							/>
							<label className="absolute top-2 left-2 text-xs text-gray-500">
								Minimum
							</label>
						</div>
						<div className="w-full relative">
							<input
								type="number"
								className="w-full bg-gray-100 rounded-lg px-2 pb-2 pt-6 font-general text-black focus:outline-none"
								value={budgetRange[1]}
								onChange={e =>
									setBudgetRange([budgetRange[0], Number(e.target.value)])
								}
							/>
							<label className="absolute top-2 left-2 text-xs text-gray-500">
								Maximum
							</label>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
