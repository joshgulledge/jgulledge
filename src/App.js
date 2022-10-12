import React from "react";
//import Button from "@mui/material/Button";
import Header from "./Header";
//import Grid from "@mui/material/Grid";
// import TestButton from "./TestButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h3 = {
	fontSize: "1rem",
	"@media (min-width:600px)": {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "2rem",
	},
};

theme.typography.h6 = {
	fontSize: ".6rem",
	"@media (min-width:600px)": {
		fontSize: "1rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1rem",
	},
};

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Header />
			</ThemeProvider>

			{/* <TestButton /> */}
		</div>
	);
}

export default App;
