import React from "react";
import "./View.css";

const View = () => {
  return (
    <div className="container-fluid view">
      <div className="row ">
        <div className="col-md-6 details">
          <div className="d-flex justify-content-between">
            <div>
              <p className="all ml-5">Staglin Family Vineyard INEO Red Wine</p>
              <div className=" ml-5">
                <p className="all">
                  Region :{" "}
                  <span className="dark_content">
                    United States-Califronia-Blends
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="all">
                Vintage : <span className="dark_content">2010</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ed_del">
          <div>
            <a href="#">View Wine</a>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <hr style={{ margin: "20px" }}></hr>
      <div className="row rating">
        <div className="col-md-6 ">
          <div className="d-flex ml-5">
            <p className="dark_content mb-3">RATING</p>
          </div>

          <div className="d-flex ml-5 justify-content-between">
            <div>
              <p className="all">james Suckling's</p>
              <p className="back">js 95</p>
            </div>
            <div>
              <p className="all">Robert Paker</p>
              <p className="back">RP 80</p>
            </div>
            <div className="mb-3">
              <p className="all">Antonio Galloni's</p>
              <p className="back">--</p>
            </div>
          </div>
          <div className="ml-5 mb-2">
            <div>
              <p className="all">Wine Spextator Tasting</p>
              <p className="back" style={{ width: "70px" }}>
                WS 79
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="d-flex ml-5">
            <p className="dark_content mb-3">STOCK</p>
          </div>
          <div className="d-flex ">
            <div className="ml-5">
              <p className="all">Possimus</p>
              <p className="count">43 Units</p>
            </div>
            <div className="ml-5 mr-5">
              <p className="all">Doentown Condo</p>
              <p className="count">js 95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
