import { Box } from "@mui/material";
import {
  boxPaddingLeft,
  boxPaddingRight,
  boxPaddingTop,
  boxPaddingBottom,
  headerFontWeight,
  headerFontSize,
  headerMarginBottom,
} from "./notfound.js";
const Notfound = (props) => {
  return (
    <Box
      sx={{
        paddingLeft: boxPaddingLeft,
        paddingRight: boxPaddingRight,
        paddingTop: boxPaddingTop,
        paddingBottom: boxPaddingBottom,
      }}
    >
      <Box
        sx={{
          fontWeight: headerFontWeight,
          fontSize: headerFontSize,
          margin: "0px",
          padding: "0px",
          marginBottom: headerMarginBottom,
        }}
      >
        No Words Found
      </Box>
      <p style={{ marginTop: "0px", fontSize: "0.9375rem" }}>
        Sorry, there are no exact matches, but adjusting the in your search can
        help you get more results.
      </p>
    </Box>
  );
};

export default Notfound;
