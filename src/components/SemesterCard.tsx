import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Award, Briefcase, Shield, Brain, Zap, Library } from 'lucide-react';
import { useFiliereContext } from '../context/FiliereContext';
import { useProgress } from '../hooks/useProgress';

interface SemesterCardProps {
  semester: number;
  requiresFiliere?: boolean;
  filiereSelected?: boolean;
}

const SemesterCard = ({ semester, requiresFiliere = false, filiereSelected = false }: SemesterCardProps) => {
  const { selectedFiliere } = useFiliereContext();
  const { getProgress } = useProgress();
  const progress = getProgress(semester);
  const navigate = useNavigate();

  // Determine semester name and description
  const getSemesterInfo = () => {
    switch(semester) {
      case 1:
        return { year: "1CS", desc: "Common Core - Year 1" };
      case 2:
        return { year: "1CS", desc: "Common Core - Year 1" };
      case 3:
        return { year: "2CS", desc: "Common Core - Year 2" };
      case 4:
        return { year: "2CS", desc: "Common Core - Year 2" };
      case 5:
        return { year: "3CS", desc: "Specialization" };
      case 6:
        return { year: "3CS", desc: "PFE - Internship" };
      default:
        return { year: "", desc: "" };
    }
  };

  const { year, desc } = getSemesterInfo();

  // Get appropriate icon based on semester
  const getIcon = () => {
    if (semester === 6) return <Briefcase className="h-10 w-10 text-blue-600" />;
    if (semester === 5) {
      // Show different icon based on selected filière
      if (selectedFiliere === 'icsds') return <Brain className="h-10 w-10 text-blue-600" />;
      if (selectedFiliere === 'isitd') return <Zap className="h-10 w-10 text-green-600" />;
      if (selectedFiliere === 'iind') return <Library className="h-10 w-10 text-orange-600" />;
      if (selectedFiliere === 'issic') return <Shield className="h-10 w-10 text-red-600" />;
      return <Award className="h-10 w-10 text-purple-600" />;
    }
    return <BookOpen className="h-10 w-10 text-indigo-600" />;
  };

  // Handle click based on requirements
  const handleClick = () => {
    if (semester === 5 && requiresFiliere && !filiereSelected) {
      // Navigate to filière selection instead of semester view
      navigate('/select-filiere');
    } else if (semester !== 5 || filiereSelected) {
      // Navigate to semester page for all other cases
      navigate(`/semester/${semester}`);
    }
  };

  // Special rendering for S5 without filière
  if (semester === 5 && requiresFiliere && !filiereSelected) {
    return (
      <div
        onClick={handleClick}
        className="
          relative overflow-hidden bg-white/70 backdrop-blur-md
          border-2 border-dashed border-amber-300/60 rounded-2xl p-6 cursor-pointer
          hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
          shadow-lg hover:bg-white/80
        "
      >
        <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-amber-200/30 rounded-full blur-2xl"></div>
        <div className="text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-amber-100/50 rounded-2xl shadow-inner">
              <Award className="h-10 w-10 text-amber-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1 text-gray-800">Semestre 5</h3>
          <p className="text-amber-600 font-semibold text-sm mb-3">3CS - Spécialisation</p>
          <div className="bg-amber-100/40 py-1.5 px-3 rounded-full inline-block text-amber-700 mb-4 font-bold text-xs uppercase tracking-wider">
            ⚠️ Filière Requise
          </div>
          <div>
            <button className="
              px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600
              text-white rounded-xl hover:from-amber-600 hover:to-orange-700
              text-sm font-bold shadow-lg hover:shadow-xl transition-all
            "
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling to parent div
              navigate('/select-filiere');
            }}>
              Sélectionner une filière
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="
        relative overflow-hidden bg-white/60 backdrop-blur-lg
        border border-white/50 rounded-2xl p-6 cursor-pointer
        hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
        shadow-xl hover:bg-white/80 group
      "
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-white/40 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
            {getIcon()}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-1 text-gray-800">Semestre {semester}</h3>
        <p className="text-blue-600 font-bold text-sm mb-1">{year}</p>
        <p className="text-gray-500 text-sm mb-4 font-medium">{desc}</p>

        {progress > 0 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200/50 rounded-full h-3 backdrop-blur-sm overflow-hidden border border-white/20">
              <div
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-tighter">{progress}% complété</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SemesterCard;