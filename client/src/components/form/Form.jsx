import { Visibility, VisibilityOff } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  useTheme,
} from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import { useRef, useState, useContext } from "react";
import { ScreenContext } from "../../App";
import { outlinedStyle } from "./formStyle.js";
import { Typography } from "@mui/material";
import { alphabeticFilter } from "../../utilities/filter.js";
import FormTextField from "../formtextfield/FormTextField.jsx";
import Button from "../button/Button.jsx";
import Test from "../test.jsx";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/result-actions";
import { resultActions } from "../../store/result-slice";

const LoginInputFormControl = (props) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSearch = () => {
    console.log("Search");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  const {
    matches,
    matchesSmallScreen,
    matchesSlightlySmallScreen,
    matchesGreaterThanSlightlySmallScreen,
  } = useContext(ScreenContext);
  const muiTheme = useTheme();
  const [closeToolTip, setCloseToolTip] = useState(-1);
  const [isInvalid, setIsInvalid] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayClass, setDisplayClass] = useState("hide");
  const { inputVal, setInputVal } = useContext(ScreenContext);

  const modifyInput = (e) => {
    e.target.value = alphabeticFilter(e.target.value);
    setInputVal({ ...inputVal, [e.target.name]: e.target.value.trim() });
    setIsInvalid(false);
  };

  const clearForm = (e, name) => {
    setInputVal({
      yourLetters: "",
      starts: "",
      ends: "",
      length: "",
      submitCalled: false,
      submittedLetters: "",
    });
    dispatch(resultActions.clearData());
  };

  const names = ["yourLetters", "starts", "ends", "length"];

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target[0].blur();

    if (inputVal && inputVal[names[0]].trim() == "") {
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, 1000);
    } else {
      if (inputRef.current) {
        inputRef.current.blur();
      }
      setInputVal({
        ...inputVal,
        submitCalled: true,
        submittedLetters: inputVal.yourLetters,
      });
      dispatch(resultActions.search());
      let letterForSubmit =
        inputVal.yourLetters === "" ? null : inputVal.yourLetters.toLowerCase();
      let startForSubmit =
        inputVal.starts === "" ? null : inputVal.starts.toLowerCase();
      let endForSubmit =
        inputVal.ends === "" ? null : inputVal.ends.toLowerCase();
      let lengthForSubmit =
        inputVal.length === "" ? null : parseInt(inputVal.length, 10);
      dispatch(
        fetchData({
          letterForSubmit,
          startForSubmit,
          endForSubmit,
          lengthForSubmit,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl style={{ width: "100%" }}>
        <>
          {/* YOUR LETTERS INPUT */}
          <OutlinedInput
            type="search"
            inputRef={inputRef}
            id={names[0]}
            aria-describedby="my-helper-text"
            inputProps={{
              autoComplete: "off",
              name: names[0],
              ...(isInvalid && {
                style: { color: "red" },
              }),
            }}
            value={inputVal && inputVal[names[0]]}
            onChange={modifyInput}
            startAdornment={
              matchesSlightlySmallScreen && (
                <InputAdornment
                  position="start"
                  sx={{ position: "absolute", left: "-5px" }}
                >
                  <Button searchOutlined="true" handleSubmit={handleSubmit} />
                </InputAdornment>
              )
            }
            endAdornment={
              <InputAdornment position="end" style={{ marginLeft: "0" }}>
                <IconButton
                  aria-label="cancel icon"
                  onClick={(e) => clearForm(e, names[0])}
                  //   onMouseDown={handleMouseDownPassword}
                  //   onMouseUp={handleMouseDownPassword}
                  edge="end"
                  sx={{ color: "black" }}
                >
                  {inputVal && inputVal[names[0]] != "" && <CancelIcon />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="YOUR LETTERS"
            sx={{
              ...outlinedStyle,
              "& input": {
                boxSizing: "border-box",
                padding: "0.438rem 0rem 0.438rem 0.813rem",
                textTransform: "uppercase",
                fontSize: "1.294rem",
                paddingLeft: matchesSlightlySmallScreen ? "50px" : "7.008px",
              },
              '& input[type="search"]::-ms-clear': {
                display: "none",
              },
              '& input[type="search"]::-ms-reveal': {
                display: "none",
              },
              '& input[type="search"]::-webkit-search-cancel-button': {
                display: "none",
              },
              '& input[type="search"]::-webkit-search-decoration': {
                display: "none",
              },
              marginTop: matchesSlightlySmallScreen ? "12px" : "0px",
              borderColor: matchesSlightlySmallScreen ? "transparent" : "black",
            }}
          />

          {/* OTHER INPUTS */}

          {/* Form */}
          {/* Large Screen */}
          {!matchesSlightlySmallScreen && (
            <div>
              <div
                style={{
                  background: "white",
                  padding: matchesSlightlySmallScreen ? "16px" : "0px",
                  marginTop: matchesSlightlySmallScreen ? "12px" : "0px",
                  borderRadius: "0.5rem",
                }}
              >
                <div className="grid">
                  {names.map((name, index) => {
                    const className = `gridItem${index} gridZIndex`;

                    if (index > 0) {
                      return (
                        <div key={index} className={className}>
                          <FormTextField
                            index={index}
                            closeToolTipP={index == closeToolTip ? false : true}
                            setCloseToolTipP={setCloseToolTip}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
                {/* button */}
                <div style={{ marginTop: "16px" }}>
                  <Button handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          )}
          {/* Small screen */}
          {matchesSlightlySmallScreen && (
            <div className={displayClass}>
              <div
                style={{
                  background: "white",
                  padding: matchesSlightlySmallScreen ? "16px" : "0px",
                  marginTop: matchesSlightlySmallScreen ? "12px" : "0px",
                  borderRadius: "0.5rem",
                }}
              >
                <div className="grid">
                  {names.map((name, index) => {
                    const className = `gridItem${index} gridZIndex`;

                    if (index > 0) {
                      return (
                        <div key={index} className={className}>
                          <FormTextField
                            index={index}
                            closeToolTipP={index == closeToolTip ? false : true}
                            setCloseToolTipP={setCloseToolTip}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
                {/* button */}
                <div style={{ marginTop: "16px" }}>
                  <Button handleSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          )}

          {/* Advanced options */}
          {matchesSlightlySmallScreen && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="boxShadowTwo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "black",
                  borderRadius: "0.5rem",
                  height: "50px",
                  width: "80%",
                  border: "0px solid black",
                  borderRadius: "0px 0px 1.5rem 1.5rem",
                  color: "white",
                  fontSize: "1rem",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  displayClass == "hide"
                    ? setDisplayClass("show")
                    : setDisplayClass("hide");
                }}
              >
                <div>
                  <FilterAltOutlinedIcon />
                </div>
                <div>Advanced options</div>
              </button>
            </div>
          )}
        </>
      </FormControl>

      <br />
    </form>
  );
};

export default LoginInputFormControl;
