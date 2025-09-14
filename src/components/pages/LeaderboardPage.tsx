import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Trophy, Medal, Award, TrendingUp, Leaf, Zap, Crown } from 'lucide-react';

export function LeaderboardPage() {
  const leaderboard = [
    {
      rank: 1,
      company: 'GreenTech Manufacturing',
      greenScore: 95,
      energySaved: '2,847 kWh',
      badgeType: 'gold',
      streak: 45,
      achievement: 'Carbon Neutral Champion'
    },
    {
      rank: 2,
      company: 'EcoVolt Industries',
      greenScore: 89,
      energySaved: '2,340 kWh',
      badgeType: 'silver',
      streak: 32,
      achievement: 'Efficiency Master'
    },
    {
      rank: 3,
      company: 'Your Company', // Current user
      greenScore: 87,
      energySaved: '2,124 kWh',
      badgeType: 'bronze',
      streak: 28,
      achievement: 'Rising Star',
      isCurrentUser: true
    },
    {
      rank: 4,
      company: 'SmartPower Corp',
      greenScore: 84,
      energySaved: '1,985 kWh',
      badgeType: 'bronze',
      streak: 23,
      achievement: 'Energy Saver'
    },
    {
      rank: 5,
      company: 'CleanEnergy Ltd',
      greenScore: 82,
      energySaved: '1,876 kWh',
      badgeType: 'bronze',
      streak: 19,
      achievement: 'Green Pioneer'
    }
  ];

  const achievements = [
    {
      title: 'Energy Efficiency Expert',
      description: 'Maintain 85%+ efficiency for 30 days',
      progress: 87,
      icon: Zap,
      color: 'text-yellow-400',
      unlocked: true
    },
    {
      title: 'Carbon Footprint Reducer',
      description: 'Reduce CO2 emissions by 50 tons',
      progress: 68,
      icon: Leaf,
      color: 'text-green-400',
      unlocked: false
    },
    {
      title: 'Cost Optimization Master',
      description: 'Save $5000 in energy costs',
      progress: 45,
      icon: TrendingUp,
      color: 'text-blue-400',
      unlocked: false
    },
    {
      title: 'Renewable Energy Champion',
      description: 'Use 70% renewable energy for a month',
      progress: 23,
      icon: Crown,
      color: 'text-purple-400',
      unlocked: false
    }
  ];

  const getBadgeIcon = (badgeType: string) => {
    switch (badgeType) {
      case 'gold':
        return <Trophy size={20} className="text-yellow-400" />;
      case 'silver':
        return <Medal size={20} className="text-gray-300" />;
      case 'bronze':
        return <Award size={20} className="text-orange-400" />;
      default:
        return <Award size={20} className="text-gray-400" />;
    }
  };

  const getBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case 'gold':
        return 'from-yellow-400/20 to-yellow-600/20 border-yellow-400/30';
      case 'silver':
        return 'from-gray-300/20 to-gray-500/20 border-gray-400/30';
      case 'bronze':
        return 'from-orange-400/20 to-orange-600/20 border-orange-400/30';
      default:
        return 'from-gray-400/20 to-gray-600/20 border-gray-400/30';
    }
  };

  return (
    <div className="pb-20 p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-white text-2xl mb-1">🏆 Energy Leaderboard</h1>
        <p className="text-gray-400 text-sm">Compete with other companies and track your green score</p>
      </div>

      {/* Current Rank Card */}
      <Card className="bg-gradient-to-br from-teal-500/20 to-green-500/20 border-teal-500/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white text-lg">Your Current Rank</h2>
            <p className="text-gray-300 text-sm">This month's performance</p>
          </div>
          <div className="text-center">
            <div className="text-3xl text-white mb-1">#3</div>
            <Badge className="bg-orange-400/20 text-orange-400 border-orange-400/50">
              <Award size={12} className="mr-1" />
              Bronze
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl text-white">87</p>
            <p className="text-gray-400 text-sm">Green Score</p>
          </div>
          <div>
            <p className="text-2xl text-white">28</p>
            <p className="text-gray-400 text-sm">Day Streak</p>
          </div>
          <div>
            <p className="text-2xl text-white">2.1k</p>
            <p className="text-gray-400 text-sm">kWh Saved</p>
          </div>
        </div>
      </Card>

      {/* Leaderboard */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">Company Rankings</h2>
        {leaderboard.map((company) => (
          <Card 
            key={company.rank} 
            className={`backdrop-blur-sm p-4 ${
              company.isCurrentUser 
                ? 'bg-gradient-to-r from-teal-500/20 to-green-500/20 border-teal-500/50 ring-1 ring-teal-400/30' 
                : 'bg-gray-800/50 border-gray-700/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getBadgeColor(company.badgeType)} flex items-center justify-center`}>
                    <span className="text-white text-sm">{company.rank}</span>
                  </div>
                  {getBadgeIcon(company.badgeType)}
                </div>
                
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className={`text-lg ${company.isCurrentUser ? 'text-teal-400' : 'text-white'}`}>
                      {company.company}
                    </h3>
                    {company.isCurrentUser && (
                      <Badge className="bg-teal-400/20 text-teal-400 border-teal-400/50 text-xs">
                        YOU
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{company.achievement}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                    <span>🔥 {company.streak} day streak</span>
                    <span>⚡ {company.energySaved} saved</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl text-white mb-1">{company.greenScore}</div>
                <p className="text-gray-400 text-xs">Green Score</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Weekly Challenge */}
      <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Trophy size={24} className="text-purple-400" />
          </div>
          <div>
            <h2 className="text-white text-lg">🎯 Weekly Challenge</h2>
            <p className="text-gray-300 text-sm">Reduce peak hour usage by 20%</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">73% complete</span>
          </div>
          <Progress value={73} className="h-2" />
        </div>
        
        <div className="text-sm text-gray-300">
          <p>Reward: 🏆 +50 Green Score points + Special badge</p>
          <p className="text-xs text-gray-400 mt-1">2 days remaining</p>
        </div>
      </Card>

      {/* Achievements */}
      <div className="space-y-3">
        <h2 className="text-white text-lg">🎖️ Achievements</h2>
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30 p-4">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${achievement.unlocked ? 'bg-gray-700/50' : 'bg-gray-800/50'} ${achievement.color}`}>
                <achievement.icon size={20} className={achievement.unlocked ? '' : 'opacity-50'} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className={`text-white ${!achievement.unlocked ? 'opacity-75' : ''}`}>
                    {achievement.title}
                  </h3>
                  {achievement.unlocked && (
                    <Badge className="bg-green-400/20 text-green-400 border-green-400/50 text-xs">
                      UNLOCKED
                    </Badge>
                  )}
                </div>
                <p className={`text-gray-400 text-sm mb-3 ${!achievement.unlocked ? 'opacity-75' : ''}`}>
                  {achievement.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className={achievement.unlocked ? 'text-green-400' : 'text-white'}>
                      {achievement.progress}% complete
                    </span>
                  </div>
                  <Progress 
                    value={achievement.progress} 
                    className="h-1.5" 
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fun Stats */}
      <Card className="bg-gradient-to-r from-teal-500/10 to-green-500/10 border-teal-500/20 p-4">
        <h3 className="text-white text-lg mb-3">🌟 Fun Stats</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Trees Equivalent Saved</p>
            <p className="text-white text-lg">🌳 127 trees</p>
          </div>
          <div>
            <p className="text-gray-400">CO₂ Prevented</p>
            <p className="text-white text-lg">🌍 1.2 tons</p>
          </div>
          <div>
            <p className="text-gray-400">Global Rank</p>
            <p className="text-white text-lg">🌎 #2,847</p>
          </div>
          <div>
            <p className="text-gray-400">Energy Coins Earned</p>
            <p className="text-white text-lg">⚡ 1,240</p>
          </div>
        </div>
      </Card>
    </div>
  );
}