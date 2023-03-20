import { Link } from "react-router-dom";
import PageNotFoundImage from "/404.svg";

const PageNotFound = () => {
	return (
		<div className="flex items-center justify-center h-screen flex-col">
			<img src={PageNotFoundImage} width={500} />
			<br />
			<div>
				<h1 className="text-2xl font-poppinsbold">
					The page youre searching for doesn't exist
				</h1>
				<h1 className="text-[#F7F6E8]">
					probably went to get the milk like your dad
				</h1>
			</div>
			<Link to="/" className="bg-[#3E5E61] hover:bg-[#32494b] text-white font-bold py-2 px-4 rounded">Go to home</Link>
		</div>
	);
};

export default PageNotFound;
