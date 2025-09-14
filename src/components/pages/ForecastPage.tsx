import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Sun, Wind, Zap, TrendingUp, Brain, Calendar, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ForecastPage() {
  const forecastData = [
    { hour: '00', actual: 120, predicted: null },
    { hour: '04', actual: 80, predicted: null },
    { hour: '08', actual: 340, predicted: null },
    { hour: '12', actual: 420, predicted: null },
    { hour: '16', actual: 380, predicted: null },
    { hour: '20', actual: 250, predicted: null },
    { hour: '24', actual: null, predicted: 180 },
    { hour: '04+', actual: null, predicted: 95 },
    { hour: '08+', actual: null, predicted: 360 },
    { hour: '12+', actual: null, predicted: 445 },
    { hour: '16+', actual: null, predicted: 400 },
    { hour: '20+', actual: null, predicted: 275 }
  ];

  const renewableData = [
    { hour: '06', solar: 0, wind: 45, total: 45 },
    { hour: '08', solar: 120, wind: 40, total: 160 },
    { hour: '10', solar: 280, wind: 35, total: 315 },
    { hour: '12', solar: 350, wind: 30, total: 380 },
    { hour: '14', solar: 320, wind: 35, total: 355 },
    { hour: '16', solar: 240, wind: 40, total: 280 },
    { hour: '18', solar: 80, wind: 45, total: 125 },
    { hour: '20', solar: 0, wind: 50, total: 50 }
  ];

  const weeklyForecast = [
    {
      day: 'Today',
      consumption: 2847,
      renewable: 30,
      cost: '$342',
      efficiency: 87,
      weather: 'sunny'
    },
    {
      day: 'Tomorrow',
      consumption: 2690,
      renewable: 35,
      cost: '$315',
      efficiency: 89,
      weather: 'partly-cloudy'
    },
    {
      day: 'Tuesday',
      consumption: 2920,
      renewable: 28,
      cost: '$367',
      efficiency: 85,
      weather: 'cloudy'
    },
    {
      day: 'Wednesday',
      consumption: 2780,
      renewable: 42,
      cost: '$298',
      efficiency: 91,
      weather: 'sunny'
    },
    {
      day: 'Thursday',
      consumption: 2850,
      renewable: 38,
      cost: '$325',
      efficiency: 88,
      weather: 'windy'
    }
  ];

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'sunny':
        return '☀️';
      case 'partly-cloudy':
        return '⛅';
      case 'cloudy':
        return '☁️';
      case 'windy':
        return '💨';
      default:
        return '🌤️';
    }
  };

  return (
    <div className="pb-20 p-4 space-y-6 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-6 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-4 w-36 h-36 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-12 w-28 h-28 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="pt-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-xl flex items-center justify-center">
              <Sparkles className="text-blue-400" size={20} />
            </div>
            <div>
              <h1 className="text-white text-2xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Forecast & Renewables
              </h1>
              <p className="text-gray-300 text-sm">AI predictions and renewable energy insights</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Section with Background */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-600/40 via-green-600/30 to-teal-600/40 border-blue-500/40 p-6 relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 opacity-15">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1725781760697-0fd602114a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwZW5lcmd5JTIwc29sYXIlMjBwYW5lbHN8ZW58MXx8fHwxNTc4NTA0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solar panels background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Floating orbs */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-2xl backdrop-blur-sm shadow-lg">
                <Sun size={32} className="text-green-300" />
              </div>
              <div>
                <h2 className="text-white text-xl mb-1">🌞 Today's Renewable Energy</h2>
                <p className="text-gray-100 text-sm">Real-time clean energy contribution</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white/15 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-4xl text-white mb-2 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">30%</p>
                <p className="text-gray-100 text-sm">of today's energy from Solar</p>
              </motion.div>
              <motion.div 
                className="bg-white/15 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-4xl text-white mb-2 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">8%</p>
                <p className="text-gray-100 text-sm">from Wind & other sources</p>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* AI Forecast */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Brain size={20} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-white text-lg">🤖 AI Energy Forecast</h2>
            <p className="text-gray-400 text-sm">Next 12 hours prediction</p>
          </div>
        </div>
        
        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <XAxis 
                dataKey="hour" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              {/* Actual data line */}
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#14b8a6" 
                strokeWidth={3}
                dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
              {/* Predicted data line (dotted) */}
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 3 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span className="text-gray-300">Actual Usage</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-1 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">AI Prediction</span>
          </div>
        </div>
      </Card>

      {/* Renewable Energy Chart */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <h2 className="text-white text-lg mb-4">⚡ Renewable Energy Generation</h2>
        
        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={renewableData}>
              <XAxis 
                dataKey="hour" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
              />
              <Area 
                type="monotone" 
                dataKey="wind" 
                stackId="1"
                stroke="#60a5fa" 
                fill="#60a5fa" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="solar" 
                stackId="1"
                stroke="#facc15" 
                fill="#facc15" 
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-center space-x-6 text-sm mb-4">
          <div className="flex items-center space-x-2">
            <Sun size={16} className="text-yellow-400" />
            <span className="text-gray-300">Solar Energy</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wind size={16} className="text-blue-400" />
            <span className="text-gray-300">Wind Energy</span>
          </div>
        </div>
      </Card>

      {/* Weekly Forecast */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">📅 5-Day Forecast</h2>
        {weeklyForecast.map((day, index) => (
          <Card key={index} className={`backdrop-blur-sm border-gray-700/30 p-4 ${
            index === 0 ? 'bg-teal-500/10 border-teal-500/30' : 'bg-gray-800/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">{getWeatherIcon(day.weather)}</div>
                  <p className={`text-sm ${index === 0 ? 'text-teal-400' : 'text-gray-400'}`}>
                    {day.day}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Zap size={12} className="text-yellow-400" />
                      <span className="text-white">{day.consumption} kWh</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sun size={12} className="text-green-400" />
                      <span className="text-white">{day.renewable}%</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Cost: {day.cost}</span>
                    <span>Efficiency: {day.efficiency}%</span>
                  </div>
                </div>
              </div>
              
              {index === 0 && (
                <Badge className="bg-teal-400/20 text-teal-400 border-teal-400/50">
                  Today
                </Badge>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Insights and Recommendations */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 p-4">
        <h3 className="text-white text-lg mb-3">🔮 AI Insights & Recommendations</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">
              Tomorrow shows 35% renewable energy potential - consider scheduling energy-intensive tasks during peak solar hours (10 AM - 2 PM)
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">
              Wednesday forecast indicates high wind generation - optimal day for maintenance activities
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">
              Week ahead shows 15% cost reduction opportunity through smart scheduling
            </p>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-green-500/10 border-green-500/30 p-4 text-center">
          <Sun size={20} className="text-green-400 mx-auto mb-1" />
          <p className="text-white text-lg">38%</p>
          <p className="text-gray-400 text-xs">Renewable Mix</p>
        </Card>
        <Card className="bg-purple-500/10 border-purple-500/30 p-4 text-center">
          <Brain size={20} className="text-purple-400 mx-auto mb-1" />
          <p className="text-white text-lg">94%</p>
          <p className="text-gray-400 text-xs">Forecast Accuracy</p>
        </Card>
        <Card className="bg-blue-500/10 border-blue-500/30 p-4 text-center">
          <TrendingUp size={20} className="text-blue-400 mx-auto mb-1" />
          <p className="text-white text-lg">$127</p>
          <p className="text-gray-400 text-xs">Projected Savings</p>
        </Card>
      </div>
    </div>
  );
}