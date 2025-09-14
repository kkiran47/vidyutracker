import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Edit, Star, Gift, CheckCircle, Clock, DollarSign, Trophy, Leaf, User, Sparkles, Wallet } from 'lucide-react';

interface ProfilePageProps {
  companyData: any;
}

export function ProfilePage({ companyData }: ProfilePageProps) {
  const [suggestions] = useState([
    {
      id: 1,
      title: "Schedule maintenance during off-peak hours",
      description: "Save up to 25% on energy costs by scheduling equipment maintenance between 2-6 AM",
      impact: "High",
      savings: "$340/month",
      accepted: false
    },
    {
      id: 2,
      title: "Upgrade to LED lighting system",
      description: "Replace existing lighting with smart LED system for 40% energy reduction",
      impact: "Medium",
      savings: "$180/month",
      accepted: true
    },
    {
      id: 3,
      title: "Install smart thermostats",
      description: "Optimize HVAC system with AI-controlled temperature management",
      impact: "Medium",
      savings: "$220/month",
      accepted: false
    }
  ]);

  const [transactions] = useState([
    { id: 1, type: "Reward", description: "Energy efficiency bonus", amount: "+$50", date: "2 days ago", icon: Gift },
    { id: 2, type: "Savings", description: "Off-peak scheduling", amount: "+$120", date: "1 week ago", icon: Clock },
    { id: 3, type: "Achievement", description: "Green milestone reached", amount: "+$75", date: "2 weeks ago", icon: Leaf },
    { id: 4, type: "Cashback", description: "Smart usage bonus", amount: "+$30", date: "3 weeks ago", icon: DollarSign }
  ]);

  return (
    <div className="pb-20 p-4 space-y-6 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-8 w-36 h-36 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-4 w-28 h-28 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-12 w-20 h-20 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="pt-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-r from-teal-500/10 via-green-500/10 to-purple-500/10 rounded-2xl p-4 border border-teal-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-xl flex items-center justify-center">
              <User className="text-teal-400" size={20} />
            </div>
            <div>
              <h1 className="text-white text-2xl bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Profile & Rewards
              </h1>
              <p className="text-gray-300 text-sm">Manage your company profile and view suggestions</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-gray-800/60 via-gray-800/50 to-gray-900/60 backdrop-blur-md border-gray-700/40 p-6 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 via-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white text-2xl drop-shadow-lg">{companyData?.companyName?.charAt(0) || 'C'}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <CheckCircle size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-white text-xl mb-1">{companyData?.companyName || 'Company Name'}</h2>
                <p className="text-gray-400 text-sm mb-2">@{companyData?.username || 'username'}</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-teal-400/20 text-teal-400 border-teal-400/30 text-xs">
                    Verified
                  </Badge>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/30 text-xs">
                    Premium
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-teal-500/50 hover:text-teal-300 transition-all">
              <Edit size={16} className="mr-2" />
              Edit Profile
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-1">
              <p className="text-gray-400 flex items-center space-x-1">
                <span>📧</span>
                <span>Email</span>
              </p>
              <p className="text-white bg-gray-900/30 px-3 py-2 rounded-lg">{companyData?.email || 'email@company.com'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 flex items-center space-x-1">
                <span>📞</span>
                <span>Phone</span>
              </p>
              <p className="text-white bg-gray-900/30 px-3 py-2 rounded-lg">{companyData?.phone || '+1 234 567 8900'}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Energy Wallet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-teal-500/25 via-green-500/20 to-blue-500/25 border-teal-500/40 p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-400/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400/30 to-green-400/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Wallet className="text-teal-300" size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg">Energy Wallet</h3>
                  <p className="text-gray-200 text-sm">Your rewards balance</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl text-white bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent drop-shadow-lg">$1,240</p>
                <p className="text-teal-300 text-sm">Available</p>
              </div>
            </div>
            
            {/* Badge Strip */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-yellow-400/30 text-yellow-300 border-yellow-400/40 backdrop-blur-sm">
                <Trophy size={12} className="mr-1" />
                Gold Member
              </Badge>
              <Badge className="bg-green-400/30 text-green-300 border-green-400/40 backdrop-blur-sm">
                <Leaf size={12} className="mr-1" />
                Eco Warrior
              </Badge>
              <Badge className="bg-blue-400/30 text-blue-300 border-blue-400/40 backdrop-blur-sm">
                <Star size={12} className="mr-1" />
                Top 10%
              </Badge>
            </div>

            <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-[1.02]">
              <DollarSign size={16} className="mr-2" />
              Redeem Rewards
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* AI Suggestions Feed */}
      <div className="space-y-4">
        <h3 className="text-white text-lg">💡 AI Suggestions</h3>
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="text-white">{suggestion.title}</h4>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      suggestion.impact === 'High' 
                        ? 'border-red-400/50 text-red-400' 
                        : 'border-yellow-400/50 text-yellow-400'
                    }`}
                  >
                    {suggestion.impact} Impact
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm mb-2">{suggestion.description}</p>
                <p className="text-green-400 text-sm">💰 Potential savings: {suggestion.savings}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              {suggestion.accepted ? (
                <div className="flex items-center space-x-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  <span>Accepted</span>
                </div>
              ) : (
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Accept Suggestion
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Transaction History */}
      <div className="space-y-4">
        <h3 className="text-white text-lg">Recent Transactions</h3>
        {transactions.map((transaction) => (
          <Card key={transaction.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-700/50 rounded-lg">
                  <transaction.icon size={16} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-sm">{transaction.description}</p>
                  <p className="text-gray-400 text-xs">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-400">{transaction.amount}</p>
                <p className="text-gray-400 text-xs">{transaction.type}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}