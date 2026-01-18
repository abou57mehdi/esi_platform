import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { FiliereProvider } from './context/FiliereContext';
import Home from './pages/Home';
import SemesterView from './pages/SemesterView';
import ModuleView from './pages/ModuleView';
import FiliereSelection from './pages/FiliereSelection';
import ElementFilesPage from './pages/ElementFilesPage';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    // In a real app, this could be replaced with actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FiliereProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/semester/:semesterNumber" element={<SemesterView />} />
            <Route path="/semester/:semesterNumber/module/:moduleId" element={<ModuleView />} />
            <Route path="/semester/:semesterNumber/module/:moduleId/element/:elementId" element={<ElementFilesPage />} />
            <Route path="/select-filiere" element={<FiliereSelection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </FiliereProvider>
  );
}

export default App;