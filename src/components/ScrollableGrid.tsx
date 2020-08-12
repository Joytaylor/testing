import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ProjectCard from "./projectCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pRoot: {
      display: "flex",
      flexWrap: "wrap",
      padding: "5%",
      justifyContent: "space-around",
      backgroundColor: "rgba(200,200,200,.5)",
    },

    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      paddingBlock: "20%",
    },

    title: {
      color: theme.palette.primary.light,
    },
  })
);

export default function Project(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.pRoot}>
      <GridList cellHeight={"auto"} className={classes.gridList} cols={3.2}>
        {props.data.map((tile: any) => (
          <GridListTile key={tile.img}>
            <ProjectCard
              title={tile.title}
              sDate={tile.sDate}
              img={tile.img}
              sentence={tile.sentence}
              tools={tile.tools}
              description={tile.description}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
