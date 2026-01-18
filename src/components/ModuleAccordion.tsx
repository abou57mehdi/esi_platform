import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, User, Calendar, Award } from 'lucide-react';
import ElementCard from './ElementCard';

interface ModuleAccordionProps {
  module: {
    id: string;
    code: string;
    name: string;
    semester: number;
    year: string;
    credits: number;
    coefficient: number;
    professor: string;
    category: string;
    elements: Array<{
      id: string;
      number: number;
      title: string;
      pdfPath: string;
      pages: number;
      fileSize: string;
      topics: string[];
    }>;
  };
}

const ModuleAccordion = ({ module }: ModuleAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-xl mb-6 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button
        className={`w-full flex justify-between items-center p-5 text-left transition-colors duration-300 ${isOpen ? 'bg-blue-50/50' : 'hover:bg-white/40'}`}
        onClick={toggleAccordion}
      >
        <div>
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">{module.code}</h3>
            <span className="ml-3 px-2.5 py-0.5 bg-blue-100/70 text-blue-800 text-xs font-bold rounded-full border border-blue-200">
              {module.category}
            </span>
          </div>
          <p className="text-gray-700 font-medium mt-1">{module.name}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <span className="inline-flex items-center text-xs font-semibold text-gray-500 bg-white/30 px-2 py-1 rounded-md">
              <Calendar className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
              S{module.semester} • {module.year}
            </span>
            <span className="inline-flex items-center text-xs font-semibold text-gray-500 bg-white/30 px-2 py-1 rounded-md">
              <Award className="mr-1.5 h-3.5 w-3.5 text-indigo-500" />
              {module.credits} crédits
            </span>
            <span className="inline-flex items-center text-xs font-semibold text-gray-500 bg-white/30 px-2 py-1 rounded-md">
              <User className="mr-1.5 h-3.5 w-3.5 text-purple-500" />
              {module.professor}
            </span>
          </div>
        </div>
        <div className="bg-white/50 p-2 rounded-full shadow-sm">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6 bg-white/30 border-t border-white/40">
          <div className="flex items-center mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <h4 className="mx-4 font-bold text-gray-800 text-sm uppercase tracking-widest">Contenu du module</h4>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {module.elements.map(element => (
              <ElementCard
                key={element.id}
                element={element}
                moduleId={module.id}
                semesterNumber={module.semester}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleAccordion;