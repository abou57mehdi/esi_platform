import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { GITHUB_PAGES_BASE_URL } from '../utils/r2Config';
import BubbleBackground from '../components/BubbleBackground';

interface PostData {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        const manifestRes = await fetch(`${GITHUB_PAGES_BASE_URL}/manifest.json`);
        const manifest = await manifestRes.json();
        const postMeta = manifest.blog.find((p: any) => p.slug === slug);

        if (!postMeta) throw new Error('Post not found');

        const contentRes = await fetch(`${GITHUB_PAGES_BASE_URL}/${postMeta.path}`);
        const rawContent = await contentRes.text();
        const content = rawContent.replace(/^---[\s\S]*?---/, '').trim();

        setPost({ ...postMeta, content });
      } catch (err) {
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostContent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Article non trouvé</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <BubbleBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour au blog
        </button>

        <article className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden max-w-4xl mx-auto">
          {/* Header Image */}
          {post.image && (
            <div className="w-full h-[40vh] relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-xs shadow-lg mb-4">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight drop-shadow-sm">
                  {post.title}
                </h1>
              </div>
            </div>
          )}

          {!post.image && (
            <div className="p-8 pb-0">
               <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold uppercase tracking-wider text-xs mb-4">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  {post.title}
                </h1>
            </div>
          )}

          <div className="px-8 py-6 border-b border-gray-100 flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <User className="h-4 w-4" />
              </div>
              <span className="font-medium text-gray-900">ESI Student</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              {new Date(post.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg prose-pre:rounded-xl">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
        
        <footer className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm">
            <p className="text-gray-600 font-medium mb-4">
              Vous avez aimé cet article ?
            </p>
            <p className="text-sm text-gray-500">
              Contribuez au blog en proposant votre propre article sur notre dépôt GitHub !
            </p>
            <a 
              href="https://github.com/abou57mehdi/esii-objectorage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md"
            >
              Proposer un article
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;