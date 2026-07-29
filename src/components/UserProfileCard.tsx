import { Mail, Phone, MapPin, Star, CheckCircle } from "lucide-react";

const skills = [
  { label: "React",         pct: 92 },
  { label: "TypeScript",    pct: 85 },
  { label: "Node.js",       pct: 78 },
  { label: "System Design", pct: 70 },
];

const activity = [
  { action: "Deployed Project Alpha",    time: "2h ago",     color: "bg-emerald-500" },
  { action: "Reviewed 12 pull requests", time: "5h ago",     color: "bg-[#1E6FEB]" },
  { action: "Completed sprint planning", time: "Yesterday",  color: "bg-violet-500" },
  { action: "Onboarded 3 new users",     time: "2 days ago", color: "bg-amber-500" },
];

export function UserProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Banner */}
      <div className="h-20 bg-gradient-to-r from-[#0D1B3E] via-[#1E6FEB] to-blue-400" />

      <div className="px-5 pb-5">
        {/* Avatar */}
        <div className="flex items-end justify-between -mt-8 mb-3">
          <div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E6FEB] to-[#0D1B3E] border-4 border-white flex items-center justify-center text-white font-bold shadow-lg"
            style={{ fontSize: 20 }}
          >
            RA
          </div>
          <span className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-semibold">
            <CheckCircle size={11} /> Active
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-900">Rahul Admin</h3>
            <Star size={13} className="text-amber-400 fill-amber-400" />
          </div>
          <p className="text-xs text-[#1E6FEB] font-semibold mt-0.5">Administrator · Insight Dashboard</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          {[
            { icon: Mail,   text: "admin@insight-dashboard.com" },
            { icon: Phone,  text: "+91 98765 43210" },
            { icon: MapPin, text: "Bengaluru, India" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-xs text-gray-500">
              <Icon size={13} className="text-gray-400 shrink-0" />
              {text}
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2.5">Skills</p>
          <div className="space-y-2.5">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{skill.label}</span>
                  <span>{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1E6FEB] to-blue-400 rounded-full"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2.5">Recent Activity</p>
          <div className="space-y-2.5">
            {activity.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className={`mt-1 w-2 h-2 rounded-full ${item.color} shrink-0`} />
                <div>
                  <p className="text-xs text-gray-700">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}