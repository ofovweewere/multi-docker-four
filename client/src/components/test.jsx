// import React from "react";
// import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";

// const StyledOutlinedInput = styled(OutlinedInput)`
//   position: relative;
//   border-radius: 32px;
// `;

// const StyledIconButton = styled(IconButton)`
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   background-color: green;
//   border-top-left-radius: 32px;
//   border-bottom-left-radius: 32px;
//   padding: 6px;
// `;

// const SearchOutlinedInput = () => {
//   return (
//     <StyledOutlinedInput
//       startAdornment={
//         <InputAdornment position="start">
//           <StyledIconButton>
//             <SearchIcon />
//           </StyledIconButton>
//         </InputAdornment>
//       }
//       placeholder="Search"
//       fullWidth
//     />
//   );
// };

// export default SearchOutlinedInput;

// import React from "react";
// import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled } from "@mui/system";

// const StyledOutlinedInput = styled(OutlinedInput)`
//   border-radius: 32px;
//   padding-top: 6px; /* Adjust as needed */
//   padding-bottom: 6px; /* Adjust as needed */
//   margin-bottom: 0; /* Adjust as needed */
// `;

// const StyledIconButton = styled(IconButton)`
//   background-color: green;
//   border-radius: 32px;
// `;

// const SearchOutlinedInput = () => {
//   return (
//     <StyledOutlinedInput
//       startAdornment={
//         <InputAdornment position="start">
//           <StyledIconButton>
//             <SearchIcon />
//           </StyledIconButton>
//         </InputAdornment>
//       }
//       placeholder="Search"
//       fullWidth
//     />
//   );
// };

// export default SearchOutlinedInput;

import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MyComponent = () => {
  return (
    <OutlinedInput
      type="search"
      placeholder="Enter text"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      inputProps={{
        "data-testid": "search-input",
      }}
      sx={{
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
      }}
    />
  );
};

export default MyComponent;
