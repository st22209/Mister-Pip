import { motion } from "framer-motion";
import { WhenInView } from "../components";
import { BookCoverBlue, Map, Mine, Movie, Vilage, War } from "../assets";

type imageTextProps = {
	title: string;
	paragraph: JSX.Element | string;
	image: string;
	side: string;
};

const ImageText = (props: imageTextProps) => {
	console.log(props.side);
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, ease: "easeInOut" }}
					className={`m-auto h-64 overflow-hidden rounded-2xl sm:h-80 lg:order-${props.side} lg:h-full flex items-center justify-center`}
				>
					<img
						src={props.image}
						className="h-fit w-fit rounded-2xl shadow-xl"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, ease: "easeInOut" }}
					className="lg:py-24"
				>
					<h2 className="text-3xl font-bold sm:text-4xl ">
						{props.title}
					</h2>

					<p className="mt-4 text-gray-600">{props.paragraph}</p>
				</motion.div>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<div className="flex flex-col text-4xl md:text-5xl xl:text-6xl font-bold font-poppins text-center items-center text-black my-12 lg:flex">
				<h1>About the book</h1>
			</div>
			<WhenInView
				div={
					<ImageText
						title="What's it about?"
						image={BookCoverBlue}
						side="first"
						paragraph={
							<>
								In a novel that is at once intense, beautiful,
								and fablelike, Lloyd Jones weaves a transcendent
								story that celebrates the resilience of the
								human spirit and the power of narrative to
								transform our lives.
								<br />
								<br />
								On a copper-rich tropical island shattered by
								war, where the teachers have fled with most
								everyone else, only one white man chooses to
								stay behind: the eccentric Mr. Watts, object of
								much curiosity and scorn, who sweeps out the
								ruined schoolhouse and begins to read to the
								children each day from Charles Dickens's classic
								Great Expectations.
								<br />
								<br />
								So begins this rare, original story about the
								abiding strength that imagination, once ignited,
								can provide. As artillery echoes in the
								mountains, thirteen-year-old Matilda and her
								peers are riveted by the adventures of a young
								orphan named Pip in a city called London, a city
								whose contours soon become more real than their
								own blighted landscape. As Mr. Watts says, “A
								person entranced by a book simply forgets to
								breathe.” Soon come the rest of the villagers,
								initially threatened, finally inspired to share
								tales of their own that bring alive the rich
								mythology of their past. But in a ravaged place
								where even children are forced to live by their
								wits and daily survival is the only objective,
								imagination can be a dangerous thing.
							</>
						}
					/>
				}
			/>
			<WhenInView
				div={
					<ImageText
						title="Setting"
						side="last"
						paragraph={
							<>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et eveniet fuga nihil. Facere,
								perferendis! Repudiandae quas quos quisquam
								inventore, quod fuga nulla adipisci accusamus
								soluta nesciunt quaerat aliquam tenetur
								consequatur! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Et eveniet fuga
								nihil. Facere, perferendis! Repudiandae quas
								quos quisquam inventore, quod fuga nulla
								adipisci accusamus soluta nesciunt quaerat
								aliquam tenetur consequatur!
							</>
						}
						image={Map}
					/>
				}
			/>
			<WhenInView
				div={
					<ImageText
						title="Traditional Life"
						side="first"
						paragraph={
							<>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et eveniet fuga nihil. Facere,
								perferendis! Repudiandae quas quos quisquam
								inventore, quod fuga nulla adipisci accusamus
								soluta nesciunt quaerat aliquam tenetur
								consequatur! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Et eveniet fuga
								nihil. Facere, perferendis! Repudiandae quas
								quos quisquam inventore, quod fuga nulla
								adipisci accusamus soluta nesciunt quaerat
								aliquam tenetur consequatur!
							</>
						}
						image={Vilage}
					/>
				}
			/>
			<WhenInView
				div={
					<ImageText
						title="The Mine"
						side="last"
						paragraph={
							<>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et eveniet fuga nihil. Facere,
								perferendis! Repudiandae quas quos quisquam
								inventore, quod fuga nulla adipisci accusamus
								soluta nesciunt quaerat aliquam tenetur
								consequatur! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Et eveniet fuga
								nihil. Facere, perferendis! Repudiandae quas
								quos quisquam inventore, quod fuga nulla
								adipisci accusamus soluta nesciunt quaerat
								aliquam tenetur consequatur!
							</>
						}
						image={Mine}
					/>
				}
			/>
			<WhenInView
				div={
					<ImageText
						title="Civil War"
						side="first"
						paragraph={
							<>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et eveniet fuga nihil. Facere,
								perferendis! Repudiandae quas quos quisquam
								inventore, quod fuga nulla adipisci accusamus
								soluta nesciunt quaerat aliquam tenetur
								consequatur! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Et eveniet fuga
								nihil. Facere, perferendis! Repudiandae quas
								quos quisquam inventore, quod fuga nulla
								adipisci accusamus soluta nesciunt quaerat
								aliquam tenetur consequatur!
							</>
						}
						image={War}
					/>
				}
			/>
			<WhenInView
				div={
					<ImageText
						title="Film Adaptation"
						side="last"
						paragraph={
							<>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et eveniet fuga nihil. Facere,
								perferendis! Repudiandae quas quos quisquam
								inventore, quod fuga nulla adipisci accusamus
								soluta nesciunt quaerat aliquam tenetur
								consequatur! Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Et eveniet fuga
								nihil. Facere, perferendis! Repudiandae quas
								quos quisquam inventore, quod fuga nulla
								adipisci accusamus soluta nesciunt quaerat
								aliquam tenetur consequatur!
							</>
						}
						image={Movie}
					/>
				}
			/>
		</div>
	);
};

export default About;
