import React, { useState } from 'react';
import { useFiliereContext } from '../context/FiliereContext';
import { filieres } from '../data/filieres';
import SemesterCard from '../components/SemesterCard';
import { useNavigate } from 'react-router-dom';
import { Search, Star, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  const { selectedFiliere } = useFiliereContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const getFiliereInfo = () => {
    if (!selectedFiliere) return null;
    return filieres.find(f => f.id === selectedFiliere);
  };

  const filiereInfo = getFiliereInfo();

  return (
    <div className="min-h-screen bg-[#F8FBFF] relative overflow-x-hidden font-sans selection:bg-[#4A90E2] selection:text-white">
      
      {/* Decorative Doodles */}
      <div className="fixed top-20 right-10 text-[#4A90E2]/10 rotate-12 pointer-events-none select-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L61 35L98 35L68 57L79 91L50 70L21 91L32 57L2 35L39 35L50 0Z" />
        </svg>
      </div>
      <div className="fixed bottom-40 left-10 text-[#1E5B8C]/10 -rotate-12 pointer-events-none select-none">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Hero Section with Wave Pattern */}
      <div className="relative bg-[#1E5B8C] text-white pt-24 pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
           {/* Abstract Geometric Overlay */}
           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/10"></div>
           <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-[#4A90E2] filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-start">
             {/* Logo/Brand Area */}
             <div className="flex items-center gap-4 mb-8">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                   <img 
                    src="/assets/images/esi_traingle.png" 
                    alt="ESI Logo" 
                    className="h-12 w-12 object-contain"
                  />
                </div>
             </div>

             {/* Filière Badge if selected */}
             {filiereInfo && (
              <div 
                className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                onClick={() => navigate('/select-filiere')}
              >
                 <div
                    className="px-2 py-0.5 rounded-full text-white text-xs font-bold shadow-sm"
                    style={{ backgroundColor: filiereInfo.color }}
                  >
                    {filiereInfo.code}
                  </div>
                  <span className="text-sm font-medium text-blue-100">{filiereInfo.shortName}</span>
                  <span className="text-xs text-blue-300 ml-2 hover:text-white">Change</span>
              </div>
            )}
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight relative inline-block">
              Plateforme ESI
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#4A90E2] -z-10 transform -rotate-1"></span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light">
              Accédez à tous vos résumés de modules pour le cycle d'ingénieur à l'École Supérieure d'Informatique.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="block w-full h-20 md:h-32 text-[#F8FBFF]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,224L48,213.3C96,203,192,192,288,197.3C384,203,480,224,576,224C672,224,768,203,864,186.7C960,171,1056,160,1152,165.3C1248,171,1344,192,1392,202.7L1440,213.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 min-h-[60vh]">
        {/* Sticky Note for Blog */}
        <div 
            onClick={() => navigate('/blog')}
            className="hidden lg:block absolute right-4 top-0 w-64 rotate-3 bg-pink-100 p-6 shadow-lg transform -translate-y-1/2 z-20 cursor-pointer hover:scale-105 transition-transform" 
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/50 -mt-4 rotate-1"></div>
          <h3 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 fill-current" /> Student Blog
          </h3>
          <p className="text-sm text-gray-700 font-handwriting mb-2">
            Check out the student community blog for survival guides and tips!
          </p>
          <div className="text-xs font-bold text-pink-600 flex items-center gap-1 group">
            Read Blog <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform"/>
          </div>
        </div>

        {/* Mobile Blog Button */}
        <div className="lg:hidden mb-8">
            <button 
                onClick={() => navigate('/blog')}
                className="w-full bg-pink-100 border border-pink-200 p-4 rounded-lg flex items-center justify-between text-pink-700 font-medium shadow-sm active:scale-95 transition-transform"
            >
                <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" /> Student Blog
                </span>
                <ArrowRight className="h-5 w-5" />
            </button>
        </div>

        {/* Semesters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(semester => (
            <SemesterCard
              key={semester}
              semester={semester}
              requiresFiliere={semester === 5}
              filiereSelected={!!selectedFiliere}
            />
          ))}
        </div>
      </div>

      {/* Torn Paper Footer */}
      <footer className="mt-20 relative bg-[#1E5B8C] text-white pt-20 pb-12">
        {/* Torn Edge Effect */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[#F8FBFF]" 
             style={{ 
               clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)" 
             }}>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Plateforme ESI</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              Built with ❤️ by ESI students for ESI students.
            </p>
          </div>
          
          <div className="mt-12 opacity-50 text-sm font-mono">
            &copy; {new Date().getFullYear()} Plateforme ESI - Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;