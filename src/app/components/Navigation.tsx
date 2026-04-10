import { Link, useLocation } from "react-router";
import { Scale } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Rights Checker", path: "/rights-checker" },
    { label: "Common Issues", path: "/issue-selection" },
    { label: "Help", path: "/help" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">Know Your Rights</div>
              <div className="text-sm text-gray-600">Australian Consumer Law</div>
            </div>
          </Link>
          
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-5 py-3 rounded-lg text-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
