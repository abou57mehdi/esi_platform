import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, FileText } from 'lucide-react';
import { useFiliereContext } from '../context/FiliereContext';
import { filieres } from '../data/filieres';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { selectedFiliere } = useFiliereContext();

  const getFiliereInfo = () => {
    if (!selectedFiliere) return null;
    return filieres.find(f => f.id === selectedFiliere);
  };

  const filiereInfo = getFiliereInfo();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ESI Platform</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <BookOpen className="mr-1 h-4 w-4" />
                Accueil
              </Link>
              <Link
                to="/blog"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <FileText className="mr-1 h-4 w-4" />
                Blog
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {filiereInfo && (
              <div className="mr-4 hidden md:block">
                <span 
                  className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: filiereInfo.color }}
                >
                  {filiereInfo.code}
                </span>
              </div>
            )}
            
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/blog"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Blog
            </Link>
          </div>
          {filiereInfo && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-8 w-8" style={{ color: filiereInfo.color }} />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{filiereInfo.code}</div>
                  <div className="text-sm font-medium text-gray-500">{filiereInfo.shortName}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;