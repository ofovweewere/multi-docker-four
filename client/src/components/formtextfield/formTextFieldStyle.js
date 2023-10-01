export const textfieldStyle = {
  //   height: "2.875rem",
  //   background: "#fff",
  //   border: "1px solid black",
  //   borderRadius: "32px",

  "& input": {
    boxSizing: "border-box",
    padding: "0.438rem 0rem 0.438rem 0px",
    textTransform: "uppercase",
    fontSize: "1.294rem",
  },

  "& fieldset": {
    border: "1px solid black !important",
    height: "3.16rem",
  },

  "& .MuiInputLabel-outlined": {
    // Styles for the label
    fontSize: "1.294rem", // Adjust the value as per your preference
    // color: "#a2a2a2",
    color: "#232427",
    marginLeft: "-10.0px", // Adjust the value as per your preference
    marginTop: "-7.0px",
    textTransform: "capitalize",
    zIndex: "-20",
  },

  //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //     border: "2px solid blue",
  //   },
  "& .MuiOutlinedInput-root": {
    height: "3.16rem",
    border: "0px solid black",
    borderRadius: "32px", // Adjust the value as per your preference
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    height: "3.16rem",
    fontSize: "1.294rem",
    //border: "1px solid black",
    borderColor: "black",
    borderRadius: "32px", // Adjust the value as per your preference
    textTransform: "Capitalize",
  },

  "& .MuiInputLabel-outlined.Mui-focused": {
    // Styles for the focused label
    fontSize: "1.294rem",
    textTransform: "capitalize", // Capitalize when focused
  },
};

export const helpIconStyle = {
  cursor: "default",
};

export const cancelIconStyle = {
  cursor: "pointer",
};
