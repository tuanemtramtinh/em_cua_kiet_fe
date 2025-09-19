import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
  { name: "May", users: 600 },
  { name: "Jun", users: 700 },
];

const ChartItem = () => {
  const [chartType, setChartType] = useState("column");

  return (
    <div>
      <div className="mb-4 flex justify-between gap-4 border-b border-gray-300 pb-4">
        <button
          className={`flex-1 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white ${chartType === "column" ? "bg-blue-700" : ""}`}
          onClick={() => setChartType("column")}
        >
          Biểu đồ cột
        </button>
        <button
          className={`flex-1 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white ${chartType === "circle" ? "bg-blue-700" : ""}`}
          onClick={() => setChartType("circle")}
        >
          Biểu đồ tròn
        </button>
      </div>
      <div className="flex justify-center">
        {chartType === "column" && (
          <BarChart
            width={750}
            height={400}
            data={[
              { name: "Page A", Người: 590 },
              { name: "Page B", Người: 290 },
              { name: "Page C", Người: 868 },
            ]}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="Người" />
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <Tooltip />
            <Bar
              dataKey="Người"
              stackId="a"
              fill="#8884d8"
              activeBar={{ stroke: "black", strokeWidth: 7 }}
            />
          </BarChart>
        )}
        {chartType === "circle" && (
          <PieChart width={750} height={500}>
            <Pie
              activeShape={{
                fill: "red",
              }}
              data={[
                { name: "Page A", uv: 590 },
                { name: "Page B", uv: 590 },
                { name: "Page C", uv: 868 },
              ]}
              dataKey="uv"
              label={({ name, value, percent }) =>
                `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
              }
            >
              <Cell fill="#8884d8" />
              <Cell fill="#82ca9d" />
              <Cell fill="#ffc658" />
            </Pie>
            <Tooltip defaultIndex={2} />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default ChartItem;
