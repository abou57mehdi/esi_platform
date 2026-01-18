import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, Eye } from 'lucide-react';
import { useFiliereContext } from '../context/FiliereContext';
import { getModulesBySemester } from '../data/modules';
import { getPdfUrl } from '../utils/r2Config';

const ElementFilesPage = () => {
  const { semesterNumber, moduleId, elementId } = useParams<{ 
    semesterNumber: string; 
    moduleId: string; 
    elementId: string; 
  }>();
  const navigate = useNavigate();
  const { selectedFiliere } = useFiliereContext();
  
  const [files, setFiles] = useState<{name: string, size: number, path: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract element info from module data
  const semester = parseInt(semesterNumber || '1');
  const modules = getModulesBySemester(semester, selectedFiliere);
  const module = modules.find(m => m.id === moduleId);
  const element = module?.elements.find(e => e.id === elementId);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);

        // Construct the path based on the element's pdfPath
        if (element && element.pdfPath) {
          // Extract the base path from the pdfPath
          const basePath = element.pdfPath.substring(0, element.pdfPath.lastIndexOf('/') + 1);

          // Fetch the directory listing from GitHub Pages
          // Since GitHub Pages doesn't provide directory listings, we'll need to maintain a manifest file
          // For now, we'll use a heuristic approach to determine the files in the directory

          // In a real implementation, you'd have a manifest.json file in each directory
          // that lists all the files. For now, we'll use the known structure.

          // For demonstration purposes, let's create a function that would fetch from a manifest
          // if it existed, and fall back to a known structure
          const fetchFromManifest = async (path: string) => {
            try {
              // In a real implementation, you'd fetch a manifest.json file
              // that contains the list of files in the directory
              // const response = await fetch(`${GITHUB_PAGES_BASE_URL}/${path}/manifest.json`);
              // if (response.ok) {
              //   const manifest = await response.json();
              //   return manifest.files.map((file: any) => ({
              //     name: file.name,
              //     size: file.size,
              //     path: `${GITHUB_PAGES_BASE_URL}/${path}/${file.name}`
              //   }));
              // }

              // For now, we'll use the known structure from your docs folder
              // This would be replaced with actual manifest fetching in production
              if (path.includes('elt1')) {
                return [
                  { name: 'hadoop_intro.pdf', size: 225510, path: getPdfUrl('isitd/semestre_cinq/technologies_de_données_massives/elt1', 'hadoop_intro.pdf') },
                  { name: 'hadoop_ch2.pdf', size: 288380, path: getPdfUrl('isitd/semestre_cinq/technologies_de_données_massives/elt1', 'hadoop_ch2.pdf') },
                  { name: 'hadoop_ch3.pdf', size: 279169, path: getPdfUrl('isitd/semestre_cinq/technologies_de_données_massives/elt1', 'hadoop_ch3.pdf') }
                ];
              } else if (path.includes('elt2')) {
                return [
                  { name: 'spark_overview.pdf', size: 198756, path: getPdfUrl('isitd/semestre_cinq/technologies_de_données_massives/elt2', 'spark_overview.pdf') },
                  { name: 'spark_advanced.pdf', size: 245678, path: getPdfUrl('isitd/semestre_cinq/technologies_de_données_massives/elt2', 'spark_advanced.pdf') }
                ];
              } else {
                // Fallback to the single file if we can't determine the directory contents
                return [
                  { name: element.pdfPath.split('/').pop() || 'document.pdf', size: 102400, path: element.pdfPath }
                ];
              }
            } catch (manifestErr) {
              console.warn('Could not fetch manifest, using fallback:', manifestErr);
              // Fallback to the single file if manifest doesn't exist
              return [
                { name: element.pdfPath.split('/').pop() || 'document.pdf', size: 102400, path: element.pdfPath }
              ];
            }
          };

          const filesList = await fetchFromManifest(basePath);
          setFiles(filesList);
        }

        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des fichiers');
        setLoading(false);
        console.error(err);
      }
    };

    fetchFiles();
  }, [element]);

  const handleView = (filePath: string) => {
    // Open PDF in new tab/window
    window.open(filePath, '_blank');
  };

  const handleDownload = (filePath: string) => {
    // Trigger download
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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retour
          </button>
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
                <p className="text-gray-500">Aucun fichier disponible pour cet élément</p>
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
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(file.path)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </button>
                      <button
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
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