import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import headerLogo from "../../headerLogo3.png";
import { navText, navLogo } from "./searchmobileform.js";
import { ScreenContext } from "../../App";
import { containerStyle } from "../../globalStyle";
import Form from "../form/Form.jsx";
export default function SearchMobileBar() {
  const muiTheme = useTheme();
  const { matches, matchesSmallScreen, matchesSlightlySmallScreen } =
    useContext(ScreenContext);
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: "0", zIndex: "2000" }}>
      <AppBar
        position="static"
        style={{
          background: muiTheme.appBarBackground.color,
          boxShadow: "none",
        }}
      >
        <Container
          sx={{
            ...containerStyle,
          }}
          maxWidth={false}
        >
          {matchesSlightlySmallScreen && (
            <div>
              <Form />
            </div>
          )}
        </Container>
      </AppBar>
    </Box>
  );
}
