import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export const BlogArticle = ({ articleId }) => {
  const articles = {
    'mtpe-in-pasti': {
      title: 'MTPE in pasti surovega strojnega prevajanja',
      date: '2025-01-15',
      category: 'MTPE',
      readTime: '5 min',
      content: `
        <h2>Uvod</h2>
        <p>Vsebina članka bo dodana kmalu...</p>
        
        <h2>Kaj je surovo strojno prevajanje?</h2>
        <p>Vsebina v pripravi...</p>
        
        <h2>Najpogostejše pasti</h2>
        <p>Vsebina v pripravi...</p>
        
        <h2>Kako MTPE rešuje te izzive</h2>
        <p>Vsebina v pripravi...</p>
      `
    },
    'pravno-prevajanje-halucinacije': {
      title: 'Pravno prevajanje in tveganje halucinacij LLM-ov',
      date: '2025-01-20',
      category: 'Pravno',
      readTime: '7 min',
      content: `
        <h2>Uvod</h2>
        <p>Vsebina članka bo dodana kmalu...</p>
        
        <h2>Kaj so halucinacije LLM?</h2>
        <p>Vsebina v pripravi...</p>
        
        <h2>Tveganja v pravnem kontekstu</h2>
        <p>Vsebina v pripravi...</p>
      `
    },
    'tehnicni-prevodi-nemscina': {
      title: 'Tehnični prevodi in nemščina: Varnostna tveganja',
      date: '2025-01-25',
      category: 'Tehnično',
      readTime: '6 min',
      content: `
        <h2>Uvod</h2>
        <p>Vsebina članka bo dodana kmalu...</p>
        
        <h2>Specifike tehnične nemščine</h2>
        <p>Vsebina v pripravi...</p>
        
        <h2>Varnostna tveganja</h2>
        <p>Vsebina v pripravi...</p>
      `
    },
    'slovenscina-anglescina-bariera': {
      title: 'Prevajanje slovenščina – angleščina: Jezikovna bariera',
      date: '2025-02-01',
      category: 'Jezikoslovje',
      readTime: '5 min',
      content: `
        <h2>Uvod</h2>
        <p>Vsebina članka bo dodana kmalu...</p>
        
        <h2>Najpogostejši izzivi</h2>
        <p>Vsebina v pripravi...</p>
        
        <h2>Rešitve in najboljše prakse</h2>
        <p>Vsebina v pripravi...</p>
      `
    }
  };

  const article = articles[articleId];

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

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
          </div>

          <div 
            className="prose prose-invert prose-cyan max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              color: '#d1d5db',
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}
          />

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
