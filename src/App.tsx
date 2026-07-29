import { useState } from "react";
import { X } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatsCards } from "./components/StatsCards";
import { RevenueChart, OrdersBarChart } from "./components/RevenueChart";
import { RecentOrders } from "./components/RecentOrders";
import { UserProfileCard } from "./components/UserProfileCard";

export default function App() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const titles: Record<string, string> = {
    dashboard:     "Dashboard Overview",
    users:         "Users Management",
    orders:        "Orders",
    analytics:     "Analytics",
    projects:      "Projects",
    notifications: "Notifications",
    settings:      "Settings",
  };

  return (
    <div className="flex h-screen bg-[#f4f6fb] overflow-hidden">

      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full z-50 md:hidden">
            <div className="relative">
              <Sidebar
                activeNav={activeNav}
                onNavChange={(id) => { setActiveNav(id); setMobileOpen(false); }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          onMobileMenuToggle={() => setMobileOpen(true)}
          pageTitle={titles[activeNav]}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeNav === "dashboard" ? (
            <div className="space-y-5">

              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-[#0D1B3E] to-[#1E6FEB] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-xs mb-1">Welcome back 👋</p>
                  <h2 className="text-white">Good morning, Rahul!</h2>
                  <p className="text-blue-200 text-xs mt-1">Here's what's happening today.</p>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">28</p>
                    <p className="text-blue-200 text-xs">Jul 2026</p>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">Tue</p>
                    <p className="text-blue-200 text-xs">Tuesday</p>
                  </div>
                </div>
              </div>

              <StatsCards />

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
                <div className="xl:col-span-3"><RevenueChart /></div>
                <div className="xl:col-span-2"><OrdersBarChart /></div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
                <div className="xl:col-span-3"><RecentOrders /></div>
                <div className="xl:col-span-1"><UserProfileCard /></div>
              </div>

            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-gray-700 mb-1">{titles[activeNav]}</h3>
                <p className="text-sm text-gray-400">This section is coming soon.</p>
              </div>
            </div>
          )}
        </main>
      </div>

    </div>
  );
}