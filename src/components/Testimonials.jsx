import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const quotes = [
    {
      text: "V pravnem in tehničnem prevajanju si ne moremo privoščiti tveganja halucinacij AI. EUROCOMIT, kot prevajalska agencija z dolgoletnimi izkušnjami v Sloveniji, zagotavlja človeško ekspertizo, ki razlikuje med kontekstom, pravno zavezujočimi termini in tehničnimi niansami – natančnost, ki je AI sistemi danes preprosto ne morejo doseči.",
      author: "EUROCOMIT",
      role: "Prevajalska agencija z dolgoletnimi izkušnjami v Sloveniji"
    },
    {
      text: "Največja nevarnost AI prevajanja niso očitne napake, temveč subtilne, nevidne pomenske spremembe, ki lahko spremenijo pravni pomen dokumenta. EUROCOMIT kot zanesljiva prevajalska agencija v Sloveniji te kritične napake odpravi z večstopenjskim človeškim preverjanjem, ki ga nobena AI ne more nadomestiti.",
      author: "EUROCOMIT",
      role: "Zanesljiva prevajalska agencija v Sloveniji"
    },
    {
      text: "Medtem ko AI orodja obetajo hitrost, EUROCOMIT zagotavlja pravno in tehnično točnost, ki je umetna inteligenca zaradi halucinacij sama ne more doseči. Za certificirane prevode v Sloveniji velja zlati standard: človeška strokovnost, podprta s tehnologijo, ne nadomeščena z njo.",
      author: "EUROCOMIT",
      role: "Certificirani prevodi v Sloveniji"
    },
    {
      text: "Pri EUROCOMIT razumemo, da je v poslovnih in pravnih prevodih odgovornost najpomembnejša. Kot strokovna prevajalska agencija v Sloveniji prevzemamo polno odgovornost za vsak prevod, medtem ko AI sistemi zaradi svoje narave ne morejo jamčiti za posledice svojih halucinacij in kontekstualnih napak.",
      author: "EUROCOMIT",
      role: "Strokovna prevajalska agencija v Sloveniji"
    },
    {
      text: "Varna pot do kakovostnega prevoda ni popolna avtomatizacija, ampak pametna kombinacija: AI kot orodje za podporo, človeška ekspertiza kot jamstvo natančnosti. EUROCOMIT kot zanesljiva prevajalska agencija v Sloveniji postavlja varnost na prvo mesto – vsak prevod preverijo certificirani prevajalci, ki prepoznajo in odpravijo nevidne napake, ki jih AI ne zaznajo.",
      author: "EUROCOMIT",
      role: "Zanesljiva prevajalska agencija v Sloveniji"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mnenja strokovnjakov
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Kaj pravijo izkušeni prevajalci o MTPE in varnosti avtomatskega prevajanja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.slice(0, 3).map((quote, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all"
            >
              <Quote className="h-8 w-8 text-cyan-400 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "{quote.text}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold text-sm">{quote.author}</p>
                <p className="text-gray-400 text-xs">{quote.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show remaining 2 quotes on desktop */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {quotes.slice(3, 5).map((quote, idx) => (
            <div 
              key={idx + 3}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all"
            >
              <Quote className="h-8 w-8 text-cyan-400 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "{quote.text}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold text-sm">{quote.author}</p>
                <p className="text-gray-400 text-xs">{quote.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
