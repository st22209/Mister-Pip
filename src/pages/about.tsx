import React from "react";
import { motion } from "framer-motion";
import { BookCoverBlue } from "../assets";

const About = () => {
	return (
		<div>
			<div className="flex flex-col text-4xl md:text-5xl xl:text-6xl font-bold font-poppins text-center items-center text-black my-12 lg:flex">
				<h1>About the book</h1>
			</div>

			<div className="lg:flex m-20 items-center justify-center">
				<img
					src={BookCoverBlue}
					className="h-auto w-80 mr-28 mx-auto"
				/>
				<div className="aspect-w-16 aspect-h-9">
					<p className="font-poppins w-full">
						In a novel that is at once intense, beautiful, and
						fablelike, Lloyd Jones weaves a transcendent story that
						celebrates the resilience of the human spirit and the
						power of narrative to transform our lives.
						<br />
						<br />
						On a copper-rich tropical island shattered by war, where
						the teachers have fled with most everyone else, only one
						white man chooses to stay behind: the eccentric Mr.
						Watts, object of much curiosity and scorn, who sweeps
						out the ruined schoolhouse and begins to read to the
						children each day from Charles Dickens's classic Great
						Expectations.
						<br />
						<br />
						So begins this rare, original story about the abiding
						strength that imagination, once ignited, can provide. As
						artillery echoes in the mountains, thirteen-year-old
						Matilda and her peers are riveted by the adventures of a
						young orphan named Pip in a city called London, a city
						whose contours soon become more real than their own
						blighted landscape. As Mr. Watts says, “A person
						entranced by a book simply forgets to breathe.” Soon
						come the rest of the villagers, initially threatened,
						finally inspired to share tales of their own that bring
						alive the rich mythology of their past. But in a ravaged
						place where even children are forced to live by their
						wits and daily survival is the only objective,
						imagination can be a dangerous thing.
					</p>
				</div>
			</div>

			<div className="lg:flex m-20 items-center justify-center">
				<img
					src={BookCoverBlue}
					className="h-auto w-80 mr-28 mx-auto"
				/>
				<div className="aspect-w-16 aspect-h-9">
					<h1 className="text-center font-poppinsbold text-[2.5rem]">
						Setting
					</h1>
					<p className="font-poppins w-full">
						In a novel that is at once intense, beautiful, and
						fablelike, Lloyd Jones weaves a transcendent story that
						celebrates the resilience of the human spirit and the
						power of narrative to transform our lives.
						<br />
						<br />
						On a copper-rich tropical island shattered by war, where
						the teachers have fled with most everyone else, only one
						white man chooses to stay behind: the eccentric Mr.
						Watts, object of much curiosity and scorn, who sweeps
						out the ruined schoolhouse and begins to read to the
						children each day from Charles Dickens's classic Great
						Expectations.
						<br />
						<br />
						So begins this rare, original story about the abiding
						strength that imagination, once ignited, can provide. As
						artillery echoes in the mountains, thirteen-year-old
						Matilda and her peers are riveted by the adventures of a
						young orphan named Pip in a city called London, a city
						whose contours soon become more real than their own
						blighted landscape. As Mr. Watts says, “A person
						entranced by a book simply forgets to breathe.” Soon
						come the rest of the villagers, initially threatened,
						finally inspired to share tales of their own that bring
						alive the rich mythology of their past. But in a ravaged
						place where even children are forced to live by their
						wits and daily survival is the only objective,
						imagination can be a dangerous thing.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
