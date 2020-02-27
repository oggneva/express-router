const express = require("express");
const moment = require("moment");
const routes = require("./routes");

const app = express();
// https://momentjscom.readthedocs.io/en/latest/moment/05-query/06-is-between/
// moment.locale("fi");
const timeFormat = "dddd DD.MM.YYYY HH:mm:ss:SSS"
const start = moment().day(7).hour(3).startOf("hour");
const end = moment().day(7).hour(4).startOf("hour");
const current = moment().day(7).hour(3).minute(0).seconds(0).millisecond(0);
// const current = moment();
console.log(start.format(timeFormat));
console.log(end.format(timeFormat));
console.log(current.format(timeFormat));
console.log(current.isBetween(start, end, null, "[]"));
if (current.isBetween(start, end, null, "[]")) {
  console.log(`${current.format(timeFormat)} is between ${start.format(timeFormat)} and ${end.format(timeFormat)}, redirecting to maintenance page`)
}


app.use((req, res, next) => {
  console.log(`request path ${req.baseUrl}${req.path}`);
  console.log(`url ${req.url}`);
  next();
});

app.use((req, res, next) => {
  const start = moment().day(4).hour(22).minute(0).seconds(0);
  const end = moment().day(4).hour(23).minute(0).seconds(0);
  const current = moment();
  console.log(start.format());
  console.log(end.format());
  console.log(current.format());
  console.log(current.isBetween(start, end));

  if (current.isBetween(start, end)) {
    res.redirect("http://example.org/");
    return;
  }
  next();
});

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

app.use("/", routes);
app.use("/context", routes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});