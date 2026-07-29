import { useState } from "react";
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

const orders = [
  { id: "#ORD-1042", customer: "Rahul Sharma", product: "UI Dashboard Pro",   amount: "₹4,200",  status: "Delivered",  date: "28 Jul 2026", avatar: "RS" },
  { id: "#ORD-1041", customer: "Priya Mehta",  product: "Cloud Hosting Plan", amount: "₹1,800",  status: "Processing", date: "27 Jul 2026", avatar: "PM" },
  { id: "#ORD-1040", customer: "Arjun Patel",  product: "Analytics Suite",    amount: "₹9,500",  status: "Delivered",  date: "27 Jul 2026", avatar: "AP" },
  { id: "#ORD-1039", customer: "Sneha Reddy",  product: "CRM Module",         amount: "₹6,300",  status: "Pending",    date: "26 Jul 2026", avatar: "SR" },
  { id: "#ORD-1038", customer: "Dev Kumar",    product: "AI Automation Pack", amount: "₹12,000", status: "Cancelled",  date: "26 Jul 2026", avatar: "DK" },
  { id: "#ORD-1037", customer: "Nisha Joshi",  product: "Mobile App Kit",     amount: "₹3,750",  status: "Delivered",  date: "25 Jul 2026", avatar: "NJ" },
  { id: "#ORD-1036", customer: "Vikram Singh", product: "Security Suite",     amount: "₹7,200",  status: "Processing", date: "25 Jul 2026", avatar: "VS" },
];

const statusStyle: Record<string, string> = {
  Delivered:  "bg-emerald-50 text-emerald-700",
  Processing: "bg-blue-50 text-blue-700",
  Pending:    "bg-amber-50 text-amber-700",
  Cancelled:  "bg-red-50 text-red-600",
};

const statusDot: Record<string, string> = {
  Delivered:  "bg-emerald-500",
  Processing: "bg-[#1E6FEB]",
  Pending:    "bg-amber-500",
  Cancelled:  "bg-red-500",
};

const avatarColors = [
  "from-blue-500 to-blue-700",
  "from-violet-500 to-purple-700",
  "from-emerald-500 to-teal-700",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-700",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
];

export function RecentOrders() {
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sorted = [...orders].sort((a, b) =>
    sortDir === "desc" ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id)
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h3 className="text-gray-800">Recent Orders</h3>
          <p className="text-xs text-gray-400 mt-0.5">Latest 7 transactions</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-[#1E6FEB] font-semibold hover:underline">
          View All <ExternalLink size={12} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th
                className="px-5 py-3 text-left text-xs font-semibold text-gray-500 cursor-pointer select-none"
                onClick={() => setSortDir(sortDir === "desc" ? "asc" : "desc")}
              >
                <span className="flex items-center gap-1">
                  Order ID {sortDir === "desc" ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                </span>
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Customer</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 hidden md:table-cell">Product</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Amount</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((order, i) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/70 transition-colors">
                <td className="px-5 py-3.5 text-xs font-mono font-semibold text-gray-700">{order.id}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white shrink-0`}
                      style={{ fontSize: 9, fontWeight: 700 }}
                    >
                      {order.avatar}
                    </div>
                    <span className="text-sm text-gray-800 whitespace-nowrap">{order.customer}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-gray-600 hidden md:table-cell">{order.product}</td>
                <td className="px-5 py-3.5 text-sm font-semibold text-gray-800">{order.amount}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle[order.status]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDot[order.status]}`} />
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-400 hidden lg:table-cell">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}