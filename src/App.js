import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
