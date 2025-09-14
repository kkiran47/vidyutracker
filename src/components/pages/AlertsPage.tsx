import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { AlertTriangle, Info, CheckCircle, X, Clock, Zap, Settings, Thermometer, Bell } from 'lucide-react';

export function AlertsPage() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'critical',
      title: 'High Energy Consumption Detected',
      description: 'Production Line A is consuming 40% more energy than usual. Immediate attention required.',
      time: '2 minutes ago',
      icon: AlertTriangle,
      machine: 'Production Line A',
      contact: '+911234567890',
      read: false
    },
    {
      id: 2,
      type: 'medium',
      title: 'Maintenance Reminder',
      description: 'CNC Machine #1 is due for scheduled maintenance in 2 days.',
      time: '1 hour ago',
      icon: Settings,
      machine: 'CNC Machine #1',
      contact: '+911234567891',
      read: false
    },
    {
      id: 3,
      type: 'critical',
      title: 'Temperature Alert',
      description: 'Compressor Unit temperature has exceeded safe operating limits.',
      time: '3 hours ago',
      icon: Thermometer,
      machine: 'Compressor Unit',
      contact: '+911234567892',
      read: false
    },
    {
      id: 4,
      type: 'info',
      title: 'Energy Efficiency Milestone',
      description: 'Congratulations! You have achieved 15% energy savings this month.',
      time: '1 day ago',
      icon: CheckCircle,
      machine: 'Overall System',
      contact: '+911234567893',
      read: true
    },
    {
      id: 5,
      type: 'medium',
      title: 'Peak Hour Usage Warning',
      description: 'High energy usage detected during peak hours. Consider rescheduling non-critical operations.',
      time: '1 day ago',
      icon: Clock,
      machine: 'Overall System',
      contact: '+911234567894',
      read: false
    },
    {
      id: 6,
      type: 'info',
      title: 'Smart Scheduling Activated',
      description: 'AI scheduler has optimized your operations for tomorrow, saving an estimated $85.',
      time: '2 days ago',
      icon: Zap,
      machine: 'AI System',
      contact: '+911234567895',
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  const deleteAlert = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'critical':
        return {
          cardClass: 'bg-red-500/10 border-red-500/30 backdrop-blur-sm',
          iconColor: 'text-red-400',
          badgeClass: 'bg-red-400/20 text-red-400 border-red-400/50'
        };
      case 'medium':
        return {
          cardClass: 'bg-orange-500/10 border-orange-500/30 backdrop-blur-sm',
          iconColor: 'text-orange-400',
          badgeClass: 'bg-orange-400/20 text-orange-400 border-orange-400/50'
        };
      case 'info':
        return {
          cardClass: 'bg-green-500/10 border-green-500/30 backdrop-blur-sm',
          iconColor: 'text-green-400',
          badgeClass: 'bg-green-400/20 text-green-400 border-green-400/50'
        };
      default:
        return {
          cardClass: 'bg-gray-800/50 border-gray-700/30 backdrop-blur-sm',
          iconColor: 'text-gray-400',
          badgeClass: 'bg-gray-400/20 text-gray-400 border-gray-400/50'
        };
    }
  };

  const unreadCount = alerts.filter(alert => !alert.read).length;

  return (
    <div className="pb-20 p-4 space-y-6 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-6 w-40 h-40 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-48 right-8 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-12 w-24 h-24 bg-green-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="pt-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-green-500/10 rounded-2xl p-4 border border-red-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-xl flex items-center justify-center">
                <Bell className="text-red-400" size={20} />
              </div>
              <div>
                <h1 className="text-white text-2xl bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Alerts & Notifications
                </h1>
                <p className="text-gray-300 text-sm">Stay updated with your system status</p>
              </div>
            </div>
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 animate-pulse">
                  {unreadCount} unread
                </Badge>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Alert Statistics */}
      <motion.div 
        className="grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/40 p-4 text-center backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <div className="w-8 h-8 bg-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <AlertTriangle size={16} className="text-red-300" />
            </div>
            <p className="text-white text-2xl mb-1">{alerts.filter(a => a.type === 'critical').length}</p>
            <p className="text-red-300 text-xs">Critical</p>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/40 p-4 text-center backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <div className="w-8 h-8 bg-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Clock size={16} className="text-orange-300" />
            </div>
            <p className="text-white text-2xl mb-1">{alerts.filter(a => a.type === 'medium').length}</p>
            <p className="text-orange-300 text-xs">Medium</p>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/40 p-4 text-center backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <div className="w-8 h-8 bg-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Info size={16} className="text-green-300" />
            </div>
            <p className="text-white text-2xl mb-1">{alerts.filter(a => a.type === 'info').length}</p>
            <p className="text-green-300 text-xs">Info</p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.map((alert) => {
          const styles = getAlertStyles(alert.type);
          
          return (
            <Card key={alert.id} className={`${styles.cardClass} p-4 ${!alert.read ? 'ring-1 ring-white/10' : 'opacity-75'}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`p-2 rounded-lg ${styles.iconColor} bg-gray-700/30`}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white">{alert.title}</h3>
                      {!alert.read && (
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">{alert.description}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className={styles.badgeClass}>
                        {alert.type.toUpperCase()}
                      </Badge>
                      <span className="text-gray-400 text-xs">{alert.machine}</span>
                    </div>

                    {/* Attractive Call Now Button */}
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-4 py-1 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all text-xs mt-2"
                      onClick={() => window.open(`tel:${alert.contact}`, "_self")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 3h4l2 7-3 3a11 11 0 005 5l3-3 7 2v4a1 1 0 01-1 1h-1C5 21 3 19 3 3z" />
                      </svg>
                      Call Now
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteAlert(alert.id)}
                  className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 p-1"
                >
                  <X size={16} />
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">{alert.time}</span>
                {!alert.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => markAsRead(alert.id)}
                    className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10 text-xs"
                  >
                    Mark as read
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* No alerts message */}
      {alerts.length === 0 && (
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-8 text-center">
          <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
          <h3 className="text-white text-lg mb-2">All Clear!</h3>
          <p className="text-gray-400 text-sm">No alerts at the moment. Your system is running smoothly.</p>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-white text-lg">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 p-4 h-auto">
            <div className="text-center">
              <Settings size={20} className="mx-auto mb-1" />
              <p className="text-sm">Alert Settings</p>
            </div>
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 p-4 h-auto"
            onClick={() => setAlerts(prev => prev.map(a => ({ ...a, read: true })))}
          >
            <div className="text-center">
              <CheckCircle size={20} className="mx-auto mb-1" />
              <p className="text-sm">Mark All Read</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
