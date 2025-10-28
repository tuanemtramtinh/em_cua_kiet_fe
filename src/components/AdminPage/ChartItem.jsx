import { useEffect, useMemo, useState } from "react";
import api from "../../lib/axios";
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

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

const ChartItem = () => {
  const [chartType, setChartType] = useState("column");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState({ total: 0, byType: {} });

  const pieData = useMemo(() => {
    const entries = Object.entries(summary.byType || {});
    return entries.map(([name, count]) => ({
      name: name === "khong" ? "Chưa khảo sát" : name,
      uv: count,
    }));
  }, [summary]);

  const barData = useMemo(() => {
    const entries = Object.entries(summary.byType || {});
    return entries.map(([name, count]) => ({
      name: name === "khong" ? "Chưa khảo sát" : name,
      Người: count,
    }));
  }, [summary]);

  const totalPie = useMemo(() => {
    return pieData.reduce(
      (sum, d) => sum + (typeof d.uv === "number" ? d.uv : 0),
      0,
    );
  }, [pieData]);

  const counts = useMemo(() => {
    const byType = summary.byType || {};
    return {
      connect: byType["Người kết nối"] || 0,
      creative: byType["Người sáng tạo"] || 0,
      observer: byType["Người quan sát"] || 0,
      unknown: byType["khong"] || byType["Chưa khảo sát"] || 0,
    };
  }, [summary]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await api.get("/user/summary");
        const data = res.data;
        if (data?.status !== "success") {
          throw new Error(data?.message || "Fetch summary failed");
        }
        setSummary(data.data || { total: 0, byType: {} });
      } catch (e) {
        const msg =
          e?.response?.data?.message || e?.message || "Đã có lỗi xảy ra";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold">Số liệu thống kê người dùng</h3>
      <div className="mb-4 border-b border-gray-300 pb-2">
        <p>
          Người kết nối: <span className="font-semibold">{counts.connect}</span>
        </p>
        <p>
          Người sáng tạo:{" "}
          <span className="font-semibold">{counts.creative}</span>
        </p>
        <p>
          Người quan sát:{" "}
          <span className="font-semibold">{counts.observer}</span>
        </p>
        <p>
          Chưa khảo sát: <span className="font-semibold">{counts.unknown}</span>
        </p>
      </div>
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
      <div className="mb-3 text-sm text-gray-600">
        Tổng người dùng: <span className="font-semibold">{summary.total}</span>
        {loading && <span className="ml-2 text-gray-500">(đang tải...)</span>}
      </div>
      {error && (
        <div className="mb-3 text-red-600">Lỗi tải thống kê: {error}</div>
      )}
      <div className="flex justify-center">
        {chartType === "column" && (
          <BarChart width={750} height={400} data={barData}>
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
          <PieChart width={700} height={400}>
            <Pie
              activeShape={{
                fill: "red",
              }}
              data={pieData}
              dataKey="uv"
              label={({ name, value }) => {
                const pct = totalPie
                  ? ((Number(value) / totalPie) * 100).toFixed(0)
                  : "0";
                return `${name}: ${value} (${pct}%)`;
              }}
            >
              {pieData.map((_, idx) => (
                <Cell key={idx} fill={colors[idx % colors.length]} />
              ))}
            </Pie>
            <Tooltip defaultIndex={2} />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default ChartItem;
