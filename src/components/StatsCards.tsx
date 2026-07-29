import { Users, DollarSign, ShoppingCart, FolderOpen, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  { id: 1, label: "Total Users",     value: "24,512",    change: "+12.5%", positive: true,  icon: Users,        bg: "bg-blue-50",    iconColor: "text-[#1E6FEB]",   bar: "from-[#1E6FEB] to-blue-400" },
  { id: 2, label: "Total Revenue",   value: "₹8,45,230", change: "+8.2%",  positive: true,  icon: DollarSign,   bg: "bg-emerald-50", iconColor: "text-emerald-600", bar: "from-emerald-500 to-green-400" },
  { id: 3, label: "Total Orders",    value: "3,847",     change: "-2.4%",  positive: false, icon: ShoppingCart, bg: "bg-violet-50",  iconColor: "text-violet-600",  bar: "from-violet-500 to-purple-400" },
  { id: 4, label: "Active Projects", value: "128",       change: "+5.1%",  positive: true,  icon: FolderOpen,   bg: "bg-orange-50",  iconColor: "text-orange-600",  bar: "from-orange-500 to-amber-400" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.positive ? TrendingUp : TrendingDown;
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-200 cursor-default"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center`}>
                <Icon size={20} className={stat.iconColor} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${stat.positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                <TrendIcon size={10} />
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
            <p className="text-gray-900 text-2xl font-bold tracking-tight">{stat.value}</p>
            <div className={`mt-3 h-1 rounded-full bg-gradient-to-r ${stat.bar} opacity-60`} />
          </div>
        );
      })}
    </div>
  );
}