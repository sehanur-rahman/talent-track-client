import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const COLORS = [
    "#4f46e5",
    "#22c55e",
    "#f97316",
    "#ec4899",
    "#06b6d4",
    "#a855f7",
];

const Analytics = () => {
    const axiosSecure = useAxiosSecure();

    const [stats, setStats] = useState({});
    const [chartData, setChartData] = useState([]);
    const [groupBy, setGroupBy] = useState("university");
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load stats
    useEffect(() => {
        axiosSecure.get("/admin-stats").then(res => setStats(res.data));
    }, [axiosSecure]);

    // Load chart data
    useEffect(() => {
        axiosSecure
            .get(`/admin-application-stats?by=${groupBy}`)
            .then(res => {
                const formatted = res.data.map(item => ({
                    name: item._id || "Unknown",
                    value: item.count,
                }));
                setChartData(formatted);
            });
    }, [axiosSecure, groupBy]);

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold mb-8">Analytics</h2>

            {/* ================= Stats Cards ================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <StatCard title="Total Users" value={stats.users} />
                <StatCard title="Total Scholarships" value={stats.scholarships} />
                <StatCard
                    title="Total Fees Collected"
                    value={`$${stats.totalFees}`}
                />
            </div>

            {/* ================= Chart Section ================= */}
            <div className="bg-white rounded-2xl shadow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h3 className="text-xl font-bold">
                        Applications Overview
                    </h3>

                    <select
                        value={groupBy}
                        onChange={e => setGroupBy(e.target.value)}
                        className="select select-bordered w-full md:w-64"
                    >
                        <option value="university">
                            By University
                        </option>
                        <option value="category">
                            By Scholarship Category
                        </option>
                    </select>
                </div>

                {/* ===== Responsive Chart ===== */}
                {chartData.length === 0 ? (
                    <p className="text-center text-gray-500 py-10">
                        No application data available
                    </p>
                ) : isMobile ? (
                    // 📱 PIE CHART (Mobile)
                    <div className="flex justify-center">
                        <PieChart width={300} height={300}>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={110}
                                label
                            >
                                {chartData.map((_, i) => (
                                    <Cell
                                        key={i}
                                        fill={COLORS[i % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                ) : (
                    // 🖥️ BAR CHART (Desktop)
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData}>
                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Bar
                                dataKey="value"
                                fill="#4f46e5"
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default Analytics;

/* ================= Helper ================= */

const StatCard = ({ title, value }) => (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
        <p className="text-gray-500 text-sm mb-2">{title}</p>
        <h3 className="text-3xl font-extrabold text-primary">
            {value ?? 0}
        </h3>
    </div>
);
