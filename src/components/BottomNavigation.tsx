import { Home, Settings, Bell, BarChart3, MoreHorizontal, User } from 'lucide-react';

interface BottomNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'machines', icon: BarChart3, label: 'Machines' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'alerts', icon: Bell, label: 'Alerts' },
    { id: 'more', icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/98 via-gray-900/95 to-gray-900/90 backdrop-blur-xl border-t border-gray-700/50 px-4 py-3 z-50">
      {/* Glow effect at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>
      
      <div className="flex justify-around items-center max-w-md mx-auto relative">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 relative ${
              currentPage === id
                ? 'text-teal-400 bg-gradient-to-br from-teal-400/20 to-green-400/20 border border-teal-400/30 scale-110 shadow-lg shadow-teal-400/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-105'
            }`}
          >
            {/* Active indicator dot */}
            {currentPage === id && (
              <div className="absolute -top-1 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
            )}
            
            <Icon size={20} className={`transition-all duration-200 ${
              currentPage === id ? 'drop-shadow-lg filter' : ''
            }`} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}