import Chart from "./layout/Chart";
import Counter from "./layout/Counter";
import Table from "./layout/Table";

const Dashboard = () => {
  return (
    <div className="col main pt-5 mt-3 border-1">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-sm-offset-5">
          <Counter />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-sm-offset-5">
          <Chart />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-sm-offset-5">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
