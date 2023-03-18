import * as pages from "./pages";
import { Navbar, Footer } from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<pages.Home />}></Route>
				<Route path="/*" element={<pages.PageNotFound />}></Route>
			</Routes>
		</AnimatePresence>
	);
};

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<AnimatedRoutes />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
