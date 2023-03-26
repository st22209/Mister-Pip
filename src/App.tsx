import * as pages from "./pages";
import { Navbar, Footer } from "./components";
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
					<Route path="/context" element={<pages.About />}></Route>
					<Route
						path="/gallery"
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
				{location.pathname !== "/gallery" && <Footer />}
			</BrowserRouter>
		</div>
	);
}

export default App;
