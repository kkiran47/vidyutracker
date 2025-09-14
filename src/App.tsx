import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BottomNavigation } from './components/BottomNavigation';
import { RegisterPage } from './components/pages/RegisterPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { MachinesPage } from './components/pages/MachinesPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { AlertsPage } from './components/pages/AlertsPage';
import { MorePage } from './components/pages/MorePage';
import { ReportsPage } from './components/pages/ReportsPage';
import { MaintenancePage } from './components/pages/MaintenancePage';
import { LeaderboardPage } from './components/pages/LeaderboardPage';
import { ForecastPage } from './components/pages/ForecastPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('register');
  const [companyData, setCompanyData] = useState(null);

  const handleRegister = (data: any) => {
    setCompanyData(data);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Animation variants for different page types
  const pageVariants = {
    register: {
      initial: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
      animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, scale: 1.1, filter: 'blur(10px)' }
    },
    dashboard: {
      initial: { opacity: 0, y: 50, rotateX: -15 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      exit: { opacity: 0, y: -50, rotateX: 15 }
    },
    machines: {
      initial: { opacity: 0, x: 100, rotateY: 20 },
      animate: { opacity: 1, x: 0, rotateY: 0 },
      exit: { opacity: 0, x: -100, rotateY: -20 }
    },
    profile: {
      initial: { opacity: 0, scale: 0.8, rotate: -5 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      exit: { opacity: 0, scale: 0.8, rotate: 5 }
    },
    alerts: {
      initial: { opacity: 0, y: -100, skewY: -5 },
      animate: { opacity: 1, y: 0, skewY: 0 },
      exit: { opacity: 0, y: 100, skewY: 5 }
    },
    default: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 }
    }
  };

  const getPageVariant = (page: string) => {
    return pageVariants[page as keyof typeof pageVariants] || pageVariants.default;
  };

  const renderPage = () => {
    const variant = getPageVariant(currentPage);
    
    const pageContent = (() => {
      switch (currentPage) {
        case 'register':
          return <RegisterPage onRegister={handleRegister} />;
        case 'dashboard':
          return <DashboardPage companyName={companyData?.companyName || 'Your Company'} onNavigate={handleNavigate} />;
        case 'machines':
          return <MachinesPage />;
        case 'profile':
          return <ProfilePage companyData={companyData} />;
        case 'alerts':
          return <AlertsPage />;
        case 'more':
          return <MorePage onNavigate={handleNavigate} />;
        case 'reports':
          return <ReportsPage />;
        case 'maintenance':
          return <MaintenancePage />;
        case 'leaderboard':
          return <LeaderboardPage />;
        case 'forecast':
          return <ForecastPage />;
        default:
          return <DashboardPage companyName={companyData?.companyName || 'Your Company'} onNavigate={handleNavigate} />;
      }
    })();

    return (
      <motion.div
        key={currentPage}
        initial={variant.initial}
        animate={variant.animate}
        exit={variant.exit}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          staggerChildren: 0.1
        }}
        className="w-full h-full"
      >
        {pageContent}
      </motion.div>
    );
  };

  const showBottomNavigation = currentPage !== 'register';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark relative overflow-hidden">
      {/* Global animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      
      {showBottomNavigation && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />
        </motion.div>
      )}
    </div>
  );
}