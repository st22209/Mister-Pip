import { motion } from "framer-motion";

const PageNotFound = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			The page youre searching for doesnt exist, probably went to get the
			milk like your dad
		</motion.div>
	);
};

export default PageNotFound;
