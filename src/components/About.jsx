import { CONFIG } from '../config';
import { ExternalLink } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          O nas
        </h2>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-8 backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Smo specializirana prevajalska agencija, ki združuje napredne tehnologije strojnega prevajanja 
            s strokovnostjo izkušenih prevajalcev. Naš cilj je zagotoviti hitro, kakovostno in stroškovno 
            učinkovito prevajanje za podjetja in posameznike, ki potrebujejo zanesljive prevode.
          </p>
          
          <p className="text-gray-400 mb-6">
            Z več kot 20-letnimi izkušnjami na področju prevajanja in lokalizacije razumemo izzive 
            sodobnega poslovanja. MTPE pristop omogoča, da združimo najboljše iz obeh svetov: hitrost 
            in konsistenco AI ter človeško razumevanje konteksta, tona in kulturnih niansov.
          </p>

          <div className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors">
            <span>Več o nas na:</span>
            <a 
              href="https://prevajalskaagencija.net/"
  target="_blank"
  rel="noreferrer"
  className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
>
  prevajalskaagencija.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
