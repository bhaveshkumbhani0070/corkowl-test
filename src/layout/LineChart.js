import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "MON",
    value: 2400,
  },
  {
    name: "TUE",
    value: 1398,
  },
  {
    name: "WED",
    value: 9800,
  },
  {
    name: "THU",
    value: 3908,
  },
  {
    name: "FRI",
    value: 4800,
  },
  {
    name: "SAT",
    value: 3800,
  },
  {
    name: "SUN",
    value: 4300,
  },
];

function Linechart() {
  return (
    <ResponsiveContainer aspect={4}>
      <LineChart
        width={300}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Line dataKey="value" stroke="#2FCA72" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Linechart;
