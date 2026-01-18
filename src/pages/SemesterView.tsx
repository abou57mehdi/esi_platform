import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useFiliereContext } from '../context/FiliereContext';
import { getModulesBySemester } from '../data/modules';
import ModuleAccordion from '../components/ModuleAccordion';
import { Link } from 'react-router-dom';

const SemesterView = () => {
  const { semesterNumber } = useParams<{ semesterNumber: string }>();
  const semester = parseInt(semesterNumber ?? '1');
  const { selectedFiliere } = useFiliereContext();
  
  // Get modules for this semester
  const modules = getModulesBySemester(semester, selectedFiliere);

  // Determine semester name and description
  const getSemesterInfo = () => {
    switch(semester) {
      case 1:
        return { name: "Semestre 1", year: "1CS", desc: "Common Core - Year 1" };
      case 2:
        return { name: "Semestre 2", year: "1CS", desc: "Common Core - Year 1" };
      case 3:
        return { name: "Semestre 3", year: "2CS", desc: "Common Core - Year 2" };
      case 4:
        return { name: "Semestre 4", year: "2CS", desc: "Common Core - Year 2" };
      case 5:
        return { name: "Semestre 5", year: "3CS", desc: "Spécialisation" };
      case 6:
        return { name: "Semestre 6", year: "3CS", desc: "PFE - Projet de Fin d'Études" };
      default:
        return { name: `Semestre ${semester}`, year: "", desc: "" };
    }
  };

  const { name, year, desc } = getSemesterInfo();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour à l'accueil
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-600">{year} • {desc}</p>
      </div>

      {modules.length > 0 ? (
        <div>
          {modules.map((module: any) => (
            <ModuleAccordion key={module.id} module={module} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {semester === 5 && !selectedFiliere 
              ? "Veuillez sélectionner une filière pour accéder aux modules du semestre 5" 
              : "Aucun module disponible pour ce semestre"}
          </p>
          {semester === 5 && !selectedFiliere && (
            <Link 
              to="/select-filiere" 
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sélectionner une filière
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default SemesterView;