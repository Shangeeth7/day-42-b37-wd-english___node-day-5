const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const mongodbConnection = require("./config/mongodbConnection");
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/", (req, res) => res.send("Hello World!"));
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = 6572;
app.listen(port, () => console.log(`Node JS Server Running On Port ${port}!`));
