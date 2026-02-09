import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Award, Shield, Brain, Zap, Library, 
  Rocket, BookMarked, GitFork, Star, CalendarDays, ArrowRight, User
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
          color: "text-emerald-500",
          bgColor: "bg-emerald-500",
          lightBg: "bg-emerald-50",
          gradient: "from-emerald-400 to-emerald-600"
        };
      case 2:
        return { 
          year: "1CS", 
          desc: "Common Core - Year 1",
          color: "text-amber-500",
          bgColor: "bg-amber-500",
          lightBg: "bg-amber-50",
          gradient: "from-amber-400 to-amber-600"
        };
      case 3:
        return { 
          year: "2CS", 
          desc: "Common Core - Year 2",
          color: "text-emerald-600",
          bgColor: "bg-emerald-600",
          lightBg: "bg-emerald-50",
          gradient: "from-emerald-500 to-emerald-700"
        };
      case 4:
        return { 
          year: "2CS", 
          desc: "Common Core - Year 2",
          color: "text-amber-600",
          bgColor: "bg-amber-600",
          lightBg: "bg-amber-50",
          gradient: "from-amber-500 to-amber-700"
        };
      case 5:
        return { 
          year: "3CS", 
          desc: "Specialization",
          color: "text-amber-500",
          bgColor: "bg-amber-500",
          lightBg: "bg-amber-50",
          gradient: "from-amber-400 to-amber-600"
        };
      case 6:
        return { 
          year: "3CS", 
          desc: "PFE - Internship",
          color: "text-emerald-500",
          bgColor: "bg-emerald-500",
          lightBg: "bg-emerald-50",
          gradient: "from-emerald-400 to-emerald-600"
        };
      default:
        return { 
          year: "", 
          desc: "",
          color: "text-gray-500",
          bgColor: "bg-gray-500",
          lightBg: "bg-gray-50",
          gradient: "from-gray-400 to-gray-600"
        };
    }
  };

  const { year, desc, color, bgColor, lightBg, gradient } = getSemesterInfo();

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

  // Locked State for S5
  if (semester === 5 && requiresFiliere && !filiereSelected) {
    return (
      <div
        onClick={handleClick}
        className="
          relative group bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
        "
        style={{
          borderRadius: '4px',
          backgroundImage: 'linear-gradient(#fdfdfd 2px, transparent 2px), linear-gradient(90deg, #fdfdfd 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '-2px -2px'
        }}
      >
        {/* Folded Corner Effect */}
        <div 
          className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#ececec] to-white shadow-md z-20"
          style={{ 
            clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
            background: `linear-gradient(45deg, #fff 0%, #fff 49%, #ccc 50%, #fff 51%, #fff 100%)` 
          }}
        ></div>
        <div className="absolute top-0 right-0 w-12 h-12 bg-amber-600 -z-10"></div>

        {/* Header Image Area (Locked) */}
        <div className="relative p-4 pb-0">
          <div className="h-40 overflow-hidden rounded-sm border-4 border-white shadow-inner relative z-10 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
            <Award className="h-16 w-16 text-amber-400 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
               <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                 <Shield className="h-4 w-4 text-amber-600" />
                 <span className="text-sm font-bold text-amber-700">Restricted Access</span>
               </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4">
          <div className="flex items-center text-gray-400 text-xs mb-3 font-medium font-mono tracking-tight">
             <Star className="h-3.5 w-3.5 mr-2 text-amber-400" />
             <span>Specialization</span>
          </div>

          <h2 className="text-2xl font-serif font-bold text-amber-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
            Semester 05
          </h2>

          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
            Specialization year. Please select a filière to proceed with the curriculum.
          </p>

          <div className="pt-4 border-t-2 border-dashed border-gray-100 flex items-center justify-between mt-auto">
             <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
               Action Required
             </span>
             <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
             </span>
          </div>
        </div>
      </div>
    );
  }

  // Normal State
  return (
    <div
      onClick={handleClick}
      className="
        relative group bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
      "
      style={{
        borderRadius: '4px',
        backgroundImage: 'linear-gradient(#fdfdfd 2px, transparent 2px), linear-gradient(90deg, #fdfdfd 2px, transparent 2px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '-2px -2px'
      }}
    >
      {/* Folded Corner Effect */}
      <div 
        className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#ececec] to-white shadow-md z-20"
        style={{ 
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
          background: `linear-gradient(45deg, #fff 0%, #fff 49%, #ccc 50%, #fff 51%, #fff 100%)` 
        }}
      ></div>
      {/* Back of the fold color matches the semester color */}
      <div className={`absolute top-0 right-0 w-12 h-12 ${bgColor} -z-10`}></div>

      {/* Header Image Area */}
      <div className="relative p-4 pb-0">
        <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg transform scale-105 rotate-1`}></div>
        
        <div className={`h-40 overflow-hidden rounded-sm border-4 border-white shadow-inner relative z-10 bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-20" 
               style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px'}}>
          </div>
          
          <div className="text-white drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">
             {getIcon("h-16 w-16")}
          </div>

          {/* Progress Badge */}
          {progress > 0 && (
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow text-gray-800 flex items-center gap-1">
              <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${bgColor}`} style={{ width: `${progress}%` }}></div>
              </div>
              <span>{progress}%</span>
            </div>
          )}
        </div>
        
        {/* Ribbon Tag */}
        <div className="absolute top-8 left-2 z-20 flex">
          <div className={`${bgColor} text-white text-xs font-bold px-3 py-1.5 shadow-md relative`}>
            {year}
            <div className={`absolute top-0 right-0 -mr-2 w-0 h-0 border-t-[14px] border-l-transparent border-r-transparent border-b-[14px] border-t-${color.split('-')[1]}-500 border-b-${color.split('-')[1]}-500`}></div>
            {/* Note: The border trick above is tricky with dynamic colors in Tailwind without safelisting. 
                Simplifying the ribbon tail for dynamic colors: */}
             <div className="absolute top-0 right-0 -mr-2 w-0 h-0 border-t-[14px] border-t-transparent border-l-[8px] border-l-current border-b-[14px] border-b-transparent brightness-75"></div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-4">
        <div className="flex items-center text-gray-400 text-xs mb-3 font-medium font-mono tracking-tight">
          <CalendarDays className={`h-3.5 w-3.5 mr-2 ${color}`} />
          <span>Academic Year {year}</span>
        </div>
        
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
          Semester {semester}
        </h2>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
          {desc}
        </p>

        <div className="pt-4 border-t-2 border-dashed border-gray-100 flex items-center justify-between mt-auto relative z-10">
          <div className="flex items-center group/author">
            <div className="relative mr-3">
              <div className={`w-8 h-8 rounded-full border border-gray-200 p-0.5 group-hover/author:border-${color.split('-')[1]}-400 transition-colors`}>
                <div className={`w-full h-full ${lightBg} rounded-full flex items-center justify-center ${color}`}>
                   <GitFork className="h-4 w-4" />
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-500 font-sans">Modules: {semester * 4}</span>
          </div>
          
          <span className={`w-8 h-8 rounded-full ${lightBg} flex items-center justify-center ${color} group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}>
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SemesterCard;