import { Visibility, VisibilityOff } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { InputAdornment, useTheme } from "@mui/material";
import { useEffect, useRef, useState, useContext } from "react";
import { ScreenContext } from "../../App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Typography } from "@mui/material";
import { alphabeticFilter, numericFilter } from "../../utilities/filter.js";
import {
  textfieldStyle,
  helpIconStyle,
  cancelIconStyle,
} from "./formTextFieldStyle.js";
import "./formTextField.css";
const FormTextField = (props) => {
  const {
    matches,
    matchesSmallScreen,
    matchesSlightlySmallScreen,
    matchesGreaterThanSlightlySmallScreen,
  } = useContext(ScreenContext);
  const { index, closeToolTipP, setCloseToolTipP } = props;
  const muiTheme = useTheme();
  const { inputVal, setInputVal } = useContext(ScreenContext);
  const [open, setOpen] = useState(false);
  const [helpIconColor, setHelpIconColor] = useState("#c4c4c4");
  const [startClicked, setStartClicked] = useState(false);
  const inputRef = useRef(null);
  const adornmentRef = useRef(null);

  useEffect(() => {
    if (closeToolTipP) {
      setStartClicked(false);
      setOpen(false);
      setHelpIconColor("#c4c4c4");
      inputRef.current.blur();
    }
  }, [closeToolTipP]);
  const handleTooltipClose = (event) => {
    setOpen(false);
  };

  const handleTooltipOpen = (event) => {
    event.stopPropagation();
    setOpen(!open);
    setStartClicked(false);
    setHelpIconColor("#232427");
    setCloseToolTipP(index);
  };

  const handleOtherClick = (event) => {
    if (event.target === inputRef.current) {
      setStartClicked(true);
      setCloseToolTipP(index);
      setOpen(false);
      setHelpIconColor("#c4c4c4");
    } else if (event.target === adornmentRef.current) {
      setStartClicked(false);
      setOpen(true);
      setHelpIconColor("#232427");
    } else {
      setStartClicked(true);
      setCloseToolTipP(index);
      setOpen(false);
      setHelpIconColor("#c4c4c4");
    }
  };

  const modifyInput = (e) => {
    if (e.target.value.trim() == "") {
      removeFocusFromInput(e, e.target.name);
    }

    if (e.target.name == "length") {
      e.target.value = numericFilter(e.target.value);
    } else {
      e.target.value = alphabeticFilter(e.target.value);
    }

    setInputVal({ ...inputVal, [e.target.name]: e.target.value.trim() });
  };

  function removeFocusFromInput(e, name) {
    setStartClicked(false);
    handleTooltipClose(e);
    setHelpIconColor("#c4c4c4");
    inputRef.current.blur();
  }

  const clearForm = (e, name) => {
    e.stopPropagation();
    removeFocusFromInput(e, name);
    setCloseToolTipP(index);
    setInputVal({ ...inputVal, [name]: "" });
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      PopperProps={{
        style: {
          zIndex: 9999, // Set your desired z-index value
        },
      }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#333333",

      fontSize: "0.9rem",
      top: "9px", // Adjust the value as needed
    },
  }));

  const names = ["yourLetters", "starts", "ends", "length"];
  const startTextAd = ["A", "A", "Z", "6"];
  const helperText = [
    <>
      Find words that{" "}
      <span style={{ color: muiTheme.appButton.color }}>start</span> with these
      letters (CA -> Can)
    </>,
    <>
      Find words that{" "}
      <span style={{ color: muiTheme.appButton.color }}>start</span> with these
      letters (<span style={{ color: muiTheme.appButton.color }}>CA</span> ->{" "}
      <span style={{ color: muiTheme.appButton.color }}>Ca</span>n)
    </>,
    <>
      Find words that{" "}
      <span style={{ color: muiTheme.appButton.color }}>end</span> with these
      letters (<span style={{ color: muiTheme.appButton.color }}>VE</span> -> Ha
      <span style={{ color: muiTheme.appButton.color }}>ve</span>)
    </>,
    <>
      Only show words with a specific{" "}
      <span style={{ color: muiTheme.appButton.color }}>length</span>
    </>,
  ];

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        inputVal[names[index]].trim() == "" && setStartClicked(false);
        handleTooltipClose(e);
        setHelpIconColor("#c4c4c4");
      }}
    >
      <TextField
        id={names[index]}
        label={names[index]}
        inputRef={inputRef}
        variant="outlined"
        //onClick={handleOtherClick}
        sx={{
          ...textfieldStyle,
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${
              startClicked && muiTheme && muiTheme.appBarBackground.color
                ? muiTheme.appBarBackground.color + "!important"
                : "green"
            } `,
          },
          "& input": {
            boxSizing: "border-box",
            padding: "0.438rem 0rem 0.438rem 0px",
            paddingLeft: startClicked ? "0px" : "14px",
            textTransform: "uppercase",
            fontSize: "1.294rem",
          },
          "& .MuiInputLabel-outlined": {
            // Styles for the label
            fontSize: matchesSlightlySmallScreen ? "1rem" : "1.294rem", // Adjust the value as per your preference
            // color: "#a2a2a2",
            color: "#232427",
            marginLeft: "-10.0px", // Adjust the value as per your preference
            marginTop: "-7.0px",
            textTransform: "capitalize",
            zIndex: "-20",
          },
        }}
        value={inputVal && inputVal[names[index]]}
        onChange={modifyInput}
        type="text"
        inputMode={names[index] == "length" ? "numeric" : "text"}
        InputProps={{
          autoComplete: "off",
          name: names[index],
          onClick: handleOtherClick,
          startAdornment: startClicked && (
            <InputAdornment
              position="start"
              style={{
                marginLeft: "0",
                position: "absolute",
                zIndex: "-20",
              }}
            >
              {startClicked && (
                <p
                  style={{
                    color: "#c4c4c4",
                    fontSize: "1.294rem",
                    paddingLeft: "0px",
                  }}
                >
                  {inputVal[names[index]].trim() == "" && startTextAd[index]}
                </p>
              )}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{
                marginLeft: "0",
              }}
            >
              {inputVal[names[index]].trim() == "" && (
                <BootstrapTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  placement="top"
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  open={open}
                  title={
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        whiteSpace: "normal",
                      }}
                    >
                      {helperText[index]}
                    </Typography>
                  }
                  arrow
                >
                  <HelpOutlineIcon
                    onClick={handleTooltipOpen}
                    ref={adornmentRef}
                    style={{
                      color: helpIconColor,
                      ...helpIconStyle,
                    }}
                  />
                </BootstrapTooltip>
              )}
              {inputVal[names[index]].trim() != "" && (
                <CancelIcon
                  sx={{ color: "black" }}
                  onClick={(e) => clearForm(e, names[index])}
                  style={{ ...cancelIconStyle }}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </ClickAwayListener>
  );
};
export default FormTextField;
