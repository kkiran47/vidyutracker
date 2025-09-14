import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Wrench, 
  Zap, 
  TrendingUp,
  Brain,
  Timer
} from 'lucide-react';

export function MaintenancePage() {
  const [upcomingMaintenance] = useState([
    {
      id: 1,
      machine: 'CNC Machine #1',
      type: 'Routine Inspection',
      scheduledDate: '2024-09-20',
      scheduledTime: '10:00 AM',
      duration: '2 hours',
      priority: 'medium',
      status: 'scheduled',
      aiRecommended: true
    },
    {
      id: 2,
      machine: 'Production Line A',
      type: 'Filter Replacement',
      scheduledDate: '2024-09-18',
      scheduledTime: '2:00 AM',
      duration: '1 hour',
      priority: 'high',
      status: 'scheduled',
      aiRecommended: true
    },
    {
      id: 3,
      machine: 'Compressor Unit',
      type: 'Oil Change',
      scheduledDate: '2024-09-25',
      scheduledTime: '6:00 AM',
      duration: '45 minutes',
      priority: 'low',
      status: 'pending',
      aiRecommended: false
    }
  ]);

  const [completedMaintenance] = useState([
    {
      id: 4,
      machine: 'Welding Station',
      type: 'Electrode Replacement',
      completedDate: '2024-09-12',
      duration: '30 minutes',
      cost: '$85',
      efficiency: '+12%'
    },
    {
      id: 5,
      machine: 'CNC Machine #1',
      type: 'Calibration',
      completedDate: '2024-09-08',
      duration: '1.5 hours',
      cost: '$150',
      efficiency: '+8%'
    }
  ]);

  const [jobScheduling] = useState([
    {
      id: 1,
      job: 'Component Batch #A847',
      recommendedMachine: 'CNC Machine #1',
      estimatedTime: '2.5 hours',
      energyEfficiency: '92%',
      reason: 'Highest precision for this component type'
    },
    {
      id: 2,
      job: 'Welding Assembly #B203',
      recommendedMachine: 'Welding Station',
      estimatedTime: '1.8 hours',
      energyEfficiency: '78%',
      reason: 'Currently available and optimal temperature'
    },
    {
      id: 3,
      job: 'Quality Inspection #C194',
      recommendedMachine: 'Production Line A',
      estimatedTime: '45 minutes',
      energyEfficiency: '87%',
      reason: 'Integrated inspection sensors available'
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-400/20 text-red-400 border-red-400/50';
      case 'medium':
        return 'bg-orange-400/20 text-orange-400 border-orange-400/50';
      case 'low':
        return 'bg-green-400/20 text-green-400 border-green-400/50';
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/50';
    }
  };

  return (
    <div className="pb-20 p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-white text-2xl mb-1">Maintenance & AI Scheduler</h1>
        <p className="text-gray-400 text-sm">Smart maintenance scheduling and job optimization</p>
      </div>

      {/* AI Scheduler Card */}
      <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Brain size={24} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-white text-lg">🤖 AI Scheduler Recommendation</h2>
            <p className="text-gray-300 text-sm">Optimized for energy efficiency and cost savings</p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
          <p className="text-white mb-2">Best maintenance window for tomorrow:</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-teal-400" />
              <span className="text-teal-400">September 20, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-teal-400" />
              <span className="text-teal-400">10:00 AM - 12:00 PM</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Low demand period • Estimated savings: $127 • 2.5 hours duration
          </p>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
          Accept AI Recommendation
        </Button>
      </Card>

      {/* Timeline View */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border-gray-700">
          <TabsTrigger value="upcoming" className="text-gray-400 data-[state=active]:text-white">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-gray-400 data-[state=active]:text-white">
            Completed
          </TabsTrigger>
          <TabsTrigger value="scheduling" className="text-gray-400 data-[state=active]:text-white">
            Job Queue
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-3 mt-4">
          {upcomingMaintenance.map((item) => (
            <Card key={item.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-700/50 rounded-lg">
                    <Wrench size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white">{item.machine}</h3>
                      {item.aiRecommended && (
                        <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/50 text-xs">
                          <Brain size={10} className="mr-1" />
                          AI
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{item.type}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar size={12} />
                        <span>{item.scheduledDate}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Clock size={12} />
                        <span>{item.scheduledTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Timer size={12} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className={getPriorityColor(item.priority)}>
                  {item.priority.toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {item.status === 'scheduled' ? (
                    <div className="flex items-center space-x-1 text-green-400 text-sm">
                      <CheckCircle size={14} />
                      <span>Scheduled</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-orange-400 text-sm">
                      <AlertCircle size={14} />
                      <span>Pending</span>
                    </div>
                  )}
                </div>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Reschedule
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-3 mt-4">
          {completedMaintenance.map((item) => (
            <Card key={item.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{item.machine}</h3>
                    <p className="text-gray-300 text-sm mb-2">{item.type}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>Completed: {item.completedDate}</span>
                      <span>Duration: {item.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">{item.cost}</p>
                  <p className="text-green-400 text-xs">{item.efficiency} efficiency</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="scheduling" className="space-y-3 mt-4">
          <div className="mb-4">
            <h3 className="text-white text-lg mb-2">🎯 Recommended Job Assignments</h3>
            <p className="text-gray-400 text-sm">AI-optimized job scheduling for maximum efficiency</p>
          </div>
          
          {jobScheduling.map((job) => (
            <Card key={job.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{job.job}</h3>
                    <p className="text-teal-400 text-sm mb-1">→ {job.recommendedMachine}</p>
                    <p className="text-gray-400 text-xs mb-2">{job.reason}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Clock size={12} />
                        <span>{job.estimatedTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp size={12} />
                        <span>{job.energyEfficiency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Assign Job
              </Button>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4 text-center">
          <Calendar size={20} className="text-blue-400 mx-auto mb-1" />
          <p className="text-white text-lg">3</p>
          <p className="text-gray-400 text-xs">Scheduled</p>
        </Card>
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4 text-center">
          <CheckCircle size={20} className="text-green-400 mx-auto mb-1" />
          <p className="text-white text-lg">2</p>
          <p className="text-gray-400 text-xs">Completed</p>
        </Card>
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4 text-center">
          <TrendingUp size={20} className="text-teal-400 mx-auto mb-1" />
          <p className="text-white text-lg">$127</p>
          <p className="text-gray-400 text-xs">Savings</p>
        </Card>
      </div>
    </div>
  );
}