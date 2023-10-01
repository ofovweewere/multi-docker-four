import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={
        {
          //transform: "translate(-50%, -50%)",
        }
      }
    >
      <CircularProgress />
    </div>
  );
}
