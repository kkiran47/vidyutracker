import { useEffect, useState } from 'react';

interface EnergyMeterProps {
  percentage: number;
  usage: number;
  unit: string;
}

export function EnergyMeter({ percentage, usage, unit }: EnergyMeterProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animatedUsage, setAnimatedUsage] = useState(0);

  useEffect(() => {
    // Animate the percentage
    const percentageTimer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);

    // Animate the usage number from 0 to target
    const usageInterval = setInterval(() => {
      setAnimatedUsage(prev => {
        const increment = Math.ceil(usage / 50); // Divide into ~50 steps
        const next = prev + increment;
        if (next >= usage) {
          clearInterval(usageInterval);
          return usage;
        }
        return next;
      });
    }, 30); // Update every 30ms for smooth animation

    // Start usage animation after a brief delay
    const usageTimer = setTimeout(() => {
      setAnimatedUsage(1); // Trigger the interval
    }, 800);

    return () => {
      clearTimeout(percentageTimer);
      clearTimeout(usageTimer);
      clearInterval(usageInterval);
    };
  }, [percentage, usage]);

  const circumference = 2 * Math.PI * 90;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="relative w-52 h-52 mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-green-500/20 blur-xl animate-pulse"></div>
      
      <svg
        className="w-full h-full transform -rotate-90 relative z-10"
        viewBox="0 0 200 200"
      >
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke="rgb(31, 41, 55)"
          strokeWidth="12"
          fill="none"
          opacity="0.3"
        />
        
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke="url(#energyGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1500 ease-out drop-shadow-lg"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#06d6a0" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl text-white mb-1 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-200">
          {animatedUsage.toLocaleString()}
        </div>
        <div className="text-sm text-gray-300 mb-2 tracking-wider">{unit}</div>
        <div className="text-xs text-teal-400 bg-teal-400/20 px-3 py-1 rounded-full border border-teal-400/30 transition-all duration-300">
          {Math.round(animatedPercentage)}% of limit
        </div>
      </div>
      
      {/* Inner decorative ring */}
      <div className="absolute inset-8 rounded-full border border-gray-700/30 bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm"></div>
      
      {/* Pulse animation */}
      <div 
        className="absolute inset-6 rounded-full opacity-30 animate-ping"
        style={{ 
          background: `conic-gradient(from 0deg, transparent ${100 - animatedPercentage}%, rgba(20, 184, 166, 0.2) ${100 - animatedPercentage}%, rgba(16, 185, 129, 0.2) 100%)`,
          animationDuration: '3s'
        }}
      />
    </div>
  );
}