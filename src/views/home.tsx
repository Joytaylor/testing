import React from "react";
import Grid from "@material-ui/core/Grid";
import Projects from "../components/projects";
import AppBar from "@material-ui/core/AppBar";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
const pages = [<Projects />];
export default function Pages() {
  const classes = useStyles();
  function All() {
    const list = pages.map((page) => (
      <Grid item className={classes.items}>
        {page}
      </Grid>
    ));
    return <> {list}</>;
  }
  function Project() {
    return <Projects />;
  }
  // place new pages here after importing them
  return (
    <Router>
      <div>
        <div style={{ height: 50 }} className={classes.navBar}>
          <AppBar>
            <div>
              <Tabs centered>
                <img
                  src="./images/jticon.png"
                  alt="icon"
                  width="75px"
                  height="75px"
                />

                <Tab value={0} label="Home" to="/" component={Link} />

                <Tab
                  value={1}
                  label="Projects and Experiences"
                  to="/Projects"
                  component={Link}
                />
                <Tab label="Organizations" />
                <Tab label="Awards" />
                <Tab
                value ={2}
                label = "Contact Me!"
                to = "/ContactMe"
                component = {Link}
                />
              </Tabs>
            </div>
          </AppBar>
        </div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Switch>
            <Route path="/projects">
              <Project />
            </Route>
            <Route path="/">
              {console.log("alll")}
              <All />
            </Route>
          </Switch>
          <Grid item className={classes.items}>
            <ContactMe />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
