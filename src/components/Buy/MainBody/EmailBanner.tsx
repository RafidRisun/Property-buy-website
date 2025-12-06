export default function EmailBanner() {
	return (
		<div className="w-full bg-[url('/images/emailBannerBackground.png')] bg-cover bg-center flex flex-col gap-6 items-center justify-center p-20">
			<div className="flex py-2 px-3 bg-[#1B1626] rounded-full font-silka text-white text-sm">
				BUILD FOR YOU
			</div>
			<div className="flex flex-col w-145 gap-6 items-center justify-center">
				<h1 className="font-clash-bold text-white/90 backdrop-blur-sm text-6xl text-center">
					Built for Creators. <br />
					Powered for Profit
				</h1>
				<p className="font-general text-white text-center text-md">
					Create and sell courses, consulting services, and communities - with
					Zero marketing cost and a built-in sales network.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="flex flex-row items-center justify-between bg-[#3B3B4B] p-1 rounded-full w-120">
					<input
						type="email"
						placeholder="Enter your email"
						className="flex-grow bg-transparent outline-none border-none text-white px-4 m-2 placeholder-gray-400"
					/>
					<button className="bg-gradient-to-r from-[#693FFF] to-[#C02EE5] text-white px-6 py-2 rounded-full ml-4 hover:from-[#8260FF] hover:to-[#D746FB] transition-colors cursor-pointer flex flex-col items-center justify-center">
						<span className="text-sm font-general text-white">
							Start for Free
						</span>
						<span className="text-xs font-general text-white">
							No credit card required
						</span>
					</button>
				</div>
				<p className="text-xs font-general text-gray-200">
					By proceeding you agree to our Platform terms & Privacy Notice
				</p>
			</div>
			<div className="flex flex-col pb-7 mt-8 bg-black/10 backdrop-blur-md rounded-3xl border border-gray-300/40 max-w-250">
				<div className="flex flex-col gap-6 m-4">
					<div className="flex flex-row items-center justify-between">
						<p className="text-white font-general text-lg">
							Sell from day one - even with zero audience
						</p>
						<div className="flex py-2 px-3 border border-gray-300/40 rounded-full font-silka text-white text-xs">
							Open calculator
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 mt-4">
						<div className="flex flex-col w-60 items-start gap-2 px-3 py-4 border border-gray-300/20 rounded-lg">
							<p className="font-silka text-xs text-white">
								CO-SELLERS IN NETWORDK
							</p>
							<h1 className="font-blauer-semibold text-xl text-white">
								21,500+
							</h1>
							<p className="font-silka text-xs text-white">
								People who can co-promote
							</p>
						</div>
						<div className="flex flex-col w-60 items-start gap-2 px-3 py-4 border border-gray-300/20 rounded-lg">
							<p className="font-silka text-xs text-white">
								EXPECTED BUYERS / MONTH
							</p>
							<h1 className="font-blauer-semibold text-xl text-white">86</h1>
							<p className="font-silka text-xs text-white">
								With zero personal audience
							</p>
						</div>
						<div className="flex flex-col w-60 items-start gap-2 px-3 py-4 border border-gray-300/20 rounded-lg">
							<p className="font-silka text-xs text-white">
								EST. MRR AT US$9/MO
							</p>
							<h1 className="font-blauer-semibold text-xl text-white">
								US$774
							</h1>
							<p className="font-silka text-xs text-white">
								From membership sales
							</p>
						</div>
						<div className="flex flex-col w-60 items-start gap-2 px-3 py-4 border border-gray-300/20 rounded-lg">
							<p className="font-silka text-xs text-white">
								EARN W/O A PRODUCT
							</p>
							<h1 className="font-blauer-semibold text-xl text-white">
								US$300
							</h1>
							<p className="font-silka text-xs text-white">
								Just by co-selling
							</p>
						</div>
					</div>
				</div>
				{/* Carousel */}
				<div className="w-full h-10 bg-[#FFF3D8] flex items-center overflow-hidden mt-4">
					<div className="scroll whitespace-nowrap mx-8">
						<div className="infinite-scroll flex gap-8">
							<p className="text-sm font-silka font-medium text-gray-700 mb-0 leading-10">
								Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
								convert clients inside the platform so you can sell from day one
								without paying for ads.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
