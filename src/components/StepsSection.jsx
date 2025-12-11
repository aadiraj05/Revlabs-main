import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
	{
		id: "strategic-growth",
		title: "Growth Strategy & GTM",
		description:
			"Market research, audience segmentation & go-to-market planning to accelerate your business growth with data-driven insights.",
		features: [
			"Market Research & Analysis",
			"Audience Segmentation",
			"Go-to-Market Planning",
			"Growth Strategy Development",
		],
		image:
			"GrowthStrategy.png",
		icon: (
			<svg
				className="w-8 h-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
	{
		id: "marketplace-growth",
		title: "Aggregator & Marketplace Growth",
		description:
			"Tailored strategies for Swiggy, Zomato, Talabat, Careem & more to maximize your presence and revenue on major platforms.",
		features: [
			"Swiggy & Zomato Optimization",
			"Talabat & Careem Strategies",
			"Platform-Specific Growth Hacks",
			"Revenue Optimization",
		],
		image:
			"AggregatorGrowth.png",
		icon: (
			<svg
				className="w-8 h-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
				/>
			</svg>
		),
	},
	{
		id: "brand-development",
		title: "Brand Building & Positioning",
		description:
			"Craft compelling brand stories that convert & scale, building a strong identity that resonates with your target audience.",
		features: [
			"Brand Strategy & Positioning",
			"Visual Identity Design",
			"Brand Storytelling",
			"Brand Guidelines & Assets",
		],
		image:
			"BrandBuilding.png",
		icon: (
			<svg
				className="w-8 h-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
				/>
			</svg>
		),
	},
	{
		id: "performance-marketing",
		title: "D2C & Omni-Channel Playbook",
		description:
			"Paid ads, SEO, influencer & retention strategy built around ROI to drive measurable growth and maximize your marketing investment.",
		features: [
			"Paid Advertising Campaigns",
			"SEO & Content Strategy",
			"Influencer Marketing",
			"Customer Retention Programs",
		],
		image:
			"D2C.png",
		icon: (
			<svg
				className="w-8 h-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
				/>{" "}
			</svg>
		),
	},
	{
		id: "product-tech-consulting",
		title: "Creative & Performance Marketing ",
		description:
			"Build scalable digital experiences that drive growth with expert guidance on product strategy and technical architecture.",
		features: [
			"Product Strategy & Roadmap",
			"Technical Architecture Review",
			"Scalability Planning",
			"Digital Experience Optimization",
		],
		image:
			"CreativeMarketing.png",
		icon: (
			<svg
				className="w-8 h-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},

];

const StepsSection = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<div ref={containerRef} className="relative h-[400vh]" >
			<div className="sticky top-20 h-screen w-full overflow-hidden bg-[#1a1a1a]">
				{services.map((service, index) => {
					let start, end;
					if (index === 0) {
						start = 0;
						end = 0.15;
					} else if (index === 1) {
						start = 0.15;
						end = 0.30;
					} else if (index === 2) {
						start = 0.30;
						end = 0.45;
					} else if (index === 3) {
						start = 0.45;
						end = 0.6;
					} else if (index === 4) {
						start = 0.6;
						end = 0.75;
					} else if (index === 5) {
						start = 0.75;
						end = 0.9;
					} else {
						start = 0.9;
						end = 1.0;
					}

					const initialY = index === 0 ? "10%" : "110%";
					const y = useTransform(
						scrollYProgress,
						[start, end],
						[initialY, index === 0 ? "0%" :
							index === 1 ? "4%" :
								index === 2 ? "8%" :
									index === 3 ? "12%" :
										index === 4 ? "16%" :
											"20%"]
					);

					const cardColors = [
						"#4938f2", // Card 1 - lighter blue
						"#000000", // Card 2 - coral
						"#4938f2", // Card 3 - lighter blue (repeated)
						"#000000", // Card 4 - deep blue
						"#4938f2", // Card 5 - lighter blue (repeated)
						"#000000", // Card 6 - coral
					];


					return (
						<motion.div
							key={index}
							style={{
								y,
								zIndex: index + 1,
								backgroundColor: cardColors[index] || "#1a1a1a",
							}}
							className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none"
						>
							<div
								className="text-white pb-10 px-4 sm:px-6 lg:px-20 w-full mx-auto pointer-events-auto "
								style={{ backgroundColor: cardColors[index] || "#1a1a1a" }}
							>
								<motion.div
									// Set the initial animation only for cards after the first one
									initial={index === 0 ? { y: 0 } : { y: 50 }}
									whileInView={{ y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									{/* Services Layout - copied exactly from OurServices */}
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
										{/* Left Content - Scrollable Sections */}
										<div className="space-y-8 lg:space-y-32 mb-10 lg:mb-60 mt-2">
											<div className="py-4 lg:py-10 flex flex-col justify-center">
												{/* Icon */}
												<div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 lg:mb-8 ${cardColors[index] === "#000000" ? "bg-primary" : "bg-black"}`}>
													{service.icon}
												</div>

												{/* Title */}
												<h3 className="text-2xl sm:text-4xl font-bold mb-4 lg:mb-6 font-poppins">
													{service.title}
												</h3>

												{/* Description */}
												<p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed font-poppins">
													{service.description}
												</p>

												{/* Features List */}
												<div className="space-y-3 lg:space-y-4">
													{service.features.map(
														(feature, featureIndex) => (
															<div
																key={featureIndex}
																className="flex items-center"
															>
																<div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
																	<svg
																		className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
																		fill="currentColor"
																		viewBox="0 0 20 20"
																	>
																		<path
																			fillRule="evenodd"
																			d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																			clipRule="evenodd"
																		/>
																	</svg>
																</div>
																<span className="text-white text-sm lg:text-base font-medium font-poppins">
																	{feature}
																</span>
															</div>
														)
													)}
												</div>
											</div>
										</div>

										{/* Right Image */}
										<div className="relative">
											<div className="h-[30vh] lg:h-[60vh] ">
												<div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full w-full lg:w-10/12 relative lg:ml-28 mt-4 lg:mt-12">
													<img
														src={service.image}
														alt={service.title}
														className="absolute inset-0 w-full h-full object-cover"
													/>

													{/* Overlay with service indicator */}
													<div className="absolute bottom-4 left-4 right-4">
														<div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 lg:p-4">
															<h4 className="text-white font-bold text-base lg:text-lg font-poppins">
																{service.title}
															</h4>
															<div className="flex space-x-2 mt-2">
																{services.map((_, serviceIndex) => (
																	<div
																		key={serviceIndex}
																		className={`h-1 rounded-full transition-all duration-300 ${serviceIndex === index
																				? "bg-primary w-8"
																				: "bg-gray-400 w-2"
																			}`}
																	/>
																))}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default StepsSection;
