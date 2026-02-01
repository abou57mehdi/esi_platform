import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PDFViewer from '../components/PDFViewer';
import { GITHUB_PAGES_BASE_URL } from '../utils/r2Config';

const ViewPdfPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const relativePath = searchParams.get('path');
  const title = searchParams.get('title') || 'Document';

  if (!relativePath) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No document specified.</p>
      </div>
    );
  }

  // Construct full URL
  const fileUrl = `${GITHUB_PAGES_BASE_URL}/${relativePath}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </button>
        <h1 className="font-semibold text-gray-800 truncate max-w-xl">{title}</h1>
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>
      
      <div className="flex-grow p-4 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden">
           <PDFViewer fileUrl={fileUrl} />
        </div>
      </div>
    </div>
  );
};

export default ViewPdfPage;