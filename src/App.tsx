import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { FiliereProvider } from './context/FiliereContext';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const SemesterView = React.lazy(() => import('./pages/SemesterView'));
const ModuleView = React.lazy(() => import('./pages/ModuleView'));
const FiliereSelection = React.lazy(() => import('./pages/FiliereSelection'));
const ElementFilesPage = React.lazy(() => import('./pages/ElementFilesPage'));
const BlogHome = React.lazy(() => import('./pages/BlogHome'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const InternshipPage = React.lazy(() => import('./pages/InternshipPage'));
const ViewPdfPage = React.lazy(() => import('./pages/ViewPdfPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <FiliereProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/semester/:semesterNumber" element={<SemesterView />} />
              <Route path="/semester/:semesterNumber/module/:moduleId" element={<ModuleView />} />
              <Route path="/semester/:semesterNumber/module/:moduleId/element/:elementId" element={<ElementFilesPage />} />
              <Route path="/select-filiere" element={<FiliereSelection />} />
              <Route path="/blog" element={<BlogHome />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/stages" element={<InternshipPage />} />
              <Route path="/view-pdf" element={<ViewPdfPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </FiliereProvider>
  );
}

export default App;