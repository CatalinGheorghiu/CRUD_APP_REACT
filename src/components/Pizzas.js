import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	List,
	makeStyles,
	Paper,
	Typography
}                          from "@material-ui/core";
import Skeleton            from "@material-ui/lab/Skeleton";
import {v4 as uuid}        from "uuid";
import useFetch            from "../hooks/useFetch";
import {LocalPizzaRounded} from "@material-ui/icons";
import {Link, useHistory}  from "react-router-dom";

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
		height: "650px",
		margin: theme.spacing(3),
		borderRadius: 10,
	},
	title: {
		paddingTop: 10,
		margin: 10
	},
	para: {
		padding: "0 20px ",
		margin: "20px 0"
	},
	lists: {
		display: "flex",
		flexWrap: "wrap",
		padding: "20px",
		height: "200px"
	},
	listItem: {
		display: "inline",
		
	},
	img: {
		padding: 10,
		borderRadius: 17
	},
	skeleton1: {
		width: "80%",
		margin: "auto",
		height: 50,
	},
	skeleton2: {
		width: "50%",
		margin: " auto",
		height: 30,
		marginBottom: "20px"
	}, skeleton3: {
		width: "90%",
		height: "50%",
		margin: "auto"
	},
	skeleton4: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		width: "80%",
		margin: "25px",
	},
	skeleton5: {
		width: "80%",
		margin: "auto",
		marginBottom: "20px",
		height: 150,
	}
}));
const Pizzas = () => {
	const classes = useStyles();
	
	const history = useHistory();
	const {data: pizzas, isPending} = useFetch("http://localhost:8000/pizzas");
	
	const handleClick = (id) => {
		fetch(`http://localhost:8000/pizzas/${id}`, {
			method: "DELETE"
		}).then(() => {
			console.log("Pizza deleted!");
			history.go(0);
		});
	};
	
	return (
		<>
			<Typography component={"h1"} variant={"h3"} className={classes.title}
			            align={"center"}>Welcome to Ivan's Pizza!</Typography>
			<Grid container justify={"center"} alignContent={"center"}>
				{(isPending ? Array.from(new Array(40)) : pizzas).map(pizza => (
					<Grid item key={uuid()}>
						{
							<Paper elevation={3} className={classes.paper}>
								
								{pizza ? <Typography variant={"h4"} component={"h1"}
								                     align={"center"} className={classes.title}
								                     color={"secondary"}>
										{pizza.name}
									</Typography> :
									
									<Skeleton variant="text" className={classes.skeleton1}/>
								}
								
								
								{pizza ? <Box fontStyle="italic" textAlign="center"
								              marginBottom={3}> {pizza.origin}</Box> :
									
									<Skeleton className={classes.skeleton2}/>
								}
								
								
								{pizza ? <img src={pizza.img} alt={pizza.name}
								              className={classes.img}/> :
									<Skeleton variant="rect" className={classes.skeleton3}/>}
								
								<List className={classes.lists}>
									{(isPending ? Array.from(new Array(5)) : pizza.ingredients).map(ingredient => (
										<FormGroup row key={uuid()}>
											{ingredient ?
												<FormControlLabel disabled
												                  control={<Checkbox
													                  icon={<LocalPizzaRounded
														                  color={"secondary"}/>}
													                  name="checkedH"/>}
												                  label={ingredient}
												/>
												
												: <Box>
													<Skeleton className={classes.skeleton4}/>
													<Skeleton className={classes.skeleton4}/>
												</Box>}
										</FormGroup>
									))}
								</List>
								{pizza ?
									<Typography variant={"body2"}
									            className={classes.para}
									            color={"primary"}>
										{pizza.description.slice(0, 150)} ...
									</Typography>
									: <Skeleton className={classes.skeleton5}/>}
								{pizza ?
									<Box display={"flex"} justifyContent={"center"} margin={1}>
										<Button component={Link} to={`/pizzas/${pizza.id}`}>
											Read More
										</Button>
										<Button color={"secondary"}
										        variant={"contained"}
										        onClick={() => handleClick(pizza.id)}>
											Delete
										</Button>
									</Box>
									: <Skeleton className={classes.skeleton4}/>}
							</Paper>}
					</Grid>
				))}
			</Grid>
		
		</>
	
	);
};

export default Pizzas;
