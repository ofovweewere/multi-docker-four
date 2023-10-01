import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@mui/material";
import "./morebutton.css";
import { CatchingPokemonSharp } from "@mui/icons-material";
export default function IconLabelButtons(props) {
  const muiTheme = useTheme();
  const [clicked, setClicked] = useState(false);
  const [eventType, setEventType] = useState(null); // Track the type of event
  const { heightState, setHeightState, setMoreButton } = props;

  const handleMouseDown = (e) => {
    setClicked(true);
    setEventType(e.type); // Set the type of event (mouse or touch)
  };

  const handleTouchStart = (e) => {
    setClicked(true);
    setEventType(e.type); // Set the type of event (mouse or touch)
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    setHeightState(heightState * 2);
    setMoreButton(true);
    setClicked(false);
  };

  const handleTouchEnd = (e) => {
    setHeightState(heightState * 2);
    setMoreButton(true);
    setClicked(false);
    e.preventDefault();
  };

  const handleTouchCancel = () => {
    handleTouchEnd();
  };

  const buttonStyle = {
    position: "relative",
    transition: "transform 0.1s ease",
    ...(clicked && {
      transform: "translate(5px, 5px)",
    }),
  };
  // const buttonStyle = {
  //   // position: "relative",
  //   // transition: "transform 0.1s ease",
  //   // ...(clicked && {
  //   //   transform: "translateY(5px)",
  //   // }),
  //   // ...(clicked && {
  //   //   transition: "none",
  //   // }),
  // };
  return (
    <Button
      className="boxShadow"
      disableRipple
      disableElevation
      variant="contained"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // onTouchCancel={handleTouchCancel}
      style={buttonStyle}
      sx={{
        boxSizing: "content-box",
        marginTop: "32px",
        marginBottom: "32px",
        padding: "12px 32px 8px 32px",
        fontSize: "1.25rem",
        textTransform: "uppercase",
        width: "3.1rem",
        borderRadius: "32px",
        backgroundColor: muiTheme.appButton.color,
        color: "black",
        fontWeight: "350",
        height: "1.25rem",
        "&:hover": { backgroundColor: muiTheme.appButton.color },
        "&:active": { backgroundColor: muiTheme.appButton.color },
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      More
    </Button>
  );
}
