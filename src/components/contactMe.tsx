import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachmentIcon from "@material-ui/icons/Attachment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(2),
      width: 20,
      height: 20,
    },
  })
);

export default function ContactMe() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="matio:joy.ana.taylor@gmail.com" className={classes.link}>
        <EmailIcon />
        joy.ana.taylor@gmail.com
      </Link>
      <Link
        href="https://www.linkedin.com/in/joy-anna/"
        target="_blank"
        className={classes.link}
      >
        <LinkedInIcon /> linkedin.com/in/joy-anna
      </Link>
      <Link>
        <AttachmentIcon />
      </Link>
    </Breadcrumbs>
  );
}
