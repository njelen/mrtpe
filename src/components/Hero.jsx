import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Prevodi, ki jih AI pripravi –<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            prevajalec pa preveri in izboljša
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          MTPE (strojno prevajanje z naknadnim urejanjem prevajalca) združuje hitrost
          avtomatskega prevoda s človeško natančnostjo. Dobite kakovostne prevode hitreje
          in po nižji ceni kot s klasičnim pristopom – brez kompromisov pri pomenu ali tonu.
        </p>

        {/* Hero image */}
        <div className="mb-10">
          <div className="w-full max-w-3xl mx-auto rounded-lg border border-blue-500/20 overflow-hidden bg-slate-900/20 backdrop-blur-sm">
            <img
              src="/images/hero.png"
              alt="MTPE prevajanje - AI strojno prevajanje z naknadnim urejanjem prevajalca"
              className="w-full h-auto block"
              draggable="false"
              loading="eager"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            Pošljite povpraševanje
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("quiz")}
            className="border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold transition-all"
          >
            Izbira prevoda v 3 klikih
          </Button>
        </div>

        {/* Micro benefits */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-start text-left sm:text-center max-w-3xl mx-auto">
          <div className="flex items-start sm:items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1 sm:mt-0" />
            <span className="text-gray-300 text-sm">Brezplačna ponudba</span>
          </div>

          <div className="flex items-start sm:items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1 sm:mt-0" />
            <span className="text-gray-300 text-sm">Odgovor v 24 urah</span>
          </div>

          <div className="flex items-start sm:items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1 sm:mt-0" />
            <span className="text-gray-300 text-sm">Skladno z ISO 18587 (MTPE)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
