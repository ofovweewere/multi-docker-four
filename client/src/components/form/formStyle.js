export const outlinedStyle = {
  height: "2.875rem",
  background: "#fff",
  border: "1px solid black",
  borderRadius: "32px",

  "& input": {
    boxSizing: "border-box",
    padding: "0.438rem 0rem 0.438rem 0.813rem",
    textTransform: "uppercase",
    fontSize: "1.294rem",
  },

  "& fieldset": {
    border: "0px solid transparent",
  },

  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent",
    },
  },
};
