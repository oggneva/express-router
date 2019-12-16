const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/", routes);
app.use("/context", routes);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});