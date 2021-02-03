import {
	Box,
	Grid,
	List,
	ListItem,
	makeStyles,
	Paper,
	Typography
}                          from "@material-ui/core";
import LocalPizzaSharpIcon from "@material-ui/icons/LocalPizzaSharp";
import Skeleton            from "@material-ui/lab/Skeleton";
import {v4 as uuid}        from "uuid";
import useFetch            from "../hooks/useFetch";

// console.log(pizzas.map(pizza => pizza.id));
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		width: "350px",
		margin: theme.spacing(3),
		borderRadius: 10
	},
	title: {
		paddingTop: 10,
	},
	lists: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},
	listItem: {
		display: "inline",
		// width: "50%",
	}
}));
const Pizzas = () => {
	const classes = useStyles();
	
	const {data: pizzas, isPending} = useFetch("http://localhost:8000/pizzas");
	console.log(pizzas);
	
	
	return (
		<>
			{/*<Grid container justify={"center"} alignContent={"center"}>*/}
			{/*	{pizzas && pizzas.map(pizza => pizza ?(*/}
			{/*		*/}
			{/*		 <Grid item key={uuid()}>*/}
			{/*		<Paper elevation={3} className={classes.paper}>*/}
			{/*			<Typography variant={"h4"} component={"h1"}*/}
			{/*			            align={"center"} className={classes.title}*/}
			{/*			            color={"secondary"}>*/}
			{/*				{pizza.name}*/}
			{/*			</Typography>*/}
			{/*			<Box fontStyle="italic" textAlign="center"*/}
			{/*			     marginBottom={3}> {pizza.origin}</Box>*/}
			{/*			*/}
			{/*			<img src={pizza.img} alt=""/>*/}
			{/*			*/}
			{/*			<List className={classes.lists}>*/}
			{/*				{pizza.ingredients.map(ingredient => (*/}
			{/*					<ListItem key={uuid()}>*/}
			{/*						<Typography variant="body2">*/}
			{/*							<LocalPizzaSharpIcon color={"secondary"}/>*/}
			{/*							{ingredient}*/}
			{/*						</Typography>*/}
			{/*					</ListItem>*/}
			{/*				))}*/}
			{/*			</List>*/}
			{/*		</Paper>*/}
			{/*	</Grid>*/}
			{/*		) : (<Skeleton variant="rect" width={210} height={118}/>)) }*/}
			
			
			{/*</Grid>*/}
			
			<Grid container wrap="nowrap">
				{(isPending ? Array.from(new Array(40)) : pizzas).map((pizza, index) => (
					<Box key={index} width={210} marginRight={0.5} my={5}>
						{pizza ? (
							<img style={{ width: 210, height: 118 }} alt={pizza.title} src={pizza.img} />
						) : (
							<Skeleton variant="rect" width={210} height={118} />
						)}
						
						{pizza ? (
							<Box pr={2}>
								<Typography gutterBottom variant="body2">
									{pizza.name}
								</Typography>
								<Typography display="block" variant="caption" color="textSecondary">
									{pizza.origin}
								</Typography>
								<Typography variant="caption" color="textSecondary">
									{`${pizza.views} • ${pizza.createdAt}`}
								</Typography>
							</Box>
						) : (
							<Box pt={0.5}>
								<Skeleton />
								<Skeleton width="60%" />
							</Box>
						)}
					</Box>
				))}
			</Grid>
		
		</>
	
	);
};

export default Pizzas;
