import { Hero } from "../components";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex items-center justify-center h-screen px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left"
		>
			<div className="container mx-auto">
				<Hero />
			</div>
		</motion.div>
	);
};

export default Home;
