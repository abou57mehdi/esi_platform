import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ElementCard from '../components/ElementCard';
import { Link } from 'react-router-dom';

const ModuleView = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { semesterNumber } = useParams<{ semesterNumber: string }>();

  // In a real app, we would fetch the module details based on moduleId
  // For now, we'll use mock data
  const module = {
    id: moduleId || 'mock-module',
    code: 'MOCK-101',
    name: 'Module de démonstration',
    semester: parseInt(semesterNumber || '1'),
    year: '1CS',
    credits: 6,
    coefficient: 3,
    professor: 'Dr. Exemple',
    category: 'Informatique',
    elements: [
      {
        id: 'mock-element-1',
        number: 1,
        title: 'Introduction au module',
        pdfPath: 'https://example.com/mock1.pdf',
        pages: 50,
        fileSize: '2.5 MB',
        topics: ['Concepts de base', 'Fondamentaux']
      },
      {
        id: 'mock-element-2',
        number: 2,
        title: 'Approfondissement',
        pdfPath: 'https://example.com/mock2.pdf',
        pages: 75,
        fileSize: '3.2 MB',
        topics: ['Application', 'Exemples pratiques']
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Link 
          to={`/semester/${module.semester}`} 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour au semestre {module.semester}
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{module.code}</h1>
            <p className="text-gray-600">{module.name}</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
            {module.category}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
          <span>S{module.semester} • {module.year}</span>
          <span>{module.credits} crédits</span>
          <span>Coef: {module.coefficient}</span>
          <span>Prof: {module.professor}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Éléments du module</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default ModuleView;