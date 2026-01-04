import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export const BlogList = () => {
  const articles = [
    {
      id: 'mtpe-in-pasti',
      title: 'MTPE in pasti surovega strojnega prevajanja',
      excerpt: 'Zakaj surovo strojno prevajanje ni dovolj in kako MTPE rešuje ključne pomanjkljivosti AI prevodov.',
      date: '2025-01-15',
      category: 'MTPE',
      readTime: '5 min'
    },
    {
      id: 'pravno-prevajanje-halucinacije',
      title: 'Pravno prevajanje in tveganje halucinacij LLM-ov',
      excerpt: 'Kako large language modeli lahko ustvarjajo lažne informacije v pravnih dokumentih in zakaj je človeška kontrola nepogrešljiva.',
      date: '2025-01-20',
      category: 'Pravno',
      readTime: '7 min'
    },
    {
      id: 'tehnicni-prevodi-nemscina',
      title: 'Tehnični prevodi in nemščina: Varnostna tveganja',
      excerpt: 'Specifike tehnične nemščine in kritična varnostna tveganja pri avtomatskem prevajanju tehničnih navodil.',
      date: '2025-01-25',
      category: 'Tehnično',
      readTime: '6 min'
    },
    {
      id: 'slovenscina-anglescina-bariera',
      title: 'Prevajanje slovenščina – angleščina: Jezikovna bariera',
      excerpt: 'Najpogostejše težave pri prevajanju med slovenščino in angleščino in kako jih prevajalci rešujejo.',
      date: '2025-02-01',
      category: 'Jezikoslovje',
      readTime: '5 min'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Viri in članki
          </h1>
          <p className="text-lg text-gray-300">
            Strokovni vpogledi v MTPE, AI prevajanje in jezikovne izzive
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="block bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 md:p-8 backdrop-blur-sm hover:border-blue-400/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString('sl-SI', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime} branja
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <ArrowRight className="h-6 w-6 text-cyan-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Več člankov kmalu
          </p>
        </div>
      </div>
    </div>
  );
};
