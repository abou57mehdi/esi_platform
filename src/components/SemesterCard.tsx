import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Award, Shield, Brain, Zap, Library, 
  Binary, Code2, Layers, Cpu, Rocket,
  BookMarked, GitFork, Star, Circle, CalendarDays
} from 'lucide-react';
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
        return { 
          year: "1CS", 
          desc: "Common Core - Year 1",
          color: "text-blue-400",
          dotColor: "bg-blue-400"
        };
      case 2:
        return { 
          year: "1CS", 
          desc: "Common Core - Year 1",
          color: "text-indigo-400",
          dotColor: "bg-indigo-400"
        };
      case 3:
        return { 
          year: "2CS", 
          desc: "Common Core - Year 2",
          color: "text-purple-400",
          dotColor: "bg-purple-400"
        };
      case 4:
        return { 
          year: "2CS", 
          desc: "Common Core - Year 2",
          color: "text-cyan-400",
          dotColor: "bg-cyan-400"
        };
      case 5:
        return { 
          year: "3CS", 
          desc: "Specialization",
          color: "text-amber-400",
          dotColor: "bg-amber-400"
        };
      case 6:
        return { 
          year: "3CS", 
          desc: "PFE - Internship",
          color: "text-emerald-400",
          dotColor: "bg-emerald-400"
        };
      default:
        return { 
          year: "", 
          desc: "",
          color: "text-gray-400",
          dotColor: "bg-gray-400"
        };
    }
  };

  const { year, desc, color, dotColor } = getSemesterInfo();

  // Get appropriate icon based on semester
  const getIcon = (className: string) => {
    if (semester === 6) return <Rocket className={className} />;
    if (semester === 5) {
      if (selectedFiliere === 'icsds') return <Brain className={className} />;
      if (selectedFiliere === 'isitd') return <Zap className={className} />;
      if (selectedFiliere === 'iind') return <Library className={className} />;
      if (selectedFiliere === 'issic') return <Shield className={className} />;
      return <Award className={className} />;
    }
    return <BookMarked className={className} />;
  };

  // Handle click based on requirements
  const handleClick = () => {
    if (semester === 5 && requiresFiliere && !filiereSelected) {
      navigate('/select-filiere');
    } else if (semester !== 5 || filiereSelected) {
      navigate(`/semester/${semester}`);
    }
  };

  // Special rendering for S5 without filière
  if (semester === 5 && requiresFiliere && !filiereSelected) {
    return (
      <div
        onClick={handleClick}
        className="
          flex flex-col min-h-[220px] h-full
          bg-white/60 backdrop-blur-md rounded-md border border-amber-300/50
          p-6 cursor-pointer transition-all duration-200
          hover:shadow-lg hover:border-amber-400 hover:bg-white/70
          group relative overflow-hidden
        "
      >
        <div className="flex items-center gap-2 mb-3 text-amber-600">
          <Award className="h-6 w-6" />
          <span className="font-semibold text-base hover:underline cursor-pointer">
            esi/semestre-05-specialisation
          </span>
          <span className="ml-auto px-2.5 py-1 rounded-full border border-amber-200 text-xs font-medium text-amber-700 bg-amber-50">
            Private
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          Specialization year. Access restricted. Please select a filière to proceed with the curriculum and access modules.
        </p>

        <div className="mt-auto pt-4 flex items-center gap-5 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
             <span className="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
             <span className="text-sm">Specialization</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4" />
            <span className="text-sm">Required</span>
          </div>
        </div>
        
        <button className="
          mt-6 w-full py-2 bg-amber-50 border border-amber-200 rounded-md
          text-amber-700 text-sm font-semibold
          hover:bg-amber-100 hover:border-amber-300 transition-colors
        ">
          Select Filière
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="
        flex flex-col min-h-[220px] h-full
        bg-white/40 backdrop-blur-md rounded-md border border-white/40
        p-6 cursor-pointer transition-all duration-200
        hover:shadow-lg hover:border-blue-400/50 hover:bg-white/60
        group
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        {getIcon(`h-6 w-6 ${color}`)}
        <span className={`font-semibold text-base hover:underline cursor-pointer text-gray-800 group-hover:text-blue-600`}>
          esi/semestre-0{semester}
        </span>
        <span className="ml-auto px-2.5 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-white/50">
          Public
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-medium">
        {desc}. Contains modules, resources, and materials for the academic year {year}. Explore the specialized curriculum for this period.
      </p>

      {/* Footer / Stats */}
      <div className="mt-auto flex items-center gap-5 text-sm text-gray-500">
        <div className="flex items-center gap-1.5">
           <span className={`w-3.5 h-3.5 rounded-full ${dotColor}`}></span>
           <span className="font-medium text-gray-700">{year}</span>
        </div>
        
        {progress > 0 && (
          <div className="flex items-center gap-1.5">
             <Star className="h-4 w-4 hover:text-yellow-500 transition-colors" />
             <span>{progress}%</span>
          </div>
        )}
        
        <div className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <GitFork className="h-4 w-4" />
          <span>{semester * 4}</span>
        </div>

        <span className="ml-auto text-xs opacity-70 flex items-center gap-1">
           <CalendarDays className="h-3 w-3" />
           Latest
        </span>
      </div>

      {/* Progress Line (GitHub Language Bar style) */}
      {progress > 0 && (
        <div className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden border border-gray-300/20">
          <div 
            className={`h-full ${dotColor} opacity-80`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SemesterCard;