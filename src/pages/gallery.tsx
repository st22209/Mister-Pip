import { useEffect } from "react";
import { GalleryImages } from "../assets";

const Gallery = () => {
	const images = document.getElementsByClassName("image");

	let globalIndex = 0,
		last = { x: 0, y: 0 };

	const activate = (image: HTMLElement, x: number, y: number) => {
		image.style.left = `${x}px`;
		image.style.top = `${y}px`;
		image.style.zIndex = `${globalIndex % images.length}`;

		image.classList.toggle("hidden");

		last = { x, y };
	};

	const distanceFromLast = (x: number, y: number) => {
		return Math.hypot(x - last.x, y - last.y);
	};

	useEffect(() => {
		const handleOnMove = (e: MouseEvent | Touch) => {
			if (
				distanceFromLast(e.clientX, e.clientY) >
				window.innerWidth / 15
			) {
				const lead = images[globalIndex % images.length],
					tail = images[(globalIndex - 5) % images.length];

				// @ts-ignore
				activate(lead, e.clientX, e.clientY);

				if (tail) tail.classList.toggle("hidden");

				globalIndex++;
			}
		};

		const mouseMove = (e: MouseEvent) => {
			handleOnMove(e);
		};
		const touchMove = (e: TouchEvent) => {
			handleOnMove(e.touches[0]);
		};

		document.addEventListener("mousemove", mouseMove);
		document.addEventListener("touchmove", touchMove);
		return () => {
			document.removeEventListener("mousemove", mouseMove);
			document.removeEventListener("touchmove", touchMove);
		};
	});

	return (
		<div className="overflow-y-hidden">
			<div className="flex flex-col font-poppins text-center items-center text-black lg:flex">
				<br />
				<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold ">
					Gallery
				</h1>
				<br />
				<p>
					Move your mouse/finger around to view the images
					interactively. <br />
					Note: Navigation bar won't work on this page so to go back
					hit the back arrow or the go to home button.
				</p>
			</div>
			{GalleryImages.map((img: string) => (
				<img
					src={img}
					className="image hidden absolute w-[50vmin] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-md"
					alt="Mister Pip Related Image"
				/>
			))}
			<div className="absolute flex flex-col items-center bottom-0 m-5 shadow-2xl">

			<a
				href="/"
				className="bg-[#3E5E61] relative inline-flex items-center justify-start px-8 py-[0.76rem] overflow-hidden font-bold text-sm rounded group z-40"
				>
				<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-red-500 opacity-[0%]"></span>
				<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-red-500 opacity-100 group-hover:-translate-x-8"></span>
				<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out">
					Back To Home
				</span>
			</a>
				</div>
		</div>
	);
};

export default Gallery;
