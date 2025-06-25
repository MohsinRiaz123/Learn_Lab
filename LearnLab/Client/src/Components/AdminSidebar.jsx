import { Link, useLocation } from "react-router-dom"

export function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/courses", label: "Courses", icon: "📚" },
    { path: "/students", label: "Students", icon: "👥" },
    { path: "/instructors", label: "Instructors", icon: "👨‍🏫" },
    { path: "/analytics", label: "Analytics", icon: "📈" },
    { path: "/notifications", label: "Notifications", icon: "🔔" },
    { path: "/reports", label: "Reports", icon: "📄" },
    { path: "/settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
              location.pathname === item.path ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" : ""
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
