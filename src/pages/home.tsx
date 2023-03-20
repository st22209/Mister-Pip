import { Hero } from "../components";

const Home = () => {
	return (
		<div className="flex items-center justify-center h-screen px-6 pb-12 md:px-12 text-gray-800 text-center lg:text-left">
			<div className="container mx-auto">
				<Hero />
			</div>
		</div>
	);
};

export default Home;
