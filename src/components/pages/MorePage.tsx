import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  FileText, 
  Wrench, 
  Trophy, 
  TrendingUp, 
  Calendar,
  Download,
  Award,
  LineChart,
  Sun,
  ChevronRight
} from 'lucide-react';

interface MorePageProps {
  onNavigate: (page: string) => void;
}

export function MorePage({ onNavigate }: MorePageProps) {
  const menuItems = [
    {
      id: 'reports',
      title: 'Reports & Logs',
      description: 'Export data and view usage logs',
      icon: FileText,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & AI Scheduler',
      description: 'Schedule maintenance and optimize operations',
      icon: Wrench,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20'
    },
    {
      id: 'leaderboard',
      title: 'Leaderboard',
      description: 'Compare your performance with others',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20',
      badge: 'Gold'
    },
    {
      id: 'forecast',
      title: 'Forecast & Renewables',
      description: 'AI predictions and renewable energy data',
      icon: Sun,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    }
  ];

  const quickStats = [
    {
      title: 'This Month',
      value: '2,847 kWh',
      change: '-12%',
      icon: LineChart,
      color: 'text-green-400'
    },
    {
      title: 'Green Score',
      value: '87/100',
      change: '+5',
      icon: Award,
      color: 'text-teal-400'
    },
    {
      title: 'Cost Savings',
      value: '$1,240',
      change: '+18%',
      icon: TrendingUp,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="pb-20 p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-white text-2xl mb-1">More</h1>
        <p className="text-gray-400 text-sm">Access additional features and insights</p>
      </div>

      {/* Quick Stats */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">Quick Stats</h2>
        <div className="grid grid-cols-1 gap-3">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-700/50 ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-white text-lg">{stat.value}</p>
                  </div>
                </div>
                <div className={`text-sm px-2 py-1 rounded-md ${
                  stat.change.startsWith('+') 
                    ? 'text-green-400 bg-green-400/10' 
                    : 'text-red-400 bg-red-400/10'
                }`}>
                  {stat.change}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Menu Items */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">Features</h2>
        {menuItems.map((item) => (
          <Card 
            key={item.id} 
            className={`${item.bgColor} ${item.borderColor} backdrop-blur-sm p-4 cursor-pointer hover:bg-opacity-20 transition-all duration-200`}
            onClick={() => onNavigate(item.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gray-700/30 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-white">{item.title}</h3>
                    {item.badge && (
                      <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/50 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">Recent Activity</h2>
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <div>
                <p className="text-white text-sm">Energy efficiency target achieved</p>
                <p className="text-gray-400 text-xs">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <div>
                <p className="text-white text-sm">Weekly report generated</p>
                <p className="text-gray-400 text-xs">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <div>
                <p className="text-white text-sm">Maintenance scheduled for CNC Machine #1</p>
                <p className="text-gray-400 text-xs">2 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 p-4 h-auto"
            onClick={() => onNavigate('reports')}
          >
            <div className="text-center">
              <Download size={20} className="mx-auto mb-1" />
              <p className="text-sm">Export Data</p>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-700 p-4 h-auto"
            onClick={() => onNavigate('maintenance')}
          >
            <div className="text-center">
              <Calendar size={20} className="mx-auto mb-1" />
              <p className="text-sm">Schedule</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}