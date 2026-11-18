import React, { useState } from 'react';
import { useLanguage } from '../translations/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { blogPostsData, showBlogSection } from '../data/blog';
import type { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Règle #14 : Masquer la section si aucun article n'est publié ou si désactivée
  if (!showBlogSection || blogPostsData.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#070b12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Veille & Partage"
          title={t.blog.title}
          subtitle={t.blog.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {post.category[language]}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-500 transition-colors">
                  {post.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {post.summary[language]}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t.blog.readArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="glass-panel w-full max-w-3xl max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto border border-white/20 shadow-2xl">
            
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {selectedPost.category[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                  {selectedPost.title[language]}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{t.blog.readTimePrefix} {selectedPost.readTime}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
              {selectedPost.content ? selectedPost.content[language] : selectedPost.summary[language]}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
              >
                {t.blog.closeArticle}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
