import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Download, Calendar as CalendarIcon, FileText, BarChart } from 'lucide-react';
import { format } from 'date-fns';

export function ReportsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 8, 1),
    to: new Date(2024, 8, 14)
  });

  const logs = [
    {
      id: 1,
      timestamp: '2024-09-14 14:30:25',
      machine: 'Production Line A',
      consumption: 345,
      status: 'Running',
      efficiency: 87
    },
    {
      id: 2,
      timestamp: '2024-09-14 14:15:10',
      machine: 'CNC Machine #1',
      consumption: 180,
      status: 'Running',
      efficiency: 92
    },
    {
      id: 3,
      timestamp: '2024-09-14 14:00:45',
      machine: 'Welding Station',
      consumption: 95,
      status: 'Running',
      efficiency: 78
    },
    {
      id: 4,
      timestamp: '2024-09-14 13:45:20',
      machine: 'Compressor Unit',
      consumption: 0,
      status: 'Stopped',
      efficiency: 0
    },
    {
      id: 5,
      timestamp: '2024-09-14 13:30:15',
      machine: 'Production Line A',
      consumption: 320,
      status: 'Running',
      efficiency: 89
    },
    {
      id: 6,
      timestamp: '2024-09-14 13:15:08',
      machine: 'CNC Machine #1',
      consumption: 175,
      status: 'Running',
      efficiency: 94
    }
  ];

  const summaryData = {
    totalConsumption: '2,847 kWh',
    averageEfficiency: '85%',
    totalCost: '$342.50',
    peakUsage: '420 kWh at 2:00 PM',
    activeMachines: 3,
    totalDowntime: '2.5 hours'
  };

  const handleExport = (format: string) => {
    // Mock export functionality
    console.log(`Exporting data in ${format} format for date range:`, dateRange);
    // In a real app, this would trigger a download
  };

  return (
    <div className="pb-20 p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-white text-2xl mb-1">Reports & Logs</h1>
        <p className="text-gray-400 text-sm">Export data and view detailed usage logs</p>
      </div>

      {/* Date Picker */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <h2 className="text-white text-lg mb-4">Select Date Range</h2>
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                className="bg-gray-800 text-white"
              />
            </PopoverContent>
          </Popover>
          <div className="text-gray-400 text-sm">
            Current range: {format(dateRange.from, 'MMM dd')} - {format(dateRange.to, 'MMM dd')}
          </div>
        </div>
      </Card>

      {/* Summary Statistics */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <h2 className="text-white text-lg mb-4">Summary Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <p className="text-gray-400 text-sm">Total Consumption</p>
            <p className="text-white text-xl">{summaryData.totalConsumption}</p>
          </div>
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <p className="text-gray-400 text-sm">Avg Efficiency</p>
            <p className="text-white text-xl">{summaryData.averageEfficiency}</p>
          </div>
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <p className="text-gray-400 text-sm">Total Cost</p>
            <p className="text-white text-xl">{summaryData.totalCost}</p>
          </div>
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <p className="text-gray-400 text-sm">Active Machines</p>
            <p className="text-white text-xl">{summaryData.activeMachines}</p>
          </div>
        </div>
      </Card>

      {/* Export Options */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <h2 className="text-white text-lg mb-4">Export Data</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={() => handleExport('PDF')}
            className="bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
            variant="outline"
          >
            <FileText className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button 
            onClick={() => handleExport('CSV')}
            className="bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30"
            variant="outline"
          >
            <BarChart className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </Card>

      {/* Detailed Logs */}
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
        <h2 className="text-white text-lg mb-4">Detailed Usage Logs</h2>
        
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-700/50">
            <TabsTrigger value="recent" className="text-gray-400 data-[state=active]:text-white">
              Recent Activity
            </TabsTrigger>
            <TabsTrigger value="filtered" className="text-gray-400 data-[state=active]:text-white">
              Filtered View
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="mt-4">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {logs.map((log) => (
                <div 
                  key={log.id} 
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        log.status === 'Running' ? 'bg-green-400' : 'bg-red-400'
                      }`} />
                      <div>
                        <p className="text-white text-sm">{log.machine}</p>
                        <p className="text-gray-400 text-xs">{log.timestamp}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-sm">{log.consumption} kWh</p>
                    <p className="text-gray-400 text-xs">{log.efficiency}% efficiency</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="filtered" className="mt-4">
            <div className="text-center py-8">
              <p className="text-gray-400">Filter options will be available here</p>
              <p className="text-gray-500 text-sm mt-2">Filter by machine, date range, or consumption level</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Additional Insights */}
      <Card className="bg-gradient-to-r from-teal-500/10 to-green-500/10 border-teal-500/20 p-4">
        <h3 className="text-white text-lg mb-2">📊 Report Insights</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300">
            • Peak usage occurred at 2:00 PM with 420 kWh consumption
          </p>
          <p className="text-gray-300">
            • Production Line A shows highest variability in efficiency
          </p>
          <p className="text-gray-300">
            • 15% improvement in overall efficiency compared to last month
          </p>
          <p className="text-gray-300">
            • Recommended: Schedule maintenance for Welding Station (78% efficiency)
          </p>
        </div>
      </Card>
    </div>
  );
}