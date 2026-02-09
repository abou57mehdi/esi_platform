import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Eye, Briefcase, Upload, Star, Filter, ArrowLeft, Search, Copy, Mail, Building2, Check } from 'lucide-react';
import { GITHUB_PAGES_BASE_URL } from '../utils/r2Config';
import { hrContacts } from '../data/hrContacts';
import Fuse from 'fuse.js';

interface InternshipReport {
  name: string;
  title: string;
  path: string;
  size: number;
  sizeFormatted: string;
  year: string;
  lastModified: string;
}

const InternshipPage = () => {
  const [reports, setReports] = useState<InternshipReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'1CS' | '2CS' | '3CS' | 'contacts'>('contacts');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${GITHUB_PAGES_BASE_URL}/manifest.json`);
        const data = await response.json();
        setReports(data.internships || []);
      } catch (err) {
        console.error('Error fetching reports:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const filteredReports = reports.filter(r => r.year === activeTab);
  
  const filteredContacts = useMemo(() => {
    if (!searchQuery) return hrContacts;

    const fuse = new Fuse(hrContacts, {
      keys: ['company', 'email'],
      threshold: 0.3, // Adjust for sensitivity (0.0 = exact, 1.0 = match anything)
      distance: 100,
    });

    return fuse.search(searchQuery).map(result => result.item);
  }, [searchQuery]);

  const handleUpload = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfhkLvh57MI127HdYgzxJZ33mdphKfSl0j-XdzhNnCXaLjtXw/viewform?usp=sf_link', '_blank');
  };

  const handleView = (path: string, title: string) => {
    navigate(`/view-pdf?path=${encodeURIComponent(path)}&title=${encodeURIComponent(title)}`);
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF] font-sans selection:bg-emerald-500 selection:text-white">
      {/* Header */}
      <div className="bg-emerald-600 text-white pt-20 pb-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-white"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-emerald-100 hover:text-white mb-6 transition-colors group font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </button>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                Rapports de Stage
              </h1>
              <p className="text-emerald-100 text-lg max-w-2xl font-light">
                Explorez les rapports de stage des promotions précédentes.
                Inspirez-vous, apprenez, et partagez votre expérience.
              </p>
            </div>
            
            <button
              onClick={handleUpload}
              className="
                flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-bold shadow-lg
                hover:bg-emerald-50 hover:scale-105 transition-all active:scale-95
              "
            >
              <Upload className="h-5 w-5" />
              Soumettre mon rapport
            </button>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="block w-full h-12 md:h-16 text-[#F8FBFF]" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 min-h-[60vh]">
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 inline-flex flex-wrap justify-center">
            {(['1CS', '2CS', '3CS'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2 rounded-full text-sm font-bold transition-all duration-200
                  ${activeTab === tab 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'}
                `}
              >
                Année {tab}
              </button>
            ))}
            <button
                onClick={() => setActiveTab('contacts')}
                className={`
                  px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2
                  ${activeTab === 'contacts'
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'}
                `}
              >
                <Building2 className="h-4 w-4" />
                Carnet d'Adresses
              </button>
          </div>
        </div>

        {activeTab === 'contacts' ? (
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8 relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une entreprise ou un email..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContacts.map((contact) => (
                <div key={contact.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-emerald-50 p-3 rounded-lg group-hover:bg-emerald-100 transition-colors">
                        <Building2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-gray-400 hover:text-emerald-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{contact.company}</h3>
                    
                    <div className="flex items-center gap-2 mt-4 bg-gray-50 p-3 rounded-lg group-hover:bg-emerald-50/50 transition-colors">
                       <span className="text-sm text-gray-600 truncate flex-1">{contact.email}</span>
                       <button
                         onClick={() => copyToClipboard(contact.email, contact.id)}
                         className="text-gray-400 hover:text-emerald-600 transition-colors relative"
                         title="Copier l'email"
                       >
                         {copiedId === contact.id ? (
                           <Check className="h-4 w-4 text-emerald-500" />
                         ) : (
                           <Copy className="h-4 w-4" />
                         )}
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredContacts.length === 0 && (
               <div className="text-center py-12">
                  <p className="text-gray-500">Aucun contact trouvé pour "{searchQuery}"</p>
               </div>
            )}
          </div>
        ) : (
          /* Reports Grid */
          <>
            {!loading && filteredReports.length === 0 && (
              <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl bg-white/50">
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun rapport pour le moment</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">
                  Soyez le premier à partager votre expérience de stage {activeTab} !
                </p>
                <button onClick={handleUpload} className="text-emerald-600 font-bold hover:underline">
                  Partager mon rapport
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report) => (
                <div 
                  key={report.path}
                  className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-200"
                >
                  {/* Ticket Notch - Left */}
                  <div className="absolute top-[72px] -left-3 w-6 h-6 bg-[#F8FBFF] rounded-full border border-gray-200 z-10"></div>
                  {/* Ticket Notch - Right */}
                  <div className="absolute top-[72px] -right-3 w-6 h-6 bg-[#F8FBFF] rounded-full border border-gray-200 z-10"></div>
                  
                  {/* Header (Stub) */}
                  <div className="bg-slate-900 text-white p-5 pt-6 pb-8 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-1">Document Type</span>
                          <div className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-emerald-400" />
                              <span className="font-bold text-lg tracking-wide">PDF REPORT</span>
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10">
                          <span className="font-mono font-bold text-emerald-400">{report.year}</span>
                        </div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="absolute bottom-0 left-0 w-full border-b-2 border-dashed border-slate-700/50"></div>
                  </div>

                  {/* Body */}
                  <div className="p-6 pt-8 flex-grow flex flex-col relative bg-white">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {report.title}
                    </h3>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Size</span>
                          <span className="text-sm font-medium text-slate-600 flex items-center gap-1">
                              <Download className="h-3 w-3" /> {report.sizeFormatted}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Uploaded</span>
                          <span className="text-sm font-medium text-slate-600">
                              {new Date(report.lastModified).toLocaleDateString()}
                          </span>
                        </div>
                    </div>

                    {/* Barcode Decoration */}
                    <div className="mt-auto pt-6 flex items-end justify-between border-t border-gray-100">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleView(report.path, report.title)}
                            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200"
                          >
                            <Eye className="h-4 w-4" /> OPEN
                          </button>
                          <a 
                            href={`${GITHUB_PAGES_BASE_URL}/${report.path}`}
                            download
                            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                          >
                            <Download className="h-5 w-5" />
                          </a>
                        </div>
                        
                        {/* Fake Barcode */}
                        <div className="opacity-20 flex gap-0.5 h-8 items-end select-none">
                          <div className="w-1 h-full bg-black"></div>
                          <div className="w-0.5 h-3/4 bg-black"></div>
                          <div className="w-2 h-full bg-black"></div>
                          <div className="w-0.5 h-1/2 bg-black"></div>
                          <div className="w-1 h-full bg-black"></div>
                          <div className="w-3 h-2/3 bg-black"></div>
                          <div className="w-1 h-full bg-black"></div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InternshipPage;