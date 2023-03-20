import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
	const { progress } = useProgress();
	return (
		<Html
			as="div"
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<span className="canvas-loader"></span>
			<div className="text-white bg-[#3E5E61] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
				<svg
					aria-hidden="true"
					className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="currentColor"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentFill"
					/>
				</svg>
				Loading... ({progress.toFixed(2)}%)
			</div>
		</Html>
	);
};
const BookModel = () => {
	const book = useGLTF("./misterpip.glb");

	return (
		<primitive
			object={book.scene}
			scale={3.5}
			position-y={0}
			rotation-y={0}
		/>
	);
};

useGLTF.preload("/misterpip.glb");

const MisterPipBook = () => {
	const [autoRotate, setAutoRotate] = useState(true);
	useEffect(() => {
		// stop rotating the book when the user clicks the "s" key
		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === "s") {
				event.preventDefault();
				setAutoRotate(!autoRotate);
			}
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	const [enableExtraControls, setEnableExtraControls] = useState(false);
	useEffect(() => {
		// allow use to be able to zoom and pan when they hit z
		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === "z") {
				event.preventDefault();
				setEnableExtraControls(!enableExtraControls);

				if (enableExtraControls) {
					window.location.reload();
				}
			}
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	return (
		<Canvas
			shadows
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate={autoRotate}
					enableZoom={enableExtraControls}
					enablePan={enableExtraControls}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					// autoRotateSpeed={5}
				/>
				<directionalLight position={[10, 3, 1]} intensity={0.1} />

				<ambientLight intensity={0.75} />
				<BookModel />
			</Suspense>
		</Canvas>
	);
};

export default MisterPipBook;
