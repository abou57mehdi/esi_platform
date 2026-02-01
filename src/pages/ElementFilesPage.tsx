import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Eye } from 'lucide-react';
import { useFiliereContext } from '../context/FiliereContext';
import { getModulesBySemester } from '../data/modules';
import { GITHUB_PAGES_BASE_URL } from '../utils/r2Config';

// Helper to normalize module names to match folder structure
const normalizeName = (name: string) => {
  return name.trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-zA-Z0-9]/g, '_') // Replace all non-alphanumeric chars with _
    .replace(/_+/g, '_') // Replace multiple underscores with one
    .replace(/^_|_$/g, ''); // Trim underscores from ends
};

interface ManifestFile {
  name: string;
  path: string;
  size: number;
  sizeFormatted: string;
  lastModified: string;
}

interface Manifest {
  [directoryPath: string]: ManifestFile[];
}

const ElementFilesPage = () => {
  const { semesterNumber, moduleId, elementId } = useParams<{ 
    semesterNumber: string; 
    moduleId: string; 
    elementId: string; 
  }>();
  const navigate = useNavigate();
  const { selectedFiliere } = useFiliereContext();
  
  const [files, setFiles] = useState<ManifestFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract element info from module data
  const semester = parseInt(semesterNumber || '1');
  const modules = getModulesBySemester(semester, selectedFiliere);
  const module = modules.find(m => m.id === moduleId);
  const element = module?.elements.find(e => e.id === elementId);

  useEffect(() => {
    const fetchFiles = async () => {
      if (!module || !element) return;

      try {
        setLoading(true);
        const manifestUrl = `${GITHUB_PAGES_BASE_URL}/manifest.json`;
        console.log(`[Debug] Fetching manifest from: ${manifestUrl}`);

        const response = await fetch(manifestUrl);
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        
        const fullManifest = await response.json();
        const manifest = fullManifest.documents || {};
        const manifestKeys = Object.keys(manifest);
        
        const filiereFolder = (selectedFiliere || 'ISITD').toUpperCase();
        const semesterFolder = `S${semester}`;
        const normalizedModuleName = normalizeName(module.name);
        
        // Base path for the module
        const moduleBasePath = `${filiereFolder}/${semesterFolder}/${normalizedModuleName}`;
        // Specific path for the element (elt1 or elt2)
        const elementSpecificPath = `${moduleBasePath}/elt${element.number}`;
        
        console.log(`[Debug] Target Element Path: "${elementSpecificPath}"`);

        // Find keys that match the element specific path
        const matchingKeys = manifestKeys.filter(key => 
          key === elementSpecificPath || key.startsWith(`${elementSpecificPath}/`)
        );

        let foundFiles: ManifestFile[] = [];
        matchingKeys.forEach(key => {
          const filesInDir = manifest[key].map(f => ({
            ...f,
            path: f.path.startsWith('http') ? f.path : `${GITHUB_PAGES_BASE_URL}/${f.path}`
          }));
          foundFiles = [...foundFiles, ...filesInDir];
        });

        // If no files found in eltX folder, try looking in the module base folder as a fallback
        if (foundFiles.length === 0) {
          console.log(`[Debug] No files in ${elementSpecificPath}, checking base folder: ${moduleBasePath}`);
          const baseKeys = manifestKeys.filter(key => key === moduleBasePath);
          baseKeys.forEach(key => {
            const filesInDir = manifest[key].map(f => ({
              ...f,
              path: f.path.startsWith('http') ? f.path : `${GITHUB_PAGES_BASE_URL}/${f.path}`
            }));
            foundFiles = [...foundFiles, ...filesInDir];
          });
        }

        setFiles(foundFiles);
        setLoading(false);
      } catch (err) {
        console.error('[Debug] Error:', err);
        setFiles([]); 
        setLoading(false);
      }
    };

    fetchFiles();
  }, [module, element, semester, selectedFiliere]);

  const handleView = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  const handleDownload = (filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des fichiers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link 
            to={`/semester/${semesterNumber}/module/${moduleId}`}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour au module
          </Link>
          
          <h1 className="text-2xl font-bold text-gray-900">
            {element?.title || 'Fichiers de l\'élément'}
          </h1>
          <p className="text-gray-600">
            Élément {element?.number} - {module?.name}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Documents disponibles</h2>
            
            {files.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Aucun fichier trouvé pour ce module.</p>
                <p className="text-sm text-gray-400 mt-2">Dossier attendu: { (selectedFiliere || 'ISITD').toUpperCase() }/S{semester}/{module ? normalizeName(module.name) : '...'}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {files.map((file, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-500 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">{file.name}</h3>
                        <p className="text-sm text-gray-500">
                          {file.sizeFormatted}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementFilesPage;