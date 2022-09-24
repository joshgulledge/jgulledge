import React from "react";
import Button from "@mui/material/Button";
import Header from "./Header";
import Grid from "@mui/material/Grid";

export default function TestButton () {
   
    function alertEvent() {
		alert("Button worked");
	}

	function logEvent() {
		console.log("Button still worked");
	}
   
    return (
        <Grid
        container
        spacing={4}
        columns={{ xs: 2, md: 6, lg: 12 }}>
        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={alertEvent}
                variant="contained"
                color="secondary">
                Button 1
            </Button>
        </Grid>

        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={logEvent}
                variant="contained"
                color="primary">
                Button 2
            </Button>
        </Grid>

        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={logEvent}
                variant="contained"
                color="secondary">
                Button 3
            </Button>
        </Grid>

        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={logEvent}
                variant="contained"
                color="primary">
                Button 4
            </Button>
        </Grid>

        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={logEvent}
                variant="contained"
                color="secondary">
                Button 5
            </Button>
        </Grid>

        <Grid
            item
            xs={2}
            md={2}
            lg={2}>
            <Button
                onClick={logEvent}
                variant="contained"
                color="primary">
                Button 6
            </Button>
        </Grid>
    </Grid>
    )
}