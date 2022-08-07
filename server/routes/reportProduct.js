const reportProductRoute = require("express").Router();
const {ReportProductController} = require("../controller/IndexController")


reportProductRoute.get("/",ReportProductController.showReport)
reportProductRoute.get("/sum",ReportProductController.showReportSum)
reportProductRoute.get("/area",ReportProductController.showReportArea)
module.exports = reportProductRoute;
