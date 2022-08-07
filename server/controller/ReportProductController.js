const {
  Report_Product,
  Product,
  Brand,
  Store,
  Store_Area,
  Store_Account,
} = require("../models");
const { Op } = require("sequelize");

class ReportProductController {
  static async showReport(req, res) {
    try {
      let result = await Report_Product.findAll({
        include: [
          { model: Product, include: [{ model: Brand }] },
          {
            model: Store,
            include: [{ model: Store_Area }, { model: Store_Account }],
          },
        ],
        order: [["id", "ASC"]],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showReportSum(req, res) {
    try {
      let result = await Report_Product.findAll({
        include: [
          { model: Product, include: [{ model: Brand }] },
          {
            model: Store,
            include: [{ model: Store_Area }, { model: Store_Account }],
          },
        ],
        order: [["id", "ASC"]],
      });

      const summedResponse = result.reduce((acc, cur) => {
        let inAcc = false;
        acc.forEach((o) => {
          if (o.Product.Brand.brand_name == cur.Product.Brand.brand_name) {
            // if obj store is already in new array, increase sum
            if (
              o.Store.Store_Area.area_name == cur.Store.Store_Area.area_name
              ) {
                o.compliance += cur.compliance;
                inAcc = true;
              }
            }
          });
          if (!inAcc) {
            acc.push(cur); // if obj store isn't already in new array, add it
          }
          return acc;
        }, []);
      //const sum = (summedResponse/144)*100
      res.status(200).json(summedResponse);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showReportArea(req, res) {
    try {
      let result = await Report_Product.findAll({
        include: [
          { model: Product, include: [{ model: Brand }] },
          {
            model: Store,
            include: [{ model: Store_Area }, { model: Store_Account }],
          },
        ],
        order: [["id", "ASC"]],
      });

      const summedResponse = result.reduce((acc, cur) => {
        let inAcc = false;
        acc.forEach((o) => {
          if (o.Store.Store_Area.area_name == cur.Store.Store_Area.area_name) {
            o.compliance += cur.compliance;
            inAcc = true;
          }
        });
        if (!inAcc) {
          acc.push(cur); // if obj store isn't already in new array, add it
        }
        return acc;
      }, []);
      //  console.log(summedResponse);
      res.status(200).json(summedResponse);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ReportProductController;
