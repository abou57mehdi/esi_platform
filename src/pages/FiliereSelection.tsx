import React, { useState } from 'react';
import { useFiliereContext } from '../context/FiliereContext';
import { filieres } from '../data/filieres';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const FiliereSelection = () => {
  const { setFiliere } = useFiliereContext();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const handleSelect = (filiereId: string) => {
    setFiliere(filiereId);
    // Redirect back to home page after selection
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour à l'accueil
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Choisissez votre Filière (3CS)</h1>
        <p className="text-gray-600">Sélectionnez votre spécialisation pour le semestre 5</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filieres.map(filiere => (
          <div
            key={filiere.id}
            className="border rounded-lg p-6 hover:shadow-lg transition"
            style={{ borderColor: filiere.color }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${filiere.color}20` }}
              >
                <GraduationCap color={filiere.color} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{filiere.code}</h3>
                <p className="text-sm text-gray-600">{filiere.shortName}</p>
              </div>
            </div>

            <p className="text-sm mb-4">{filiere.description}</p>

            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Débouchés:</p>
              <ul className="text-xs space-y-1">
                {filiere.careerPaths.slice(0, 3).map((path, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{path}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(showDetails === filiere.id ? null : filiere.id)}
                className="flex-1 py-2 border rounded hover:bg-gray-50 text-sm"
              >
                {showDetails === filiere.id ? 'Masquer' : 'En savoir +'}
              </button>
              <button
                onClick={() => handleSelect(filiere.id)}
                className="flex-1 py-2 rounded text-white hover:opacity-90 text-sm"
                style={{ backgroundColor: filiere.color }}
              >
                Choisir
              </button>
            </div>

            {showDetails === filiere.id && (
              <div className="mt-4 pt-4 border-t" style={{ borderTopColor: filiere.color }}>
                <h4 className="font-semibold mb-2">Tous les débouchés:</h4>
                <ul className="text-xs space-y-1">
                  {filiere.careerPaths.map((path, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-1">•</span>
                      <span>{path}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiliereSelection;