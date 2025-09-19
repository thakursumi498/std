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
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-slate-900 to-blue-900 text-white h-screen flex flex-col transition-all duration-300 relative overflow-hidden border-r border-blue-700/30`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#4a7eff_1px,transparent_0)] bg-[size:20px_20px]"></div>
      
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 bg-white text-blue-800 rounded-full p-1.5 shadow-lg z-10 hover:scale-110 transition-all duration-200 border border-blue-100"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Logo Section */}
      <div className="p-5 border-b border-blue-700/30 flex items-center relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2.5 rounded-xl mr-3 shadow-lg ring-2 ring-blue-500/20">
          <span className="text-white text-lg font-bold">SD</span>
        </div>
        {!isCollapsed && (
          <div className="overflow-hidden">
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">StudentDesk</h1>
            <p className="text-xs text-blue-300/80 mt-0.5 font-medium">Law Student Dashboard</p>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="p-4 flex-1 relative z-10">
        {items.map(item => (
          <NavLink
            to={item.to}
            key={item.to}
            className={({isActive}) => 
              `flex items-center rounded-xl p-3 mb-2 transition-all duration-200 group relative overflow-hidden ${
                isActive 
                  ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/5' 
                  : 'text-blue-100 hover:bg-white/5 hover:text-white'
              }`
            }
            onMouseEnter={() => setActiveHover(item.to)}
            onMouseLeave={() => setActiveHover(null)}
          >
            {/* Animated highlight on active/hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeHover === item.to ? 'opacity-100' : ''}`}></div>
            
            <span className={`text-xl relative z-10 ${isCollapsed ? '' : 'mr-3'} transition-transform duration-200 group-hover:scale-110`}>
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="font-medium relative z-10 text-sm">{item.label}</span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-3 bg-slate-800 text-white text-xs py-1.5 px-2.5 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 border border-slate-700">
                {item.label}
                {/* Tooltip arrow */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-y-transparent border-r-slate-800 border-l-transparent"></div>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-blue-700/30 relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-md ring-2 ring-blue-400/30">
            JD
          </div>
          {!isCollapsed && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-blue-300/80 font-medium">3L Student</p>
            </div>
          )}
        </div>
        <button className="w-full py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm shadow-md border border-white/5 hover:border-white/10 hover:shadow-lg">
          {isCollapsed ? '👤' : 'View Profile'}
        </button>
      </div>
    </aside>
  );
}