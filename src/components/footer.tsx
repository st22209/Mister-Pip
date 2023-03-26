import React from "react";

const Footer = () => {
	return (
		<footer className="rounded-lg m-4">
			<div className="w-full container mx-auto p-4 md:px-6 md:py-8 border-t-2">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a
						href="/"
						className={
							"text-[#3E5E61] text-2xl font-bold font-poppinsbold tracking-wide"
						}
					>
						MISTER PIP
					</a>
					<a
						className="text-gray-500 font-medium"
						href="https://github.com/st22209/Mister-Pip-ENG2"
					>
						Website Created By FusionSid{" "}
						<span className="text-[#F7F6E8]">
							L imagine using wix \j
						</span>
					</a>
					<span className="text-gray-500 font-medium">
						Book Created By Lloyd Jones
					</span>
					<ul className="flex flex-wrap items-center mb-6 font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a
								href="/context"
								className="mr-4 hover:underline md:mr-6 "
							>
								Context
							</a>
						</li>
						<li>
							<a
								href="/gallery"
								className="mr-4 hover:underline md:mr-6"
							>
								Gallery
							</a>
						</li>
						<li>
							<a
								href="/author"
								className="mr-4 hover:underline md:mr-6 "
							>
								Author
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
