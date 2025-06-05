
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { DashboardPage } from './pages/DashboardPage';
import { CrmPage } from './pages/CrmPage';
import { SchedulerPage } from './pages/SchedulerPage';
import { OffersPage } from './pages/OffersPage';
import { DigitalCardConfigPage } from './pages/DigitalCardConfigPage';
import { PublicDigitalCardPage } from './pages/PublicDigitalCardPage';
import { LeadCapturePage } from './pages/LeadCapturePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/crm" element={<CrmPage />} />
            <Route path="/scheduler" element={<SchedulerPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/digital-card-config" element={<DigitalCardConfigPage />} />
            
            {/* Public facing routes - no Navbar here typically, or a different one */}
            <Route path="/public-card" element={<PublicDigitalCardPage />} />
            <Route path="/lead-capture" element={<LeadCapturePage />} />
            
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
        <footer className="bg-neutral-dark text-neutral-light text-center p-4 text-sm">
          MVP Negócios &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;