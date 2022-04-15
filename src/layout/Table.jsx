import React, { useState } from "react";
import "./Table.css";

const Table = () => {
  const Users = [
    {
      id: 1,
      selected: false,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      selected: false,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      selected: false,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      selected: true,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      selected: false,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
  ];

  const [List, setList] = useState(Users);
  const [MasterChecked, setMasterChecked] = useState(false);
  const [SelectedList, setSelectedList] = useState([]);
  const [showme, setShowme] = useState(0);

  const ShowMore = (e, item) => {
    if (showme === item.id) {
      setShowme(0);
    } else {
      setShowme(item.id);
    }
  };
  const onMasterCheck = (e) => {
    let tempList = List;
    tempList.map((user) => (user.selected = e.target.checked));

    setMasterChecked(e.target.checked);
    setList(tempList);
    setSelectedList(List.filter((e) => e.selected));
  };

  const onItemCheck = (e, item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setMasterChecked(totalItems === totalCheckedItems);
    setList(tempList);
    setSelectedList(List.filter((e) => e.selected));
  };

  return (
    <>
      <div className="row ">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h5 className="mt-3 mb-3 text-head">Inventory</h5>
          <table id="wanteditems" class="table">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                </th>
                <th>Product</th>
                <th>Rating</th>
                <th>Vintage</th>
                <th>Qty</th>
                <th>Volume</th>
                <th>Cost</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {List.map((user) => (
                <>
                  <tr onClick={(e) => ShowMore(e, user)}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        id="rowcheck{user.id}"
                        onChange={(e) => onItemCheck(e, user)}
                      />
                    </th>
                    <td>
                      <span class="dropdown-table">
                        <img src="img/sample.svg" alt="info" />
                        <div className="title-img">
                          <h1>Staglin Family Vineyard...</h1>
                          <h2>France · Sauternes </h2>
                        </div>
                      </span>
                    </td>
                    <td>
                      <span className="label-text label-text-gray">RP 95</span>
                      <span className="label-text label-text-gray">+3</span>
                    </td>
                    <td class="wrapped">6</td>
                    <td class="wrapped">WEB-DL</td>
                    <td class="wrapped">720P</td>
                    <td class="wrapped">H264</td>
                    <td class="wrapped">NTB</td>
                    <td>
                      <span
                        className={
                          "arrow " + (showme === user.id ? "up" : "down")
                        }
                      ></span>
                    </td>
                  </tr>
                  {showme === user.id && (
                    <>
                      <tr>
                        <td colSpan={9}>
                          <div className="about-more">
                            <div className="first-head">
                              <div className="title-img-align title-img">
                                <h1>Staglin Family Vineyard...</h1>
                                <h2>
                                  <span>Region:</span> United States ·
                                  California · Blends
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
                                    <span className="label-text label-text-gray">
                                      JS 95
                                    </span>
                                  </div>
                                  <div className="title-des">
                                    <h1>Robert Parker</h1>
                                    <span className="label-text label-text-gray">
                                      RP 80
                                    </span>
                                  </div>
                                  <div className="title-des">
                                    <h1>Antonio Galloni’s</h1>
                                    <span className="label-text label-text-gray">
                                      ...
                                    </span>
                                  </div>
                                  <div className="title-des">
                                    <h1>Wine Spectator Tasting</h1>
                                    <span className="label-text label-text-gray">
                                      WS 79
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="content-des">
                                <p>Stock</p>
                                <div className="des-content">
                                  <div className="title-des">
                                    <h1>Possimus</h1>
                                    <span className="label-text label-text-red">
                                      JS 95
                                    </span>
                                  </div>
                                  <div className="title-des">
                                    <h1>Downtown Condo</h1>
                                    <span className="label-text label-text-red">
                                      RP 80
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
