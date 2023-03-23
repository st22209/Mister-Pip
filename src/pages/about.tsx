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
	const imageDiv = (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.5, ease: "easeInOut" }}
			className={`m-auto h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-full flex items-center justify-center`}
		>
			<img
				src={props.image}
				className="h-fit w-fit rounded-2xl shadow-xl"
			/>
		</motion.div>
	);
	const textDiv = (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.5, ease: "easeInOut" }}
			className="lg:py-24"
		>
			<h2 className="text-3xl font-bold sm:text-4xl ">{props.title}</h2>

			<div className="mt-4 text-gray-600">{props.paragraph}</div>
		</motion.div>
	);

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
			{props.side === "first" ? (
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{imageDiv}
					{textDiv}
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{textDiv}
					{imageDiv}
				</div>
			)}
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"></div>
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
								The Bougainville Civil War between 1988 and 1998
								was sparked by the establishment of a large
								copper mine on the island in 1972.
								<br />
								<br />
								<ul className="list-disc">
									<li>
										The people of Bougainville felt that the
										mine was destructive to their land and
										social systems, and claimed that the
										company had created a system of
										apartheid by bringing white workers to
										the island and separating them from the
										black locals.
									</li>
									<br />
									<li>
										Francis Ona led an uprising that shut
										down the mine, at which point many of
										the island's white immigrants returned
										to their original homes.
									</li>
									<br />
									<li>
										Papua New Guinea enforced a blockade
										around the island, using helicopters.
									</li>
								</ul>
								<br />
								Mister pip is set in the middle of this civil
								war. Matilday is only a 13 year old girl who has
								to live in the middle of a war. Most of her
								teachers have left to go back home so they don't
								have school. Mr Watts who is the only white man
								on the island decides to teach the kids. He
								reads a book to them called "Great Expectations"
								and allows the children to escape away from this
								war zone to a new place.
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
								Traditional life in bougainville was much less
								advanced than most countries. There was no
								computers or technoligy like they have here.
								Students didn't have any books and at the start
								of the book theres not even any school as all
								the teachers left.
								<br />
								<br />
								The population is about 200,000 with
								considerable cultural diversity. English and
								Pidgin are the languages spoken on the island,
								along with 21 distinct indigenous languages.
								Throughout its history, Bougainville has been
								under German, British and Australian control.
								<br />
								<br />
								The people in Bougainville have a lot of land
								and natural based sources, like animals, fish,
								trees, lot's of plants, so Bougainville is very
								agricultural. Bougainville can also not generate
								any electricity or medicine by itself, which
								leaves them on relying for outside help. So you
								could say they are nowhere near as advanced as
								many other countries
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
								The Panguna mines in Bougainville is likely the
								main way the island made money. The site was at
								the time the world's largest open-pit
								copper/gold mine, generating 12% of PNG's GDP
								and over 45% of the nation's export revenue. The
								mine also happened to at the center of a
								decade-long civil war fought between the
								Bougainville Revolutionary Army and the Papua
								New Guinea Defense Force in the 1990s.
								<br />
								<br />
								Bougainville Copper Limited, (BCL) was a
								subsidiary of the British-Australian resources
								giant Rio Tinto. They owned the mine at the time
								In 2001. Papua New Guinea National Government
								also had a 20% shareholder in the mine.
								<br />
								<br />
								After a peace agreement was reached that gave
								Bougainville autonomy within PNG. Some of the
								islanders launched a class action lawsuit in the
								United States against Rio Tinto. After the war
								the Bougainville government asked Rio Tinto to
								make contributions to the cleanup but they have
								refused and so has the australian government.
								The mine was pumping 110 million cubic meters of
								waste, contaminated with cyanide and other
								chemicals, into the sea each year.
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
								The Bougainville conflict, also known as the
								Bougainville Civil War, was a multi-layered
								armed conflict fought from 1988 to 1998 in the
								North Solomons Province of Papua New Guinea
								between PNG and the secessionist forces of the
								Bougainville Revolutionary Army, and between the
								BRA and other armed groups on Bougainville.
								<br />
								<br />
								Conflict over the large mine at Panguna became
								the source of what has become known as the
								Bougainville “crisis”. Dissatisfaction over
								aspects of the mine resulted in disputes and
								violence that resulted in the Papua New Guinea
								Defence Force being deployed on the island.
								<br />
								<br />
								The conflict displaced 40,000 of the island's
								200,000 inhabitants. During the decade long war
								soldiers burned villages, workers had poor
								wages, and there an unfair distribution of
								revenue (less than 1 percent of profits were
								reinvested in Bougainville) and there was a lot
								of environmental destruction from the operation.
								<br />
								<br />
								The civil war claimed the lives of about 20,000
								people and amplified calls for Bougainvillean
								independence. The Bougainville Peace Agreement,
								signed between Bougainvillean leaders and Papua
								New Guinea in 2001, marked the end of the war
								and guaranteed a referendum on independence, to
								be held in 2019.
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
								Adapted by Andrew Adamson from the best-selling
								novel by Lloyd Jones, Mr Pip is the story of how
								Mr Watts, a teacher on the war-torn island of
								Bougainville, helps a young girl survive the
								violence of her daily life through the power of
								imagination. Mr Watts reads from his favorite
								book, “Great Expectations”, and 14-year-old
								Matilda is transported into the Victorian world,
								finding inspiration, friendship and hope when
								her real life is filled with harsh uncertainty
								and danger.
								<br />
								<br />
								Mr Pip was filmed in the village of Pidia on
								Bougainville Island, a territory of Papua New
								Guinea, and in Auckland and Oamaru in New
								Zealand, between June and September 2011.
								<br />
								<br />
								In Bougainville, the beautiful white sand
								beaches, lush tropical rainforest, the exotic
								look of the village buildings and the blue seas
								and skies made an idyllic backdrop for the
								lyrical scenes of village life and the
								developing friendship of Matilda and Mr Watts.
								The beauty of this environment contrasts sharply
								with the jolting reality of the harsh wartime
								parts of the story that take place in the
								village. The Lloyd Jones novel, Mister Pip, upon
								which the film is based, was set in Bougainville
								during the 1990s when the country was torn apart
								by a war over copper mining and land rights, and
								most of the story it tells is very close to the
								experiences of the people there.
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
