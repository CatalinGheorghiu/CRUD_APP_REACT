import Navbar from "./components/Navbar";
import Pizzas from "./components/Pizzas";

function App() {
	
	return (
		<>
			<header>
				<Navbar/>
			</header>
			
			<main>
				<h1 style={{textAlign:"center",margin:"30px 0",fontSize:"3em"}}>Welcome to Ivan's Pizza! Artisan since 2021</h1>
				<Pizzas/>
			</main>
		</>
	);
}

export default App;
