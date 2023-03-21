import React from "react";
import { Author1, Author2, books } from "../assets";
import { motion } from "framer-motion";

const TitleAndImage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1, ease: "easeInOut" }}
		>
			<div className="hidden lg:block lg:float-left mr-36 bg-author1 bg-no-repeat bg-center bg-cover lg:w-[20rem] lg:h-[30rem] 2xl:w-[30rem] 2xl:h-[40rem] rounded-tr-2xl rounded-br-2xl shadow-2xl">
				<img
					className="relative lg:top-[20rem] lg:left-[13rem] lg:w-48 2xl:top-[25rem] 2xl:left-[17rem] 2xl:w-64 rounded-tl-2xl shadow-2xl"
					src={Author2}
				/>
			</div>
      <img className="lg:hidden" src={Author1} alt="" />
			<div className="mt-12 lg:mt-0">
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
			</div>
		</motion.div>
	);
};
const Author = () => {
	return (
		<div className="p-14">
			<TitleAndImage />
			<div className="mt-[5rem] lg:mt-[20rem] xl:mt-[35rem]">
				<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4 lg:flex">
					Books by Lloyd Jones
				</h1>
				<br />
				<br />
				<div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
					{books.map(function (book_data, idx) {
						return (
							<div className="p-2 max-w-sm">
								<div className="flex rounded-3xl h-full bg-[#D9D9D9] p-4 flex-col shadow-xl">
									<img
										className="rounded-xl"
										src={book_data[1]}
										alt=""
									/>
									<h1 className="font-poppins mt-3 text-lg text-center text-black">
										{book_data[0]}
									</h1>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Author;
