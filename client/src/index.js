import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { createMuiTheme, CssBaseline } from "@mui/material";
import SegoeUI from "./fonts/font/SegoeUI.woff2";
import store from "./store";
import { Provider } from "react-redux";
// import weblysleekuil from "./fonts/weblysleekuil.ttf";
const root = ReactDOM.createRoot(document.getElementById("root"));
const BREAKPOINTS = {
  xs: 0,
  sm: 767,
  md: 1024,
  lg: 1170,
  xl: 1536,
};

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS,
  },
};
const theme = createTheme({
  typography: {
    // fontFamily: "WeblySleek_UI_Normal,Serif",
    fontFamily: [
      "-apple-system",
      "system-ui",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  drawerWidths: {
    drawerWidthSm: "47.5%",
    drawerWidthXs: "78.5%",
  },
  drawerHeights: {
    drawerHeightLg: "4.375rem",
    drawerHeightSm: "3.938rem",
    drawerHeightXs: "2.875rem",
  },
  eTransferLogoWidths: {
    closeIconWidth: "1.6rem",
    eTransferLogoWidthMd: "2.8rem",
    eTransferLogoWidthLg: "100%",
  },
  appBarBackground: {
    color: "#4daadd",
  },
  appButton: {
    color: "#00FF00",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SegoeUI';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SegoeUI'), local('SegoeUI'), url(${SegoeUI}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },

  ...breakpointsValues,
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
