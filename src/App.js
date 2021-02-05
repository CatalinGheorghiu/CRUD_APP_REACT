import Navbar                                   from "./components/Navbar";
import Pizzas                                   from "./components/Pizzas";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PizzaDetails
                                                from "./components/PizzaDetails";
import Create                                   from "./components/Create";

function App() {
	
	return (
		<>
			<Router>
				<header>
					<Navbar/>
				</header>
				<main>
					<Switch>
						<Route exact path="/">
							<Pizzas/>
						</Route>
						<Route path="/pizzas/:id">
							<PizzaDetails/>
						</Route>
						<Route path="/create">
							<Create/>
						</Route>
					</Switch>
				</main>
			</Router>
		</>
	);
}

export default App;
