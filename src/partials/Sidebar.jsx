import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const items = [
  { to: '/research', label: 'Research Hub', icon: '🔍' },
  { to: '/simulation', label: 'Courtroom Simulation', icon: '⚖️' },
  { to: '/exam-prep', label: 'Exam Prep', icon: '📝' },
  { to: '/career', label: 'Career Mapping', icon: '🚀' },
  { to: '/content', label: 'Content Feed', icon: '📰' },
  { to: '/calendar', label: 'Calendar', icon: '📅' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-blue-900 to-indigo-900 text-white h-screen flex flex-col transition-all duration-300 relative`}>
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 bg-white text-indigo-800 rounded-full p-1 shadow-md z-10"
      >
        {isCollapsed ? '➡️' : '⬅️'}
      </button>

      {/* Logo Section */}
      <div className="p-5 border-b border-indigo-700 flex items-center">
        <div className="bg-white p-2 rounded-lg mr-3">
          <span className="text-indigo-700 text-lg font-bold">SD</span>
        </div>
        {!isCollapsed && (
          <div>
            <h1 className="text-xl font-bold">StudentDesk</h1>
            <p className="text-xs text-indigo-200">Law Student Dashboard</p>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="p-4 flex-1">
        {items.map(item => (
          <NavLink
            to={item.to}
            key={item.to}
            className={({isActive}) => 
              `flex items-center rounded-xl p-3 mb-2 transition-all duration-200 group ${
                isActive 
                  ? 'bg-white text-indigo-700 shadow-lg' 
                  : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
              }`
            }
            onMouseEnter={() => setActiveHover(item.to)}
            onMouseLeave={() => setActiveHover(null)}
          >
            <span className={`text-xl ${isCollapsed ? '' : 'mr-3'}`}>
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="font-medium">{item.label}</span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-3 bg-indigo-800 text-white text-sm py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-indigo-700">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            JD
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-indigo-300">3L Student</p>
            </div>
          )}
        </div>
        <button className="w-full py-2.5 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors shadow-md">
          {isCollapsed ? '👤' : 'View Profile'}
        </button>
      </div>
    </aside>
  );
}