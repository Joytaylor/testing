import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Data from "../data";
import ProjectCard from "./projectCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pRoot: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper,
    },

    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
    },
    resize: {
      minHeight: "100vh",
    },
  })
);

export default function Project() {
  const classes = useStyles();
  return (
    <div className={classes.pRoot}>
      <GridList className={classes.gridList} cols={3}>
        {Data.map((tile) => (
          <GridListTile key={tile.img} className={classes.resize}>
            <ProjectCard
              title={tile.title}
              sDate={tile.sDate}
              img={tile.img}
              sentence={tile.sentence}
              descr={tile.description}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
