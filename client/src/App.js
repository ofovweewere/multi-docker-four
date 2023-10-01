import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import SearchMobileForm from "./components/searchmobileform/Searchmobileform.jsx";
import Body from "./components/body/Body.jsx";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export const ScreenContext = React.createContext();

function App() {
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down("md"));
  const matchesGreaterThanSlightlySmallScreen = useMediaQuery(
    muiTheme.breakpoints.up("sm")
  );
  const matchesSlightlySmallScreen = useMediaQuery(
    muiTheme.breakpoints.down("sm")
  );
  const matchesSmallScreen = useMediaQuery(muiTheme.breakpoints.down("xs"));

  //States
  const [inputVal, setInputVal] = useState({
    yourLetters: "",
    submittedLetters: "",
    starts: "",
    ends: "",
    length: "",
    submitCalled: false,
  });
  return (
    <ScreenContext.Provider
      value={{
        matches,
        matchesSmallScreen,
        matchesSlightlySmallScreen,
        matchesGreaterThanSlightlySmallScreen,
        inputVal,
        setInputVal,
      }}
    >
      <div className="App">
        <Navbar />
        <SearchMobileForm />
        <Body />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
