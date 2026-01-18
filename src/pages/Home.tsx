import React from 'react';
import { useFiliereContext } from '../context/FiliereContext';
import { filieres } from '../data/filieres';
import SemesterCard from '../components/SemesterCard';
import BubbleBackground from '../components/BubbleBackground';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { selectedFiliere } = useFiliereContext();
  const navigate = useNavigate();

  const getFiliereInfo = () => {
    if (!selectedFiliere) return null;
    return filieres.find(f => f.id === selectedFiliere);
  };

  const filiereInfo = getFiliereInfo();

  return (
    <div className="min-h-screen">
      <BubbleBackground />
      <div className="container mx-auto p-4 relative z-10">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-10 w-10 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Plateforme ESI</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accédez à tous vos résumés de modules pour le cycle d'ingénieur à l'École Supérieure d'Informatique
          </p>
        </header>

        {/* Filière Badge if selected */}
        {filiereInfo && (
          <div
            className="mb-8 p-4 rounded-lg flex items-center justify-between max-w-2xl mx-auto"
            style={{ backgroundColor: `${filiereInfo.color}10` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: filiereInfo.color }}
              >
                {filiereInfo.code}
              </div>
              <span className="text-sm">{filiereInfo.shortName}</span>
            </div>
            <button
              onClick={() => navigate('/select-filiere')}
              className="text-sm text-blue-600 hover:underline"
            >
              Changer
            </button>
          </div>
        )}

        {/* Semester Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map(semester => (
            <SemesterCard
              key={semester}
              semester={semester}
              requiresFiliere={semester === 5}
              filiereSelected={!!selectedFiliere}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Plateforme ESI - Tous droits réservés</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;