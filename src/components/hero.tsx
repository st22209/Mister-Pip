import MisterPipBook from "./book";
import { motion } from "framer-motion";
import AnimatedTextWord from "./animate_char";

const Hero = () => {
	return (
		<div className="grid lg:grid-cols-2 gap-12 items-center h-screen w-full">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
			>
				<div className="mt-12 lg:mt-0">
					<AnimatedTextWord
						text={"Mister Pip"}
						divclasses={
							"text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-2 lg:flex"
						}
					/>
					<AnimatedTextWord
						text={"A Lloyd Jones Novel"}
						divclasses={
							"text-3xl md:text-4xl xl:text-5xl font-light mb-6  lg:flex"
						}
					/>
					<a
						href="https://www.penguin.co.nz/books/mister-pip-9780143008965"
						className="bg-[#3E5E61] relative inline-flex items-center justify-start px-8 py-[0.76rem] overflow-hidden font-bold text-sm rounded group"
					>
						<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red-500 opacity-[0%]"></span>
						<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-500 opacity-100 group-hover:-translate-x-8"></span>
						<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out">
							Order Now
						</span>
					</a>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, ease: "easeInOut" }}
				className="h-full w-full"
			>
				<MisterPipBook />
			</motion.div>
		</div>
	);
};

export default Hero;
