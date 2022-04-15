import React from "react";
import "./chart.css";
import Linechart from "./LineChart";
function Chart() {
  return (
    <div className="chart_section">
      <div className="char_part">
        <div className="head">
          <div className="sales_head">
            <p className="sales_head_para">Sales Detail</p>
            <div className="box_chart mb-5">
              <div className="all_content">
                <div className="row justify-content-between">
                  <div className="col-6 first_content ">
                    <p>Total Sales Overview</p>
                    <p className="dark_content">7 - 13 Aug, 2020</p>
                  </div>
                  <div className="col-4 second_content ">
                    <div className="second_sub_content">
                      <p className="dark_content">
                        <span>
                          <i class="fa fa-refresh" aria-hidden="true"></i>
                        </span>
                        <span>Refresh Metrics</span>
                      </p>
                      <p className="filter">
                        <span className="filter_by">Filter By | </span>
                        <span className="week">
                          This week
                          <i
                            style={{ marginLeft: "5px" }}
                            class="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  marginTop: "20px",
                  marginBottom: "0px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              />

              <div>
                <div>
                  <div>
                    <div className="row">
                      <div className="col-9 left_side_1">
                        <div className="chare_part_content">
                          <div className="row justify-content-between">
                            <div className="col-6 first_content ">
                              <h1>$74,729.00</h1>
                              <p className="trend">
                                <span>
                                  <i
                                    style={{ marginRight: "10px" }}
                                    class="fa-solid fa-arrow-trend-up"
                                  ></i>
                                </span>
                                +21% from last week
                              </p>
                            </div>
                            <div className="col-5 second_content ">
                              <div className="second_sub_content">
                                <p className="higest">
                                  <span>
                                    <i class="fas fa-chart-line"></i>
                                  </span>
                                  Higest revenue since 2 weeks ago
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="line_chart mb-2">
                            <Linechart />
                          </div>
                        </div>
                      </div>
                      <div className="col-3 left_side_2">
                        <p className="filter_by" style={{ paddingTop: "20px" }}>
                          Total Profit
                        </p>
                        <h3 className="profilt_total">$12,545.00</h3>
                        <p className="trend">
                          <span>
                            <i
                              style={{ marginRight: "10px" }}
                              class="fa-solid fa-arrow-trend-up"
                            ></i>
                          </span>
                          +23% from last week
                        </p>
                        <p className="products_total">Total Products Sold</p>
                        <h2>329</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
