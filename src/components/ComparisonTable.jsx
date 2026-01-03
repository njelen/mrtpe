export const ComparisonTable = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const approaches = [
    {
      name: 'AI-only',
      usage: 'Interno komuniciranje, hitri povzetki, osnutki za interno rabo',
      risk: 'Napake v pomenu, nevsakdanji jezik, brez konteksta',
      recommendation: 'Ko točnost ni kritična in vsebino uporabljate le interno',
      color: 'red'
    },
    {
      name: 'MTPE (light)',
      usage: 'Spletni opisi izdelkov, blogovski članki, FAQ, novice',
      risk: 'Manjše napake v tonu, občasne negladkosti',
      recommendation: 'Ko objavljate vsebino z jasno strukturo in preprosto tematiko',
      color: 'yellow'
    },
    {
      name: 'MTPE (full)',
      usage: 'Marketing vsebine, pomembni članki, članki za SEO, produktne opise z blagovno znamko',
      risk: 'Minimalno – prevajalec temeljito preveri ton, terminologijo in skladnost',
      recommendation: 'Ko je pomemben brand ton, konsistenca in bralska izkušnja',
      color: 'teal'
    },
    {
      name: 'Human (100%)',
      usage: 'Pravni dokumenti, medicinske vsebine, regulativa, visoko tehnične specifikacije',
      risk: 'Brez – človeški prevod od začetka',
      recommendation: 'Ko napaka lahko pomeni pravne ali varnostne posledice',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
          Štiri poti do prevoda – katera je prava za vas?
        </h2>
        
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto mt-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-blue-500/30">
                <th className="text-left p-4 text-blue-300 font-semibold">Pristop</th>
                <th className="text-left p-4 text-blue-300 font-semibold">Uporaba</th>
                <th className="text-left p-4 text-blue-300 font-semibold">Tveganje</th>
                <th className="text-left p-4 text-blue-300 font-semibold">Priporočilo</th>
              </tr>
            </thead>
            <tbody>
              {approaches.map((approach, idx) => (
                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <span className="font-semibold text-white">{approach.name}</span>
                  </td>
                  <td className="p-4 text-gray-300 text-sm">{approach.usage}</td>
                  <td className="p-4 text-gray-300 text-sm">{approach.risk}</td>
                  <td className="p-4 text-gray-300 text-sm">{approach.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile cards */}
        <div className="md:hidden space-y-6 mt-8">
          {approaches.map((approach, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">{approach.name}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-blue-300 font-semibold">Uporaba: </span>
                  <span className="text-gray-300">{approach.usage}</span>
                </div>
                <div>
                  <span className="text-blue-300 font-semibold">Tveganje: </span>
                  <span className="text-gray-300">{approach.risk}</span>
                </div>
                <div>
                  <span className="text-blue-300 font-semibold">Priporočilo: </span>
                  <span className="text-gray-300">{approach.recommendation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Niste prepričani? Uporabite kviz spodaj ali nam pošljite vzorec – priporočilo prejmete brezplačno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('quiz')}
              className="text-blue-300 hover:text-blue-200 underline transition-colors"
            >
              Izbira prevoda →
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
            >
              Pošljite povpraševanje →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
