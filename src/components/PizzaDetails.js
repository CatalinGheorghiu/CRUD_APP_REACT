import {useParams} from "react-router-dom";

const PizzaDetails = () => {
	const {id} = useParams();
	return (
		<div>
			<h1>Pizza {`${id}`}</h1>
		</div>
	);
};

export default PizzaDetails;
