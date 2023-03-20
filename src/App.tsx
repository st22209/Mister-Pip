import * as pages from "./pages";
import { Navbar } from "./components";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<pages.Home />}></Route>
					<Route path="/about" element={<pages.About />}></Route>
					<Route
						path="/characters"
						element={<pages.Characters />}
					></Route>
					<Route path="/author" element={<pages.Author />}></Route>
					<Route path="/*" element={<pages.PageNotFound />}></Route>
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
};

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
