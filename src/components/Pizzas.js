import {
	Grid,
	List,
	ListItem,
	makeStyles,
	Paper,
	Typography
}                          from "@material-ui/core";
import LocalPizzaSharpIcon from "@material-ui/icons/LocalPizzaSharp";

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
		width: "300px",
		margin: theme.spacing(3),
	},
	title: {
		padding: 15,
	},
	lists: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},
	listItem: {
		display: "flex",
		justifyContent:"center",
		width: "50%",
	}
}));
const Pizzas = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container justify={"center"} alignContent={"center"}>
				<Grid item>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant={"h4"} component={"h1"} gutterBottom
						            align={"center"} className={classes.title}
						            color={"secondary"}>
							Pizza Capriciosa
						</Typography>
					</Paper>
				</Grid>
				<Grid item>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant={"h4"} component={"h1"} gutterBottom
						            align={"center"} className={classes.title}
						            color={"secondary"}>
							Pizza Diavola
						</Typography>
					</Paper>
				</Grid>
				<Grid item>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant={"h4"} component={"h1"} gutterBottom
						            align={"center"} className={classes.title}
						            color={"secondary"}>
							Pizza 4 Seasons
						</Typography>
						<List className={classes.lists}>
							<ListItem className={classes.listItem}>
								<LocalPizzaSharpIcon color={"secondary"}/>
								<Typography variant="subtitle1" gutterBottom>
									Pepperoni
								</Typography>
							</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem><ListItem className={classes.listItem}>
							<LocalPizzaSharpIcon color={"secondary"}/>
							<Typography variant="subtitle1" gutterBottom>
								Pepperoni
							</Typography>
						</ListItem>
						</List>
					</Paper>
				</Grid>
			</Grid>
		
		</>
	
	);
};

export default Pizzas;
