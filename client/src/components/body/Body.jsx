import Container from "@mui/material/Container";
import { containerStyle, containerStyleTwo } from "../../globalStyle";
import { containerPaddingTop, containerTwoPaddingTop } from "./bodystyles.js";
import Form from "../form/Form.jsx";
import { useContext } from "react";
import { ScreenContext } from "../../App";
import { Box } from "@mui/material";
import { boxMargin } from "./bodystyles.js";
import Notfound from "../notfound/Notfound.jsx";
import Found from "../found/Found.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/result-actions";
import { resultActions } from "../../store/result-slice";
import LoadingBar from "../progressbar/Progressbar.jsx";
export default function Body() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.result.loading);
  const dataToShow = useSelector((state) => state.result.result);

  const {
    matches,
    matchesSmallScreen,
    matchesSlightlySmallScreen,
    matchesGreaterThanSlightlySmallScreen,
  } = useContext(ScreenContext);
  const { inputVal, setInputVal } = useContext(ScreenContext);
  const responseNoWordsFound = [{ data: "No Words Found" }];
  const responseWordsFound = [
    {
      data: [
        { key: ["AAAAA", "BBBBB"] },
        { key: ["AAAA"] },
        { key: ["AAA"] },
        { key: ["AA"] },
        { key: ["A"] },
      ],
    },
  ];
  const handleSubmission = (input) => {
    // console.log(typeof responseWordsFound[0].data == "object");
    // console.log(typeof responseNoWordsFound[0].data == "String");
    //console.log(input, input.trim() == "a"

    if (input.trim() == "a" || input.trim() == "A") {
      return responseNoWordsFound;
    } else {
      dispatch(resultActions.search());
      dispatch(fetchData(input));
      return responseWordsFound;
    }
  };
  return (
    <Container
      sx={{
        ...containerStyle,
        ...containerPaddingTop,
        // background: "pink",
      }}
      maxWidth={false}
    >
      <Container
        sx={{
          ...containerStyleTwo,
          ...containerTwoPaddingTop,

          //   background: "pink",
        }}
        maxWidth={false}
      >
        <div style={{ display: "flex" }}>
          {loading && (
            <Box
              style={{
                flexGrow: "1",
                flexShrink: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "280px",
              }}
              sx={{
                marginRight: boxMargin,
              }}
            >
              <LoadingBar />
            </Box>
          )}
          {!loading && (
            <Box
              style={{ flexGrow: "1", flexShrink: "1" }}
              sx={{
                marginRight: boxMargin,
              }}
            >
              {dataToShow.data.map((item, index) => {
                return item != null && typeof item.key == "string" ? (
                  <Notfound key={item.key} />
                ) : (
                  // item != null && <Found key={item.key} />
                  // item.data[0].key[0]
                  item != null && (
                    <Found
                      key={index}
                      itemObj={item}
                      numOfLetters={dataToShow.data.length - 1 - index}
                    />
                  )
                  // item.key.map((itemObj) => {
                  //   return <p>{itemObj}</p>;
                  // })
                );
              })}
              {/* {inputVal.submitCalled
                ? handleSubmission(inputVal.submittedLetters).map((item) => {
                    return typeof item.data == "string" ? (
                      <Notfound key={item.data} />
                    ) : (
                      // item.data[0].key[0]
                      item.data.map((itemObj, index) => {
                        //   return <p>{itemObj.key[0]}</p>;
                        return (
                          // Letter count grouped
                          // <div key={index}>
                          //   {itemObj.key.map((entry, index) => {
                          //     return <span key={index}>{entry}</span>;
                          //   })}
                          // </div>
                          <Found key={index} />
                        );
                      })
                    );
                  })
                : ""} */}
            </Box>
          )}
          {matchesGreaterThanSlightlySmallScreen && (
            <div
              style={{ flexGrow: "1", flexShrink: "0", maxWidth: "23.125rem" }}
            >
              {/* Start of search box */}
              <div
                className="boxShadow"
                style={{
                  border: "1px solid",
                  borderRadius: "11px",
                  borderColor: "#c4c4c4",
                  padding: "20px",
                  position: "sticky",
                  top: "0",
                }}
              >
                <Form />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Container>
  );
}
