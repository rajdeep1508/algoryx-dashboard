import { useState } from "react";
import {
  LayoutDashboard, Users, ShoppingCart, BarChart3,
  FolderOpen, Bell, Settings, LogOut, ChevronLeft, ChevronRight, Zap,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard",     id: "dashboard" },
  { icon: Users,           label: "Users",          id: "users" },
  { icon: ShoppingCart,    label: "Orders",         id: "orders" },
  { icon: BarChart3,       label: "Analytics",      id: "analytics" },
  { icon: FolderOpen,      label: "Projects",       id: "projects" },
  { icon: Bell,            label: "Notifications",  id: "notifications" },
  { icon: Settings,        label: "Settings",       id: "settings" },
];

interface SidebarProps {
  activeNav: string;
  onNavChange: (id: string) => void;
}

export function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      style={{ width: collapsed ? 72 : 240, transition: "width 0.3s ease" }}
      className="relative h-screen bg-[#0D1B3E] flex flex-col shrink-0 overflow-hidden shadow-2xl"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
        <div className="w-9 h-9 rounded-lg bg-[#1E6FEB] flex items-center justify-center shrink-0">
          <Zap size={18} className="text-white" fill="white" />
        </div>
        {!collapsed && (
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            INSIGHT
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#1E6FEB] text-white shadow-lg"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              {!collapsed && (
                <span className="text-sm whitespace-nowrap">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-2 py-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-all">
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-[#1E6FEB] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-500 z-10"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}