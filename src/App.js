// react things
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Home from "./Home";

// material ui things
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
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div>
					<Routes>
						<Route
							path="/"
							element={<Home />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
