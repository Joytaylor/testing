import React from "react";
import Grid from "@material-ui/core/Grid";
import Projects from "../components/projects";
import AppBar from "@material-ui/core/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactMe from "../components/contactMe";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
  },
  items: {
    marginTop: "5%",
  },
  navBar: {
    marginLeft: "100%",
    marginRight: "10%",
  },
}));

export default function Pages() {
  const classes = useStyles();

  const pages = [<Projects />, <ContactMe />]; // place new pages here after importing them
  return (
    <div>
      <div style={{ height: 100 }} className={classes.navBar}>
        <AppBar>
          <div>
            <Tabs centered>
              <img src="./images/jticon.png" width="75px" height="75px" />

              <Tab label="Home" />
              <Tab label="Projects" />
              <Tab label="Organizations" />
              <Tab label="Awards" />
              <Tab label="Contact" />
            </Tabs>
          </div>
        </AppBar>
      </div>

      <Grid container direction="column" justify="center" alignItems="center">
        {pages.map((page) => (
          <Grid item className={classes.items}>
            {page}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
