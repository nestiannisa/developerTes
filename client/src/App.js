import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {
  showReport,
  showReportSum,
  showReportArea,
  showReportGraph,
} from "./action/reportProductAction";

function App() {
  const { showReportResult, showReportSumResult, showReportAreaResult } =
    useSelector((state) => state.reportProduct);

  const rowArea = showReportResult.length;

  const dispatch = useDispatch();

  const dats = JSON.stringify(showReportResult);
  console.log("dats", dats);
  useEffect(() => {
    dispatch(showReport());
    dispatch(showReportSum());
    dispatch(showReportArea());
  }, [dispatch]);

  const [selects, setSelects] = useState(" ");
  const [area, setArea] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelects(area);
  };

  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null,
  });
  console.log(dateFilter);
  return (
    <div className="container_app">
      <h1>Report Data</h1>
      <div className="menu_search">
        <input
          value={area}
          onChange={(event) => setArea(event.target.value)}
          type="text"
        ></input>
        <label>start date:</label>
        <input
          onChange={(event) =>
            setDateFilter({ ...dateFilter, startDate: event.target.value })
          }
          type="date"
        ></input>
        <label>until:</label>
        <input
          onChange={(event) =>
            setDateFilter({ ...dateFilter, endDate: event.target.value })
          }
          type="date"
        ></input>
        <button className="btn_search" onClick={(event) => handleSubmit(event)}>
          {" "}
          Search
        </button>
      </div>
      {showReportAreaResult ? (
        showReportAreaResult.map((a) => {
          const data = {
            labels: [a.Store.Store_Area.area_name],
            datasets: [
              {
                label: "data",
                data: [a.compliance],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          };

          const chartOptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                    min: 0,
                    stepSize: 2,
                    callback: function (value) {
                      return `${value}`;
                    },
                  },
                },
              ],
            },
          };
          return <Bar data={data} height={50} options={chartOptions} />;
        })
      ) : (
        <></>
      )}

      <table className="styled-table">
        <thead>
          <tr>
            <th> Brand</th>
            {showReportAreaResult ? (
              showReportAreaResult
                .filter((area) => {
                  if (
                    area.Store.Store_Area.area_name
                      .toLowerCase()
                      .includes(selects.toLowerCase())
                  ) {
                    return area;
                  } else if (selects === " ") {
                    return area;
                  }
                })
                .map((report) => {
                  return (
                    <>
                      <th>{report.Store.Store_Area.area_name}</th>
                    </>
                  );
                })
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ROTI TAWAR</td>
            {showReportSumResult ? (
              showReportSumResult
                .filter((area) => {
                  if (
                    area.Store.Store_Area.area_name
                      .toLowerCase()
                      .includes(selects.toLowerCase())
                  ) {
                    return area;
                  } else if (selects === " ") {
                    return area;
                  }
                })
                //.filter(row => {
                // let filterPass = true
                // const date = new Date(row.dateYouWannaFilterWith)
                //if (dateFilter.startDate) {
                //filterPass = filterPass && (new Date(dateFilter.startDate) < date)
                // }
                //if (dateFilter.endDate) {
                //filterPass = filterPass && (new Date(dateFilter.endDate) > date)
                //}
                //return filterPass
                //})
                .map((report) => {
                  console.log("F", rowArea);
                  const kom = (report.compliance / rowArea) * 100;
                  const hasil = kom.toFixed(2);
                  return (
                    <>
                      {report.Product.Brand.brand_name === "ROTI TAWAR" ? (
                        <td>{hasil}%</td>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
            ) : (
              <></>
            )}
          </tr>
          <tr>
            <td>SUSU KALENG</td>
            {showReportSumResult ? (
              showReportSumResult
                .filter((area) => {
                  if (
                    area.Store.Store_Area.area_name
                      .toLowerCase()
                      .includes(selects.toLowerCase())
                  ) {
                    return area;
                  } else if (selects === " ") {
                    return area;
                  }
                })
                .map((report) => {
                  console.log("F", rowArea);
                  const kom = (report.compliance / rowArea) * 100;
                  const hasil = kom.toFixed(2);
                  return (
                    <>
                      {report.Product.Brand.brand_name === "SUSU KALENG" ? (
                        <td>{hasil}%</td>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })
            ) : (
              <></>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
