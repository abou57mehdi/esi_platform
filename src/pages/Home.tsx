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
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/assets/images/esi_traingle.png" 
              alt="ESI Logo" 
              className="h-14 w-14 mr-4 object-contain drop-shadow-md"
            />
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Plateforme <span className="text-blue-600">ESI</span>
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg opacity-90">
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

          {/* Blog Card - Repo Style */}
          <div
            onClick={() => navigate('/blog')}
            className="
              flex flex-col min-h-[220px] h-full
              bg-white/40 backdrop-blur-md rounded-md border border-white/40
              p-6 cursor-pointer transition-all duration-200
              hover:shadow-lg hover:border-pink-400/50 hover:bg-white/60
              group
            "
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-6 w-6 text-pink-500" />
              <span className="font-semibold text-base hover:underline cursor-pointer text-gray-800 group-hover:text-pink-600">
                esi/student-blog
              </span>
              <span className="ml-auto px-2.5 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-white/50">
                Public
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-medium">
              Community hub. Survival guides, technical tips, and ESI news written by students for students. Join the conversation.
            </p>

            {/* Footer / Stats */}
            <div className="mt-auto flex items-center gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                 <span className="w-3.5 h-3.5 rounded-full bg-pink-500"></span>
                 <span className="font-medium text-gray-700">Community</span>
              </div>
              
              <div className="flex items-center gap-1.5 hover:text-pink-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>New</span>
              </div>

              <span className="ml-auto text-xs opacity-70 flex items-center gap-1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-3 w-3"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                 Active
              </span>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Plateforme ESI - Tous droits réservés</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;