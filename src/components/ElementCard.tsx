import React from 'react';
import { FileText, Eye, Download, Star, StarOff, Folder } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { useNavigate } from 'react-router-dom';

interface ElementCardProps {
  element: {
    id: string;
    number: number;
    title: string;
    pdfPath: string;
  };
  moduleId: string;
  semesterNumber: number;
}

const ElementCard = ({ element, moduleId, semesterNumber }: ElementCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isElementFavorite = isFavorite(element.id);
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to the element files page
    navigate(`/semester/${semesterNumber}/module/${moduleId}/element/${element.id}`);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-4 hover:shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <div className="p-2 bg-blue-100/50 rounded-lg mr-3">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Élément {element.number}</h4>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-medium">{element.title}</p>
        </div>
        <button 
          onClick={() => toggleFavorite(element.id)}
          className="p-1.5 rounded-full hover:bg-white/50 transition-colors text-gray-400 hover:text-yellow-500 focus:outline-none"
        >
          {isElementFavorite ? (
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
          ) : (
            <StarOff className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className="mt-5">
        <button
          onClick={handleNavigate}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all"
        >
          <Folder className="h-4 w-4 mr-2" />
          Accéder aux ressources
        </button>
      </div>
    </div>
  );
};

export default ElementCard;