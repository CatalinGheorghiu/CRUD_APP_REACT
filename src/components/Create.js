import {useState}   from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
	const [name, setName] = useState("");
	const [origin, setOrigin] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [img, setImg] = useState("");
	const [description, setDescription] = useState("");
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		//POST
		const pizza = {
			name, origin, ingredients,img, description
		};
		
		fetch("http://localhost:8000/pizzas", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(pizza)
		}).then(() => console.log("Pizza created!"));
		history.push("/");
	};
	
	return (
		<div>
			<h2>Create your own pizza!</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input type="text" required value={name}
				       onChange={e => setName(e.target.value)}/>
				
				<label>Origin:</label>
				<input type="text" required value={origin}
				       onChange={e => setOrigin(e.target.value)}/>
				
				<label>Ingredients</label>
				<input type="text" required value={ingredients}
				       onChange={e => setIngredients([e.target.value])}/>
				
				<label>Image link</label>
				<input type="text" required value={img}
				       onChange={e => setImg(e.target.value)}/>
				
				<label>Description</label>
				<input type="text" required value={description}
				       onChange={e => setDescription(e.target.value)}/>
				<button>Create Pizza</button>
			</form>
		</div>
	);
};

export default Create;
