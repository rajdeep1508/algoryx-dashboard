import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000, expenses: 28000 },
  { month: "Feb", revenue: 58000, expenses: 32000 },
  { month: "Mar", revenue: 51000, expenses: 29000 },
  { month: "Apr", revenue: 73000, expenses: 38000 },
  { month: "May", revenue: 67000, expenses: 35000 },
  { month: "Jun", revenue: 89000, expenses: 41000 },
  { month: "Jul", revenue: 95000, expenses: 44000 },
  { month: "Aug", revenue: 84000, expenses: 40000 },
  { month: "Sep", revenue: 110000, expenses: 52000 },
  { month: "Oct", revenue: 98000, expenses: 47000 },
  { month: "Nov", revenue: 125000, expenses: 58000 },
  { month: "Dec", revenue: 140000, expenses: 63000 },
];

const ordersData = [
  { day: "Mon", orders: 34 },
  { day: "Tue", orders: 52 },
  { day: "Wed", orders: 48 },
  { day: "Thu", orders: 61 },
  { day: "Fri", orders: 75 },
  { day: "Sat", orders: 88 },
  { day: "Sun", orders: 42 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-gray-800">Revenue Overview</h3>
          <p className="text-xs text-gray-400 mt-0.5">Revenue vs Expenses — 2024</p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-[#1E6FEB] text-xs font-semibold rounded-full">2024</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="area-rev-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#1E6FEB" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#1E6FEB" stopOpacity={0}   />
            </linearGradient>
            <linearGradient id="area-exp-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#f59e0b" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}   />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis                 tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #f0f0f0" }} />
          <Area key="area-revenue"  type="monotone" dataKey="revenue"  name="Revenue"  stroke="#1E6FEB" strokeWidth={2.5} fill="url(#area-rev-grad)" dot={false} />
          <Area key="area-expenses" type="monotone" dataKey="expenses" name="Expenses" stroke="#f59e0b" strokeWidth={2}   fill="url(#area-exp-grad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function OrdersBarChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-gray-800">Weekly Orders</h3>
          <p className="text-xs text-gray-400 mt-0.5">Orders placed this week</p>
        </div>
        <span className="px-3 py-1 bg-violet-50 text-violet-600 text-xs font-semibold rounded-full">This Week</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={ordersData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <YAxis               tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #f0f0f0" }} cursor={{ fill: "rgba(124,58,237,0.05)" }} />
          <Bar key="bar-orders" dataKey="orders" name="Orders" fill="#7c3aed" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}