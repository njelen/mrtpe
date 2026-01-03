import { CONFIG } from "../config";

export const Footer = () => {
  const termsUrl = "https://prevajalskaagencija.net/pogoji-poslovanja/";
  const privacyUrl = "https://prevajalskaagencija.net/varovanje-podatkov/";
  const mainUrl = "https://prevajalskaagencija.net/";

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black border-t border-blue-900/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Kontakt</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{CONFIG.CONTACT_EMAIL}</p>
              <p>{CONFIG.CONTACT_PHONE}</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Povezave</h3>
            <div className="space-y-2 text-sm">
              <a
                href={termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-blue-300 transition-colors"
              >
                Pogoji poslovanja
              </a>
              <a
                href={privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-blue-300 transition-colors"
              >
                Varovanje podatkov
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Jeziki</h3>
            <p className="text-sm text-gray-400">{CONFIG.LANG_PAIRS}</p>
          </div>
        </div>

        {/* Obvestila */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
          <div className="bg-slate-900/50 border border-blue-900/30 rounded p-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-semibold text-gray-300">
                Obvestilo o delovanju strani:
              </span>{" "}
              Ta spletna stran uporablja interaktivno izbiro prevoda za priporočanje prevajalskih storitev. Izbira
              deluje na podlagi vnaprej določenih pravil in ne uporablja zunanjih AI storitev. Vsi podatki, ki jih
              vnesete v kontaktni obrazec, so zaupni in se uporabljajo le za namen obdelave vašega povpraševanja.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-blue-900/30 rounded p-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-semibold text-gray-300">
                Obvestilo o analitiki:
              </span>{" "}
              Ta spletna stran ne uporablja piškotkov za sledenje ali analitiko. Zbrani so le podatki, ki jih
              prostovoljno posredujete preko kontaktnega obrazca.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 mt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 {CONFIG.COMPANY_NAME} |{" "}
            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-300 hover:text-blue-200 transition-colors"
            >
              Prevajalskaagencija.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
