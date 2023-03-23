import { Author1, Author2, books } from "../assets";
import { motion } from "framer-motion";
import { WhenInView } from "../components";

const OtherBookGallery = () => {
	return (
		<WhenInView
			div={
				<>
					<div className="flex flex-col text-4xl md:text-5xl xl:text-6xl font-bold font-poppins text-center items-center text-black lg:flex">
						<br />
						<h1>Books by Lloyd Jones</h1>
						<br />
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
						{books.map((book_data, idx) => {
							return (
								<>
									<div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 shadow-2xl rounded-2xl">
										<div className="h-auto w-full">
											<img
												className="h-full w-full object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
												src={book_data[1]}
												alt={book_data[0]}
											/>
										</div>
										<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
										<div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
											<h1 className="font-dmserif text-3xl font-bold text-white">
												{book_data[0]}
											</h1>
											<p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
												{book_data[2]}
											</p>
											<a
												href={book_data[3]}
												className="rounded-xl bg-neutral-900 py-6 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
											>
												Read More
											</a>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</>
			}
		/>
	);
};

const TitleAndImage = () => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, ease: "easeInOut" }}
				className="hidden lg:block lg:float-left mr-36 bg-author1 bg-no-repeat bg-center bg-cover lg:w-[20rem] lg:h-[30rem] 2xl:w-[30rem] 2xl:h-[40rem] rounded-tr-2xl rounded-br-2xl shadow-2xl"
			>
				<motion.div
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, ease: "easeInOut" }}
				>
					<img
						className="relative lg:top-[20rem] lg:left-[13rem] lg:w-48 2xl:top-[25rem] 2xl:left-[17rem] 2xl:w-64 rounded-tl-2xl shadow-2xl"
						src={Author2}
					/>
				</motion.div>
			</motion.div>
			<img className="lg:hidden" src={Author1} alt="" />
			<motion.div
				initial={{ opacity: 0, x: 200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, ease: "easeInOut" }}
				className="mt-12 lg:mt-0"
			>
				<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4 lg:flex">
					Meet The Author
				</h1>
				<p>
					Lloyd David Jones (born 23 March 1955) is a New Zealand
					author. His amazing novel Mister Pip (2006) won the
					Commonwealth Writers' Prize, was shortlisted for the Booker
					Prize the 2007 Montana Medal for fiction and was also
					shortlisted for the 2007 Man Booker Prize. He has written
					numerous novels, and has worked as a journalist and
					consultant.
					<br />
					<br />
					Jones writing is known to subvert the norms of fiction, and
					his narratives are challenging, original, and in some cases
					controversial.
					<br />
					<br /> Lloyd Jones is an award-winning fiction writer. His
					first collection of short stories was published in 1991, and
					he has also written books for children.
				</p>
			</motion.div>
		</div>
	);
};
const Author = () => {
	return (
		<div className="p-14">
			<TitleAndImage />
			<div className="lg:h-[18rem] xl:h-[20rem] 2xl:h-[35rem]"></div>
			<OtherBookGallery />
		</div>
	);
};

export default Author;
