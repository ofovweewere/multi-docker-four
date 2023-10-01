import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

export default function IconLabelButtons(props) {
  const { searchOutlined, handleSubmit } = props;
  const muiTheme = useTheme();
  const [clicked, setClicked] = useState(false);

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  const handleTouchStart = (e) => {
    setClicked(true);
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    setClicked(false);
    handleSubmit(e);
    e.preventDefault();
  };

  // const buttonStyle = {
  //   position: "relative",
  //   transition: "transform 0.1s ease",
  //   ...(clicked && {
  //     transform: "translate(5px, 5px)",
  //   }),
  // };

  const buttonStyle = {
    position: "relative",
    transition: "transform 0.1s ease",
    ...(clicked && {
      transform: "translate(5px, 5px)",
    }),
  };

  const StyledIconButton = styled(IconButton)`
    border-radius: 32px;
    color: black;
  `;
  const ret = true;
  if (searchOutlined != "true") {
    return (
      <Button
        type="submit"
        disableRipple
        disableElevation
        variant="contained"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={buttonStyle}
        sx={{
          fontSize: "1.25rem",
          textTransform: "uppercase",
          width: "100%",
          borderRadius: "32px",
          backgroundColor: muiTheme.appButton.color,
          color: "black",
          fontWeight: "350",
          height: "2.875rem",
          "&:hover": { backgroundColor: muiTheme.appButton.color },
          "&:active": { backgroundColor: muiTheme.appButton.color },
        }}
      >
        Search
      </Button>
    );
  } else {
    return (
      <Button
        type="submit"
        disableRipple
        disableElevation
        variant="contained"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          fontSize: "1.25rem",
          textTransform: "uppercase",
          width: "100%",
          borderRadius: "32px 0 0 32px",
          backgroundColor: muiTheme.appButton.color,
          color: "black",
          fontWeight: "350",
          height: "2.875rem",
          "&:hover": { backgroundColor: muiTheme.appButton.color },
          "&:active": { backgroundColor: muiTheme.appButton.color },
        }}
      >
        <SearchIcon sx={{ fontSize: "30px", fontWeight: "100" }} />
      </Button>
    );
  }
}
