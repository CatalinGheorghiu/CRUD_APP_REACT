import Navbar from "./components/Navbar";
import Pizzas from "./components/Pizzas";

function App() {
	
	return (
		<>
			<header>
				<Navbar/>
			</header>
			
			<main>
				<Pizzas/>
			</main>
		</>
	);
}

export default App;
