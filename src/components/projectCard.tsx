import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cRoot: {},
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

export default function RecipeReviewCard(props: any) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let created, eDateCreate = null;
  let eDate = "";
  if (props.sDate != null) {
    created = new Date();
    created.setMonth(props.sDate.month - 1);
    created.setFullYear(props.sDate.year);
  }
  if (props.eDate != null){
    eDateCreate = new Date();
    eDateCreate.setMonth(props.eDate.month -1);
    eDateCreate.setFullYear(props.eDate.year);
    eDate = " - "
     + eDateCreate.toLocaleString("default", {month:"long"})
     + " "
     + eDateCreate.getFullYear()
  }
  // temp for end dstate



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.cRoot}>
      <CardHeader
        /*action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        title={props.title}
        subheader={
          created &&
          created.toLocaleString("default", { month: "long" }) +
            " " +
            created.getFullYear()
  + eDate

        }
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.sentence /* short description of task*/}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More:</Typography>
          {props.tools != null ? "Tools:" : ""}
          <ul>
            {props.tools && props.tools.map((tool: any) => <li>{tool}</li>)}
          </ul>
          {props.explored != null ? "Explored:" : ""}
          <ul>
            {props.explored &&
              props.explored.map((tool: any) => <li>{tool}</li>)}
          </ul>


          <Typography paragraph>{props.description}</Typography>

          <Typography paragraph>
          { props.repo &&  <Link href = {props.repo} target="_blank"> Link to Repo  </Link>}
          </Typography>
          <Typography paragraph>
          { props.link &&  <Link href = {props.link} target="_blank"> See this project!  </Link>}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
