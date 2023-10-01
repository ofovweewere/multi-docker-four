import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import {
  boxPaddingLeft,
  boxPaddingRight,
  boxPaddingTop,
  boxPaddingBottom,
  boxTwoPaddingLeft,
  boxTwoPaddingRight,
  boxTwoPaddingTop,
  boxTwoPaddingBottom,
  headerFontSize,
  headerTwoFontSize,
  boxMarginTop,
  boxBorderRadius,
  boxTwoBorderRadius,
} from "./found.js";
import FoundButton from "../foundbutton/Foundbutton.jsx";
import MoreButton from "../morebutton/Morebutton.jsx";

import { debounce } from "lodash";
const Found = (props) => {
  const { itemObj, numOfLetters } = props;
  const containerRef = useRef(null);
  const [size, setSize] = useState(window.innerWidth);
  const [prevSize, setPrevSize] = useState(window.innerWidth);
  const [called, setCalled] = useState(false);
  const [heightState, setHeightState] = useState(250);
  const [moreButton, setMoreButton] = useState(true);
  const [hideShowMore, setHideShowMore] = useState(false);

  //   const checkSize = () => {
  //     //console.log(window.innerWidth);
  //     //setSize(window.innerWidth);
  //     const container = containerRef.current;
  //     const containerHeight = container.clientHeight;
  //     // const columnHeight = container.firstElementChild.clientHeight;
  //     const columnHeight = container.firstElementChild.offsetHeight + 16;
  //     const numRows = Math.floor(containerHeight / columnHeight);
  //     console.log(
  //       numRows,
  //       "nr",
  //       columnHeight,
  //       "ch",
  //       containerHeight,
  //       "conHeight"
  //     );

  //     const containerWidth = container.clientWidth;
  //     const columnWidth = container.firstElementChild.offsetWidth; // Replace with the actual fixed width of each column div

  //     const numColumnsInRow = Math.floor(containerWidth / columnWidth);
  //     console.log(
  //       containerWidth,
  //       "cW",
  //       columnWidth,
  //       "cw",
  //       numColumnsInRow,
  //       "conWidth"
  //     );
  //     const rows = Array.from(container.children);
  //     rows.forEach((row) => (row.style.display = ""));
  //     const hiddenRows = Array.from(container.children).slice(
  //       numRows * numColumnsInRow
  //     );
  //     //console.log(hiddenRows);
  //     hiddenRows.forEach((row) => (row.style.display = "none"));
  //   };
  //   useEffect(() => {
  //     console.log("useEffect");
  //     window.addEventListener("resize", checkSize);
  //     return () => {
  //       console.log("cleanup");
  //       window.removeEventListener("resize", checkSize);
  //     };
  //   }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleResize = debounce(() => {
      const currentSize = container.clientWidth;

      if (currentSize !== prevSize || moreButton) {
        const containerHeight = heightState;
        const columnHeight = container.firstElementChild
          ? container.firstElementChild.offsetHeight + 16
          : 16;
        const numRows = Math.floor(containerHeight / columnHeight);
        const containerWidth = container.clientWidth;
        const columnWidth = container.firstElementChild
          ? container.firstElementChild.offsetWidth + 16
          : 16;
        const numColumnsInRow = Math.floor(containerWidth / columnWidth);

        const rows = Array.from(container.children);
        rows.forEach((row) => (row.style.display = ""));
        const hiddenRows = Array.from(container.children).slice(
          numRows * numColumnsInRow
        );
        hiddenRows.forEach((row) => (row.style.display = "none"));

        // console.log(
        //   "nr",
        //   numRows,
        //   "nc",
        //   numColumnsInRow,
        //   containerHeight,
        //   columnHeight,
        //   containerWidth,
        //   columnWidth,
        //   hiddenRows.length == 0,
        //   heightState
        // );
        setPrevSize(currentSize);
        setCalled(true);
        setMoreButton(false);
        hiddenRows.length == 0 ? setHideShowMore(true) : setHideShowMore(false);
      }
    }, 0); // Adjust the debounce delay as needed

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.unobserve(container);
    };
  }, [prevSize, moreButton]);

  //   useEffect(() => {
  //     const container = containerRef.current;

  //     const resizeObserver = new ResizeObserver((entries) => {
  //       for (const entry of entries) {
  //         const containerHeight = entry.contentRect.height;
  //         const columnHeight = container.firstElementChild.offsetHeight + 16;
  //         const numRows = Math.floor(containerHeight / columnHeight);

  //         const rows = Array.from(container.children);

  //         const containerWidth = entry.contentRect.width;
  //         const columnWidth = container.firstElementChild.offsetWidth; // Replace with the actual fixed width of each column div

  //         const numColumnsInRow = Math.floor(containerWidth / columnWidth);

  //         // const rows = Array.from(container.children);
  //         rows.forEach((row) => (row.style.display = ""));
  //         const hiddenRows = Array.from(container.children).slice(
  //           numRows * numColumnsInRow
  //         );
  //         //console.log(hiddenRows);
  //         hiddenRows.forEach((row) => (row.style.display = "none"));
  //       }
  //     });

  //     resizeObserver.observe(container);

  //     return () => {
  //       resizeObserver.unobserve(container);
  //     };
  //   }, []);
  //   useEffect(() => {
  //     const container = containerRef.current;
  //     const containerHeight = container.clientHeight;
  //     // const columnHeight = container.firstElementChild.clientHeight;
  //     const columnHeight = container.firstElementChild.offsetHeight + 16;
  //     const numRows = Math.floor(containerHeight / columnHeight);
  //     console.log(
  //       numRows,
  //       "nr",
  //       columnHeight,
  //       "ch",
  //       containerHeight,
  //       "conHeight"
  //     );

  //     const containerWidth = container.clientWidth;
  //     const columnWidth = container.firstElementChild.offsetWidth; // Replace with the actual fixed width of each column div

  //     const numColumnsInRow = Math.floor(containerWidth / columnWidth);
  //     console.log(
  //       containerWidth,
  //       "cW",
  //       columnWidth,
  //       "cw",
  //       numColumnsInRow,
  //       "conWidth"
  //     );
  //     const rows = Array.from(container.children);
  //     rows.forEach((row) => (row.style.display = ""));
  //     const hiddenRows = Array.from(container.children).slice(
  //       numRows * numColumnsInRow
  //     );
  //     //console.log(hiddenRows);
  //     hiddenRows.forEach((row) => (row.style.display = "none"));
  //   }, []);

  const muiTheme = useTheme();
  const vals = [
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
    "20",
  ];

  return (
    <Box
      className="boxShadow"
      sx={{
        marginBottom: "40px",
        marginTop: boxMarginTop,
        border: "1px solid",
        borderRadius: boxBorderRadius,
        borderColor: "#c4c4c4",
      }}
    >
      <Box
        style={{
          height: "32px",
          background: muiTheme.appBarBackground.color,
          display: "flex",
          alignItems: "start",
          justifyContent: "bottom",
          color: "#ffffff",
        }}
        sx={{
          paddingLeft: boxPaddingLeft,
          paddingRight: boxPaddingRight,
          paddingTop: boxPaddingTop,
          paddingBottom: boxPaddingBottom,
          fontSize: headerFontSize,
          fontWeight: "700",
          borderRadius: boxTwoBorderRadius,
        }}
      >
        <div> {numOfLetters} Letter Words</div>
      </Box>
      <Box
        sx={{
          paddingLeft: boxTwoPaddingLeft,
          paddingRight: boxTwoPaddingRight,
          paddingTop: boxTwoPaddingTop,
          paddingBottom: boxTwoPaddingBottom,
          fontSize: headerTwoFontSize,
          color: "#3c3d50",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxHeight: heightState,
            overflow: "hidden",
          }}
          ref={containerRef}
        >
          {called &&
            itemObj.key.map((item, index) => (
              <FoundButton key={index} name={item} />
            ))}
        </div>
      </Box>
      {/* More button */}
      {!hideShowMore && (
        <MoreButton
          heightState={heightState}
          setHeightState={setHeightState}
          setMoreButton={setMoreButton}
        />
      )}
    </Box>
  );
};

export default Found;
