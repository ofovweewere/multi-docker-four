import express from "express";
import bodyParser from "body-parser";
import indexRoute from "./routes/index.js";
import cors from "cors";
const app = express();
// Parse JSON bodies
app.use(cors());
app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/path", indexRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  console.log("Node server started");
});
