import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { articlesData } from '../data/articlesData';

export const BlogArticle = ({ articleId }) => {
  const article = articlesData[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Članek ni najden</h1>
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Nazaj na seznam člankov
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Nazaj na vse članke
        </Link>

        <article className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-8 md:p-12 backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {article.category}
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString('sl-SI', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {article.title}
            </h1>
            
            {article.subtitle && (
              <p className="text-xl text-gray-300 italic">
                {article.subtitle}
              </p>
            )}
          </div>

          <div 
            className="prose prose-invert prose-cyan max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Related FAQs */}
          {article.relatedFAQs && article.relatedFAQs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Pogosta vprašanja</h2>
              <div className="space-y-6">
                {article.relatedFAQs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/pogosta-vprasanja" 
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Oglejte si vsa pogosta vprašanja →
                </Link>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm italic">
              Ta članek je del naše serije o profesionalnem MTPE prevajanju. 
              Za več informacij <Link to="/#contact" className="text-cyan-400 hover:text-cyan-300">nas kontaktirajte</Link>.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
