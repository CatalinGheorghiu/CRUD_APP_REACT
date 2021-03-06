import React  from "react";
import {
	AppBar,
	Button,
	CssBaseline,
	Grid,
	makeStyles,
	Toolbar
}             from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	homeButton: {
		marginRight: theme.spacing(3)
	}
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container>
				<CssBaseline/>
				<AppBar position={"static"}>
					<Toolbar>
						
						<h1 className={classes.title}>Ivan's Pizza</h1>
						
						<Button component={Link} to="/" color={"inherit"}
						        className={classes.homeButton}> Home
						</Button>
						
						<Button component={Link} to="/create" variant={"contained"} color={"secondary"}>Add New
							Pizza</Button>
					</Toolbar>
				</AppBar>
			</Grid>
		</>
	);
};

export default Navbar;
