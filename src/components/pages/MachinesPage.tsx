import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Switch } from '../ui/switch';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Power, Activity, TrendingUp, Settings, Zap, Gauge } from 'lucide-react';

export function MachinesPage() {
  const [machines, setMachines] = useState([
    {
      id: 1,
      name: "Production Line A",
      status: "ON",
      consumption: 345,
      efficiency: 87,
      sparklineData: [320, 335, 340, 345, 350, 345]
    },
    {
      id: 2,
      name: "CNC Machine #1",
      status: "ON",
      consumption: 180,
      efficiency: 92,
      sparklineData: [170, 175, 180, 185, 180, 180]
    },
    {
      id: 3,
      name: "Compressor Unit",
      status: "OFF",
      consumption: 0,
      efficiency: 0,
      sparklineData: [220, 210, 200, 0, 0, 0]
    },
    {
      id: 4,
      name: "Welding Station",
      status: "ON",
      consumption: 95,
      efficiency: 78,
      sparklineData: [90, 92, 95, 98, 95, 95]
    }
  ]);

  const analyticsData = {
    daily: [
      { hour: '00', consumption: 120 },
      { hour: '04', consumption: 80 },
      { hour: '08', consumption: 340 },
      { hour: '12', consumption: 420 },
      { hour: '16', consumption: 380 },
      { hour: '20', consumption: 250 }
    ],
    weekly: [
      { day: 'Mon', consumption: 2800 },
      { day: 'Tue', consumption: 3200 },
      { day: 'Wed', consumption: 2900 },
      { day: 'Thu', consumption: 3400 },
      { day: 'Fri', consumption: 3100 },
      { day: 'Sat', consumption: 1800 },
      { day: 'Sun', consumption: 1200 }
    ],
    monthly: [
      { month: 'Jan', consumption: 85000 },
      { month: 'Feb', consumption: 78000 },
      { month: 'Mar', consumption: 92000 },
      { month: 'Apr', consumption: 88000 },
      { month: 'May', consumption: 95000 }
    ]
  };

  const toggleMachine = (id: number) => {
    setMachines(prev => prev.map(machine => 
      machine.id === id 
        ? { 
            ...machine, 
            status: machine.status === 'ON' ? 'OFF' : 'ON',
            consumption: machine.status === 'ON' ? 0 : machine.consumption || 100
          }
        : machine
    ));
  };

  return (
    <div className="pb-20 p-4 space-y-6 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-4 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-6 w-32 h-32 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="pt-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-r from-teal-500/10 via-green-500/10 to-blue-500/10 rounded-2xl p-4 border border-teal-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-xl flex items-center justify-center">
              <Settings className="text-teal-400" size={20} />
            </div>
            <div>
              <h1 className="text-white text-2xl bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Machines & Analytics
              </h1>
              <p className="text-gray-300 text-sm">Monitor and control your industrial equipment</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Machine Monitoring Cards */}
      <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="text-teal-400" size={20} />
          <h2 className="text-white text-lg">Live Machine Status</h2>
        </div>
        {machines.map((machine, index) => (
          <motion.div
            key={machine.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-gray-800/60 via-gray-800/50 to-gray-900/60 backdrop-blur-md border-gray-700/40 p-5 hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/10 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${
                      machine.status === 'ON' 
                        ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                        : 'bg-red-400 shadow-lg shadow-red-400/50'
                    }`} />
                    {machine.status === 'ON' && (
                      <div className="absolute inset-0 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white group-hover:text-teal-100 transition-colors">{machine.name}</h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-gray-400 text-sm">{machine.consumption} kWh</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        machine.status === 'ON' 
                          ? 'bg-green-400/20 text-green-400 border border-green-400/30' 
                          : 'bg-red-400/20 text-red-400 border border-red-400/30'
                      }`}>
                        {machine.status}
                      </span>
                    </div>
                  </div>
                </div>
                <Switch
                  checked={machine.status === 'ON'}
                  onCheckedChange={() => toggleMachine(machine.id)}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-teal-500 data-[state=checked]:to-green-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="flex items-center space-x-1 mb-1">
                      <Gauge size={12} className="text-teal-400" />
                      <p className="text-gray-400 text-xs">Efficiency</p>
                    </div>
                    <p className="text-white text-lg bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                      {machine.efficiency}%
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center space-x-1 mb-1">
                      <Activity size={12} className="text-blue-400" />
                      <p className="text-gray-400 text-xs">Trend</p>
                    </div>
                    <p className="text-blue-400 text-sm">Stable</p>
                  </div>
                </div>
                
                {/* Enhanced Mini Sparkline */}
                <div className="w-24 h-10 bg-gray-900/50 rounded-lg p-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={machine.sparklineData.map((value, index) => ({ value, index }))}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#14b8a6" 
                        strokeWidth={2}
                        dot={false}
                        filter="drop-shadow(0 0 4px #14b8a6)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Analytics Section */}
      <div className="space-y-4">
        <h2 className="text-white text-lg">Usage Analytics</h2>
        
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border-gray-700">
            <TabsTrigger value="daily" className="text-gray-400 data-[state=active]:text-white">
              Daily
            </TabsTrigger>
            <TabsTrigger value="weekly" className="text-gray-400 data-[state=active]:text-white">
              Weekly
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-gray-400 data-[state=active]:text-white">
              Monthly
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-4">
            <TabsContent value="daily" className="space-y-4">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
                <h3 className="text-white mb-4">Daily Consumption (kWh)</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData.daily}>
                      <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Line 
                        type="monotone" 
                        dataKey="consumption" 
                        stroke="#14b8a6" 
                        strokeWidth={3}
                        dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="weekly" className="space-y-4">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
                <h3 className="text-white mb-4">Weekly Consumption (kWh)</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData.weekly}>
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Bar dataKey="consumption" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="monthly" className="space-y-4">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
                <h3 className="text-white mb-4">Monthly Consumption (kWh)</h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData.monthly}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Bar dataKey="consumption" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-3 text-center">
            <Activity size={20} className="text-teal-400 mx-auto mb-1" />
            <p className="text-white text-sm">85%</p>
            <p className="text-gray-400 text-xs">Avg Load</p>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-3 text-center">
            <TrendingUp size={20} className="text-green-400 mx-auto mb-1" />
            <p className="text-white text-sm">2-4 PM</p>
            <p className="text-gray-400 text-xs">Peak Hours</p>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-3 text-center">
            <Power size={20} className="text-yellow-400 mx-auto mb-1" />
            <p className="text-white text-sm">3,240</p>
            <p className="text-gray-400 text-xs">Total Units</p>
          </Card>
        </div>
      </div>
    </div>
  );
}