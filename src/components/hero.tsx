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
						className="inline-block px-8 py-3 mr-2 bg-[#3E5E61] text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-[#304546] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:ring-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						href="https://www.penguin.co.nz/books/mister-pip-9780143008965"
						role="button"
					>
						Order Now
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
