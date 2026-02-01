import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, Search, Tag, Star } from 'lucide-react';
import { GITHUB_PAGES_BASE_URL } from '../utils/r2Config';
import Fuse from 'fuse.js';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  image: string;
}

const BlogHome = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // High quality abstract geometric tech image
  const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000";
  const PRIMARY_BLUE = "#1E5B8C";
  const ACCENT_BLUE = "#4A90E2";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${GITHUB_PAGES_BASE_URL}/manifest.json`);
        const data = await response.json();
        setPosts(data.blog || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  // Helper to handle broken images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  const fuse = new Fuse(posts, {
    keys: ['title', 'description', 'category', 'author'],
    threshold: 0.3,
  });

  const filteredPosts = searchTerm
    ? fuse.search(searchTerm).map(result => result.item)
    : posts;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FBFF]">
        <div className="relative">
          <div className="w-16 h-16 bg-[#4A90E2] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="w-16 h-16 bg-[#1E5B8C] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 absolute -top-4 -left-4"></div>
          <div className="w-16 h-16 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 absolute -top-4 -right-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FBFF] relative overflow-x-hidden font-sans selection:bg-[#4A90E2] selection:text-white">
      
      {/* Decorative Doodles */}
      <div className="fixed top-20 right-10 text-[#4A90E2]/10 rotate-12 pointer-events-none select-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0L61 35L98 35L68 57L79 91L50 70L21 91L32 57L2 35L39 35L50 0Z" />
        </svg>
      </div>
      <div className="fixed bottom-40 left-10 text-[#1E5B8C]/10 -rotate-12 pointer-events-none select-none">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Hero Section with Wave Pattern */}
      <div className="relative bg-[#1E5B8C] text-white pt-24 pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
           {/* Abstract Geometric Overlay */}
           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/10"></div>
           <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-[#4A90E2] filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-200 hover:text-white mb-8 transition-colors group font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </button>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight relative inline-block">
              Le Blog Étudiant
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#4A90E2] -z-10 transform -rotate-1"></span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light">
              Un espace d'échange créatif pour partager nos expériences, hacks et découvertes à l'ESI.
            </p>
          </div>

          {/* Floating Bubble Search */}
          <div className="mt-12 relative max-w-lg group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4A90E2] to-pink-400 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-200"></div>
            <div className="relative flex items-center bg-white rounded-full p-2 shadow-xl">
              <Search className="h-6 w-6 text-[#1E5B8C] ml-4" />
              <input 
                type="text"
                placeholder="Rechercher un article, un sujet..."
                className="w-full p-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="block w-full h-20 md:h-32 text-[#F8FBFF]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,224L48,213.3C96,203,192,192,288,197.3C384,203,480,224,576,224C672,224,768,203,864,186.7C960,171,1056,160,1152,165.3C1248,171,1344,192,1392,202.7L1440,213.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 min-h-[60vh]">
        {/* Sticky Note Announcement */}
        <div className="hidden lg:block absolute right-4 top-0 w-64 rotate-3 bg-yellow-100 p-6 shadow-lg transform -translate-y-1/2 z-20" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/50 -mt-4 rotate-1"></div>
          <h3 className="font-bold text-[#1E5B8C] mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 fill-current" /> Nouveauté
          </h3>
          <p className="text-sm text-gray-700 font-handwriting">
            Bienvenue sur le nouveau design ! N'hésitez pas à contribuer vos articles sur GitHub.
          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.slug} 
              className="break-inside-avoid relative group bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                borderRadius: '4px',
                // Subtle paper texture simulation
                backgroundImage: 'linear-gradient(#fdfdfd 2px, transparent 2px), linear-gradient(90deg, #fdfdfd 2px, transparent 2px)',
                backgroundSize: '40px 40px',
                backgroundPosition: '-2px -2px'
              }}
            >
              {/* Folded Corner Effect (Top-Right) */}
              <div 
                className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#ececec] to-white shadow-md z-20"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
                  background: `linear-gradient(45deg, #fff 0%, #fff 49%, #ccc 50%, #fff 51%, #fff 100%)` 
                }}
              ></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#1E5B8C] -z-10"></div>

              {/* Image with Watercolor Splash behind it */}
              <div className="relative p-4 pb-0">
                <div className="absolute inset-0 bg-[#4A90E2] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg transform scale-105 rotate-1"></div>
                <div className="h-56 overflow-hidden rounded-sm border-4 border-white shadow-inner relative z-10">
                  <div className="absolute inset-0 bg-[#1E5B8C] mix-blend-overlay opacity-30 z-10"></div>
                  <img 
                    src={post.image || DEFAULT_IMAGE} 
                    alt={post.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Ribbon Tag */}
                <div className="absolute top-8 left-2 z-20 flex">
                  <div className="bg-[#4A90E2] text-white text-xs font-bold px-3 py-1.5 shadow-md relative">
                    {post.category}
                    <div className="absolute top-0 right-0 -mr-2 w-0 h-0 border-t-[14px] border-t-[#4A90E2] border-r-[8px] border-r-transparent border-b-[14px] border-b-[#4A90E2]"></div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4">
                <div className="flex items-center text-gray-400 text-xs mb-3 font-medium font-mono tracking-tight">
                  <Calendar className="h-3.5 w-3.5 mr-2 text-[#4A90E2]" />
                  {new Date(post.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-[#1E5B8C] mb-3 leading-tight group-hover:text-[#4A90E2] transition-colors">
                  <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0 z-0" />
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                  {post.description}
                </p>

                <div className="pt-4 border-t-2 border-dashed border-gray-100 flex items-center justify-between mt-auto relative z-10">
                  <div className="flex items-center group/author">
                    {/* Orbital Ring Profile */}
                    <div className="relative mr-3">
                      <div className="w-9 h-9 rounded-full border-2 border-[#4A90E2] p-0.5 group-hover/author:rotate-180 transition-transform duration-500">
                        <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                           <div className="w-full h-full flex items-center justify-center bg-[#1E5B8C] text-white">
                             <User className="h-4 w-4" />
                           </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-700 font-sans">{post.author}</span>
                  </div>
                  
                  <span className="w-8 h-8 rounded-full bg-[#F8FBFF] flex items-center justify-center text-[#1E5B8C] group-hover:bg-[#1E5B8C] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white border-2 border-dashed border-[#4A90E2] rounded-lg">
              <h3 className="text-xl font-bold text-[#1E5B8C] mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-500">Essayez une autre recherche ou revenez plus tard !</p>
            </div>
          </div>
        )}
      </div>

      {/* Torn Paper Footer */}
      <footer className="mt-20 relative bg-[#1E5B8C] text-white pt-20 pb-12">
        {/* Torn Edge Effect */}
        <div className="absolute top-0 left-0 w-full h-8 bg-[#F8FBFF]" 
             style={{ 
               clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)" 
             }}>
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Contribuez au savoir collectif</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              Vous avez une astuce à partager ? Une expérience de stage ?
              <br/>Le blog est ouvert à tous les étudiants de l'ESI.
            </p>
          </div>
          <a 
            href="https://github.com/abou57mehdi/esii-objectorage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-[#1E5B8C] font-bold rounded-full hover:bg-[#4A90E2] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Proposer un article
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <div className="mt-12 opacity-50 text-sm font-mono">
            &copy; {new Date().getFullYear()} ESI Platform • Student Community
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogHome;