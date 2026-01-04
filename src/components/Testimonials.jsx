import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const quotes = [
    {
      text: "MTPE ni nadomestek za človeka – je orodje, ki mu omogoča, da je bolj učinkovit. Vendar le izkušen prevajalec razlikuje med 'skoraj pravilno' in 'popolnoma varno'.",
      author: "Strokovnjak za prevajanje",
      role: "Certificiran prevajalec"
    },
    {
      text: "Pri pravnih dokumentih je vsaka napaka lahko usodna. LLM halucinacije niso mit – so realnost, ki jo lahko prepreči le človek s pravnim znanjem.",
      author: "Pravni prevajalec",
      role: "Specialist za pravno prevajanje"
    },
    {
      text: "Tehnična nemščina zahteva natančnost do zadnje vejice. AI lahko prevede stavek, ne more pa razumeti konteksta proizvodne varnosti.",
      author: "Tehnični prevajalec",
      role: "Nemščina ↔ Slovenščina"
    },
    {
      text: "Jezikovne bariere med slovenščino in angleščino so subtilne, a ključne za poslovno komunikacijo. Človeška presoja tu ni opcija – je nujnost.",
      author: "Poslovni prevajalec",
      role: "Specialist za mednarodno komunikacijo"
    },
    {
      text: "Po desetih letih izkušenj lahko rečem: AI je odličen asistent, a odločitve še vedno sprejema človek. Varnost vedno pride pred hitrostjo.",
      author: "Senior prevajalec",
      role: "MTPE specialist"
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
