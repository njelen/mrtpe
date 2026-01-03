import { CONFIG } from "../config";
import { FileText, Bot, UserCheck, CheckSquare, Send } from "lucide-react";

export const MTPEProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Priprava in analiza",
      description: "Analiza izvirnega besedila, določitev terminologije in izbira primernega MT sistema.",
    },
    {
      icon: Bot,
      title: "2. Strojno prevajanje",
      description: "Avtomatizirano prevajanje z naprednimi nevronskimi modeli, prilagojenimi za jezikovni par.",
    },
    {
      icon: UserCheck,
      title: "3. Post-editing",
      description: "Light: popravki napak, skladnosti. Full: temeljit pregled tona, terminologije in bralske izkušnje.",
    },
    {
      icon: CheckSquare,
      title: "4. Terminologija in QA",
      description: "Preverjanje doslednosti terminologije, glosarjev in izvajanje kontrole kakovosti.",
    },
    {
      icon: Send,
      title: "5. Dostava",
      description: "Pregled, končna kontrola in dostava prevoda v dogovorjeni obliki.",
    },
  ];

  return (
    <section id="proces" className="scroll-mt-24 py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Kako deluje MTPE proces pri nas
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Vsak prevod MTPE gre skozi jasen proces, ki zagotavlja kakovost in konsistenco.
        </p>

        {/* Process image (contained) */}
        <div className="mb-12">
          <div className="w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-slate-900/20 backdrop-blur-sm p-4 md:p-6">
            <div className="w-full aspect-[21/9] max-h-[320px] overflow-hidden rounded-lg bg-slate-950/30">
              <img
                src="/images/process.png"
                alt="MTPE proces - od priprave do dostave prevoda s pomočjo AI"
                className="w-full h-full object-contain"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-blue-500/20 backdrop-blur-sm">
          <div>
            <span className="text-gray-400 text-sm">Povprečni čas:</span>
            <p className="text-white font-semibold">{CONFIG.TURNAROUND_LINE}</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-blue-500/20" />
          <div>
            <span className="text-gray-400 text-sm">Jeziki:</span>
            <p className="text-white font-semibold">{CONFIG.LANG_PAIRS}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
