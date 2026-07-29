import { useState } from "react";
import { Search, Bell, Menu, X, ChevronDown } from "lucide-react";

const notifications = [
  { id: 1, title: "New order received",  desc: "Order #1042 placed by Rahul S.",    time: "2 min ago",  unread: true },
  { id: 2, title: "User registered",     desc: "Priya M. just created an account.", time: "15 min ago", unread: true },
  { id: 3, title: "Revenue milestone",   desc: "You crossed ₹1L revenue!",          time: "1 hr ago",   unread: false },
  { id: 4, title: "Project deadline",    desc: "Project Alpha due in 2 days.",       time: "3 hr ago",   unread: false },
];

interface TopBarProps {
  onMobileMenuToggle: () => void;
  pageTitle: string;
}

export function TopBar({ onMobileMenuToggle, pageTitle }: TopBarProps) {
  const [showNotif, setShowNotif]     = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [search, setSearch]           = useState("");

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 md:px-6 gap-4 sticky top-0 z-30 shadow-sm">

      <button onClick={onMobileMenuToggle} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
        <Menu size={20} className="text-gray-600" />
      </button>

      <h2 className="hidden md:block text-gray-800 capitalize">{pageTitle}</h2>

      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">

        {/* Bell */}
        <div className="relative">
          <button
            onClick={() => { setShowNotif(!showNotif); setShowProfile(false); }}
            className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-600"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#1E6FEB] text-white rounded-full flex items-center justify-center font-bold" style={{ fontSize: 9 }}>
                {unreadCount}
              </span>
            )}
          </button>

          {showNotif && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <span className="font-semibold text-sm text-gray-800">Notifications</span>
                <button onClick={() => setShowNotif(false)}><X size={14} className="text-gray-400" /></button>
              </div>
              {notifications.map((n) => (
                <div key={n.id} className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${n.unread ? "bg-blue-50/50" : ""}`}>
                  <div className="flex gap-3">
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.unread ? "bg-[#1E6FEB]" : "bg-gray-300"}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{n.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{n.desc}</p>
                      <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="px-4 py-2 text-center">
                <button className="text-xs text-[#1E6FEB] hover:underline">View all</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => { setShowProfile(!showProfile); setShowNotif(false); }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-100"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E6FEB] to-[#0D1B3E] flex items-center justify-center text-white text-xs font-bold">
              RA
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-800 leading-none">Rahul Admin</p>
              <p className="text-xs text-gray-400 mt-0.5">Administrator</p>
            </div>
            <ChevronDown size={14} className="text-gray-400 hidden md:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              {["My Profile", "Account Settings", "Help & Support", "Sign Out"].map((item) => (
                <button key={item} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-0">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}