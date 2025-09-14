import { EnergyMeter } from '../EnergyMeter';
import { Card } from '../ui/card';
import { FileText, DollarSign, Leaf, Zap } from 'lucide-react';

interface DashboardPageProps {
  companyName: string;
  onNavigate: (page: string) => void;
}

export function DashboardPage({ companyName, onNavigate }: DashboardPageProps) {
  const summaryCards = [
    {
      title: "Today's Usage",
      value: "2,847",
      unit: "kWh",
      change: "+12%",
      trend: "up",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Monthly Bill Estimate",
      value: "$4,230",
      unit: "",
      change: "-8%",
      trend: "down", 
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Carbon Saved",
      value: "1.2",
      unit: "tons",
      change: "+15%",
      trend: "up",
      icon: Leaf,
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="pb-20 p-4 space-y-6 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-24 h-24 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-8 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Greeting */}
      <div className="pt-4 relative z-10">
        <div className="bg-gradient-to-r from-teal-500/10 via-green-500/10 to-blue-500/10 rounded-2xl p-4 border border-teal-500/20 backdrop-blur-sm">
          <h1 className="text-white text-2xl mb-1 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
            Hello, {companyName} 👋
          </h1>
          <p className="text-gray-300 text-sm">Here's your energy overview for today</p>
        </div>
      </div>

      {/* Energy Meter */}
      <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-800/40 to-gray-900/50 backdrop-blur-md rounded-3xl p-6 border border-gray-700/30 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/5 rounded-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-white text-lg mb-4 text-center">Current Energy Status</h2>
          <EnergyMeter percentage={73} usage={2847} unit="kWh" />
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-sm">Daily target: 3,900 kWh</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="space-y-3">
        <h3 className="text-white text-lg">Quick Overview</h3>
        {summaryCards.map((card, index) => (
          <Card key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md border-gray-700/30 p-4 hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 ${card.color} shadow-lg`}>
                  <card.icon size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{card.title}</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-white text-xl">{card.value}</span>
                    {card.unit && <span className="text-gray-400 text-sm">{card.unit}</span>}
                  </div>
                </div>
              </div>
              <div className={`text-sm px-3 py-1.5 rounded-lg font-medium ${
                card.trend === 'up' 
                  ? 'text-green-400 bg-green-400/20 border border-green-400/30' 
                  : 'text-red-400 bg-red-400/20 border border-red-400/30'
              }`}>
                {card.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-white text-lg">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card 
            className="bg-gradient-to-br from-teal-500/20 to-green-500/20 border-teal-500/30 p-4 text-center cursor-pointer hover:from-teal-500/30 hover:to-green-500/30 hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/20"
            onClick={() => onNavigate('maintenance')}
          >
            <FileText size={24} className="text-teal-400 mx-auto mb-2" />
            <p className="text-white text-sm">Maintenance & AI Scheduler</p>
          </Card>
          <Card 
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 p-4 text-center cursor-pointer hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
            onClick={() => onNavigate('machines')}
          >
            <Zap size={24} className="text-blue-400 mx-auto mb-2" />
            <p className="text-white text-sm">Machine Control</p>
          </Card>
        </div>
      </div>

      {/* Today's Insights */}
      <div className="relative bg-gradient-to-br from-teal-500/15 via-green-500/15 to-blue-500/15 rounded-2xl p-6 border border-teal-500/30 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-lg flex items-center justify-center">
              <span className="text-lg">💡</span>
            </div>
            <h3 className="text-white text-lg">AI Insight</h3>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Your energy consumption is 12% higher than yesterday. Consider scheduling 
            non-critical operations during off-peak hours (2-6 AM) to reduce costs by up to 30%.
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <span className="text-xs text-teal-400 bg-teal-400/20 px-2 py-1 rounded-full">Smart Tip</span>
            <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">Save $127/month</span>
          </div>
        </div>
      </div>
    </div>
  );
}