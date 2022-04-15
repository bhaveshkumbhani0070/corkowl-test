import React from "react";
import "./counter.css";
function Counter() {
  const data = [
    {
      id: 1,
      label: "Open Orderes",
      total: "239",
      icon: "fa-cart-plus",
    },
    {
      id: 2,
      label: "Orders in transit",
      total: "126",
      icon: "fa-truck-moving",
    },
    {
      id: 3,
      label: "Fullfilled orders",
      total: "1,254",
      icon: "fa-clipboard-check",
    },
    {
      id: 4,
      label: "Cancelled orders",
      total: "35",
      icon: "fa-trash-restore",
    },
  ];
  return (
    <div>
      <div>
        <div className="row justify-content-between">
          <div className="col-3 ">
            <p className="filter_by1 mt-3">Overview</p>
          </div>
          <div className="col-3 btn_part">
            <button className="btn btn-danger">
              <span>
                <i className="fas fa-plus-circle mr-2"></i>
              </span>
              ADD NEW WINE
            </button>
          </div>
        </div>

        <div>
          <div className="header_box">
            <div className="row">
              {data.map((result) => (
                <div className="col-lg-3 col-md-6 col-12">
                  <div className={`box_head ${"shadow" + result.id}`}>
                    <div className="row justify-content-between main">
                      <div className="col-6 first_content ml-3 mt-2">
                        <p className="dark_content">{result.label}</p>
                        <h5>{result.price}</h5>
                      </div>
                      <div className="col-4 second_content ">
                        <div className="second_sub_content">
                          <p className="higest">
                            <span>
                              <i
                                class={`fas  ${result.icon} ${
                                  "color" + result.id
                                }`}
                              ></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
