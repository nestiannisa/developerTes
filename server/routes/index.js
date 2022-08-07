const Router = require("express");
const route = Router();

const reportProductRoute = require("./reportProduct");
route.use("/reportProduct", reportProductRoute);

module.exports = route;
