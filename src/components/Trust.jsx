import { Shield, CheckCircle, FileCheck, BookOpen } from "lucide-react";

export const Trust = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "Zaupnost",
      description: "Vsi prevodi so zaupni. Po želji podpišemo NDA za dodatno varnost vaših podatkov.",
    },
    {
      icon: CheckCircle,
      title: "Kontrola kakovosti",
      description: "Večnivojska kontrola kakovosti zagotavlja doslednost in točnost vsakega prevoda.",
    },
    {
      icon: FileCheck,
      title: "ISO 18587 smernice",
      description: "Sledimo mednarodno priznanim smernicam za post-editing strojenega prevajanja.",
    },
    {
      icon: BookOpen,
      title: "Terminologija & glosarji",
      description: "Vzpostavitev in uporaba projektnih glosarjev za dosledno terminologijo.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Zakaj nam zaupati vaše prevode
        </h2>

        {/* Trust image (smaller) */}
        <div className="mb-12">
          <div className="w-full max-w-xl mx-auto rounded-xl border border-white/10 bg-slate-900/20 backdrop-blur-sm p-4 md:p-6">
            <div className="w-full aspect-[4/5] max-h-[340px] overflow-hidden rounded-lg bg-slate-950/30">
              <img
                src="/images/trust.png"
                alt="Zaupanje in kakovost"
                className="w-full h-full object-contain"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-6 text-center hover:border-blue-400/40 transition-all backdrop-blur-sm"
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
