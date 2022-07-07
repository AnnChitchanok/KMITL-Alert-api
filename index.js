"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const alertRoutes = require("./routes/alert-routes");
const typeRoutes = require("./routes/type-routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes.routes);
app.use("/api", alertRoutes.routes);
app.use("/api", typeRoutes.routes);
app.use("/api", authRoutes.routes);

app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);
