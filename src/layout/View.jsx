import React from "react";
import "./View.css";

const View = () => {
  return (
    <tr>
      <td colSpan={9}>
        <div className="about-more">
          <div className="first-head">
            <div className="title-img-align title-img">
              <h1>Staglin Family Vineyard...</h1>
              <h2>
                <span>Region:</span> United States · California · Blends
              </h2>
            </div>
            <div className="title-img title-img-1">
              <h2>
                <span>Vintage:</span> 2010
              </h2>
            </div>
            <div className="red-lable">
              <a href="#">View wine</a>
              <img src="img/edit.svg"></img>
              <img src="img/delete.svg"></img>
            </div>
          </div>
          <hr></hr>
          <div className="second-title">
            <div className="content-des">
              <p>Rating</p>
              <div className="des-content">
                <div className="title-des">
                  <h1>James Suckling's</h1>
                  <span className="label-text label-text-gray">JS 95</span>
                </div>
                <div className="title-des">
                  <h1>Robert Parker</h1>
                  <span className="label-text label-text-gray">RP 80</span>
                </div>
                <div className="title-des">
                  <h1>Antonio Galloni’s</h1>
                  <span className="label-text label-text-gray">...</span>
                </div>
                <div className="title-des">
                  <h1>Wine Spectator Tasting</h1>
                  <span className="label-text label-text-gray">WS 79</span>
                </div>
              </div>
            </div>
            <div className="content-des">
              <p>Stock</p>
              <div className="des-content">
                <div className="title-des">
                  <h1>Possimus</h1>
                  <span className="label-text label-text-red">JS 95</span>
                </div>
                <div className="title-des">
                  <h1>Downtown Condo</h1>
                  <span className="label-text label-text-red">RP 80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default View;
