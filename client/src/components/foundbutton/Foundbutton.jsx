import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material";
import {
  headerTwoFontSize,
  foundButtonMargin,
  foundButtonPaddingTB,
  foundButtonPaddingLR,
} from "./foundbutton.js";
import "./foundbutton.css";

export default function FoundButton(props) {
  const muiTheme = useTheme();
  const { name } = props;
  return (
    <Button
      disableRipple
      disableElevation
      variant="contained"
      sx={{
        border: "1px solid rgba(184,184,184,1)",
        fontSize: headerTwoFontSize,
        textTransform: "lowercase",
        borderRadius: "0 0.5rem 0 0.5rem",
        backgroundColor: "rgba(227,227,227,1)",
        color: "#3c3d50",
        cursor: "default",
        fontWeight: "470",
        height: "2.0625rem",
        flexGrow: "0",
        flexShrink: "0",
        margin: foundButtonMargin,
        paddingTop: foundButtonPaddingTB,
        paddingBottom: foundButtonPaddingTB,
        paddingLeft: foundButtonPaddingLR,
        paddingRight: foundButtonPaddingLR,
        "&:hover": { backgroundColor: "rgba(227,227,227,1)" },
        "&:active": { backgroundColor: "rgba(227,227,227,1)" },
        boxSizing: "content-box",
      }}
    >
      {name}
    </Button>
  );
}
