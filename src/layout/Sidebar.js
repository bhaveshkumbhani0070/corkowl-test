import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menu = [
    {
      key: "Dashboard",
      value: "/",
      icon: "desktop",
      active: true,
    },
    {
      key: "Inventory",
      value: "/",
      icon: "invert",
      active: false,
    },
    {
      key: "Orders",
      value: "/",
      icon: "order",
      active: false,
    },
    {
      key: "Customers",
      value: "/",
      icon: "customer",
      active: false,
    },
    {
      key: "Reports",
      value: "/",
      icon: "report",
      active: false,
    },
    {
      key: "Settings",
      value: "/",
      icon: "setting",
      active: false,
    },
  ];
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas p-0"
      id="sidebar"
      role="navigation"
    >
      <ul className="nav flex-column sticky-top pt-5  mt-3 menu-list">
        {menu.map((data) => {
          return (
            <li className={`nav-item  p-1 ${data.active ? "active" : ""}`}>
              <a className={`nav-link text-menu`} href="#">
                <img src={`img/${data.icon}.svg`} />
                <span className="ml-3">{data.key}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="fixed-bottom ml-1 copy">
        <h5>CorlOwl</h5>
        <p className="inner_copy">
          <span>c</span>2020 Cork Owl , All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
