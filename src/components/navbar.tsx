import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const underline_transition =
		" hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black dark:before:bg-[#3E5E61] before:absolute before:left-0 before:bottom-0";

	return (
		<nav>
			<div className="pt-2 px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<a
							href="/"
							className={
								"text-[#3E5E61] text-2xl font-bold font-poppinsbold tracking-wide" +
								underline_transition
							}
						>
							MISTER PIP
						</a>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							<a
								href="/about"
								className={
									"text-[#787878] hover:text-black hover:shadow-sm mx-6 rounded-md text-lg font-medium font-poppins" +
									underline_transition
								}
							>
								About
							</a>
							<a
								href="/characters"
								className={
									"text-[#787878]  hover:text-black hover:shadow-sm mx-6 rounded-md text-lg font-medium font-poppins" +
									underline_transition
								}
							>
								Characters
							</a>
							<a
								href="/author"
								className={
									"text-[#787878]  hover:text-black hover:shadow-sm mx-6 rounded-md text-lg font-medium font-poppins" +
									underline_transition
								}
							>
								Author
							</a>
							<a
								className="inline-block mx-4 px-5 py-3 bg-[#3E5E61] text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-[#304546] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:ring-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								href="https://www.penguin.co.nz/books/mister-pip-9780143008965"
								role="button"
							>
								Buy
							</a>
						</div>
					</div>
					<div className="md:hidden flex items-center">
						<button
							type="button"
							className="text-black focus:outline-none focus:text-black hover:text-red-400"
							onClick={toggleMenu}
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								{isOpen ? (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M19.293 4.293a1 1 0 0 0-1.414-1.414l-12 12a1 1 0 0 0 0 1.414l12 12a1 1 0 1 0 1.414-1.414L8.414 13l10.879-10.879z"
									/>
								) : (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm16 7a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h15a1 1 0 0 0 0-2zm-1 5a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h14z"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
				<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
					<div className="px-2 pt-2 pb-3 sm:px-3">
						<a
							href="/about"
							className="text-[#787878] hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium font-poppins"
						>
							About
						</a>
						<a
							href="/characters"
							className="text-[#787878] hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium font-poppins"
						>
							Characters
						</a>
						<a
							href="/author"
							className="text-[#787878] hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium font-poppins"
						>
							Author
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
