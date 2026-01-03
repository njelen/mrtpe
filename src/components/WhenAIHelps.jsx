import { CheckCircle2, XCircle } from 'lucide-react';

export const WhenAIHelps = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Ne vsak prevod potrebuje enak pristop
        </h2>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          AI prevod je uporaben pripomoček, a le v primerih, ko je manjša napaka sprejemljiva. 
          Za pomembne vsebine potrebujete več.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI is good for */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI prevod je primeren za:</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Interno komuniciranje (e-pošta, Teams, interni memos)</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Hiter pregled tujih vsebin (raziskave trga, feedbacki, monitoring)</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Osnutke, ki jih nato interno še pregledate</span>
              </li>
            </ul>
          </div>
          
          {/* AI is NOT good for */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500/20 to-rose-500/20 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI prevod NI primeren za:</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Objavljene vsebine (spletne strani, oglasi, novice, marketing)</span>
              </li>
              <li className="flex gap-3 items-start">
                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Pravne, medicinske ali regulatorne dokumente</span>
              </li>
              <li className="flex gap-3 items-start">
                <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Vse, kjer napaka lahko škoduje ugledu ali vključuje tveganje</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-8 text-center backdrop-blur-sm">
          <p className="text-lg text-gray-200 leading-relaxed">
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MTPE je vmesna pot:</span> AI prevede, 
            strokovnjak popravi nedoslednosti, izboljša ton in preveri kontekst. Tako dobite človeško 
            kakovost z avtomatsko učinkovitostjo.
          </p>
        </div>
      </div>
    </section>
  );
};
