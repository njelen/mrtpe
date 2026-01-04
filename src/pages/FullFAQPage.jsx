import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export const FullFAQPage = () => {
  const allFAQs = [
    {
      question: 'Zakaj ne morem preprosto uporabiti ChatGPT, Google Translate ali drugih AI prevajalnikov za prevod pogodbe?',
      answer: 'Umetna inteligenca pogosto halucinira in spreminja pravni pomen besedil. Brez poznavanja izvornega in ciljnega jezika uporabnik teh napak ne more opaziti, kar vodi v visoka poslovna tveganja. AI orodja lahko: Zamenjajo "mora" z "lahko" (obveznost postane možnost), Spremenijo številke, datume ali veljavnostne roke, Dodajo ali izpustijo ključne klavzule, Zamenjajo stranke v pogodbi, Napačno prevedejo pravne termini, kar ima lahko resne posledice. Primer: AI je v eni pogodbi spremenil "dobavitelj je dolžan" v "dobavitelj lahko", kar je popolnoma spremenilo pravno odgovornost.'
    },
    {
      question: 'Kaj so AI halucinacije pri prevodih in kako pogosto se pojavljajo?',
      answer: 'AI halucinacije so napake, kjer umetna inteligenca "izmisli" vsebino, ki je v izvirniku sploh ni. To se zgodi v 15-30% profesionalnih besedil, še pogosteje pa pri: Pravnih dokumentih (termini, ki jih AI ne pozna), Tehničnih specifikacijah (številke, modeli, kode), Medicinskih besedilih (diagnoze, doze zdravil), Finančnih poročilih. Največja težava: Halucinacije zvenijo povsem smiselno in jih brez poznavanja obeh jezikov ne morete opaziti. Celo izkušeni uporabniki AI se pogosto ne zavedajo, da je prevod napačen, ker deluje "logično".'
    },
    {
      question: 'Ali zadostuje, če poznam angleščino na srednji ravni, da preverim AI prevod?',
      answer: 'Ne. Študije kažejo, da uporabniki s srednjo ravnijo jezika opazijo le 20-40% napak v AI prevodih. Še huje - pogosto mislijo, da je prevod pravilen, čeprav ni. Razlogi: Ne poznate specializirane terminologije, Ne opazite subtilnih sprememb pomena, AI prevod zveni "dovolj dobro", da ga sprejmete, Ne vidite manjkajočih delov besedila, Ne prepoznate kulturnih neprimernosti. Primer: Fraza "subject to approval" je bila prevedena kot "predmet odobravanja" namesto pravilno "pod pogojem odobritve" - stranka je mislila, da je prevod v redu, dokler ji ni pravnik pojasnil razlike.'
    },
    {
      question: 'Sem izkušen uporabnik ChatGPT in pišem dobre prompte. Ali je to dovolj za kakovosten prevod?',
      answer: 'Tudi z naprednimi prompting tehnikami boste dosegli le 70-85% natančnosti, kar pri poslovnih dokumentih ni dovolj. Težave: AI ne razume konteksta vašega poslovanja, Prompt ne more nadomestiti jezikovnega znanja prevajalca, Konsistentnost terminologije skozi dokument je slaba, AI ne loči med formalnim in neformalnim registrom, Napredni uporabniki pogosto preveč zaupajo AI in postanejo manj pozorni. Realnost: Brez strokovnega pregleda prevajalca ostaja tveganje napak, ki lahko stane več kot sam prevod. Dober prompt je korak v pravo smer, a ne nadomesti strokovnega znanja.'
    },
    {
      question: 'Katere vrste dokumentov nikoli ne smem prevajati z AI brez strokovnega pregleda?',
      answer: 'Absolutno potreben je profesionalni prevajalec pri: Pravnih dokumentih: Pogodbe, sporazumi, splošni pogoji poslovanja, Sodne odločbe, tožbe, predlogi, Notarski dokumenti, pooblastila, Pravilniki, statute, sklepi. Finančnih dokumentih: Letna poročila, revizijska mnenja, Investicijska dokumentacija, Bančne pogodbe, garancije. Reguliranih industrijah: Medicinska dokumentacija (navodila za uporabo zdravil), Certifikati, tehnične specifikacije (ISO, CE), Varnostni listi. Zakaj? Ena napaka lahko povzroči finančno škodo, sodni spor ali celo ogrozi varnost.'
    },
    {
      question: 'Koliko me lahko stane napaka v AI prevodu v primerjavi s stroški profesionalnega prevajanja?',
      answer: 'Primer iz prakse: Stroški profesionalnega prevoda 10-stranske pogodbe: 200-400 €. Stroški spora zaradi napačno prevedene klavzule: 5.000-50.000 € (odvetniški stroški, sodišče, izgubljen čas). Stroški preklica produkta zaradi napake v navodilih: 100.000+ €. Tipične finančne posledice AI napak: Zamujeni roki zaradi nepravilno prevedenega datuma, Napačne cene ali količine v naročilnicah, Pravni spori zaradi spremenjenega pomena pogodb, Regulatorne kazni zaradi napačnih prevodov certifikatov, Izguba ugleda zaradi jezikovno neustreznih besedil. Zaključek: Prihranek pri prevodu je lahko 100-kratna izguba pri napaki.'
    },
    {
      question: 'Ali lahko AI uporabljam za kakršnekoli prevode ali je vedno tvegano?',
      answer: 'AI je primeren za: Interno komunikacijo (e-maili ekipi, zapiske), Osebno korespondenco, Osnovno razumevanje tujejezičnih vsebin, Prvotne osnutke, ki jih bo strokovno pregledal prevajalec, Nekritične marketinške objave na družbenih omrežjih. AI je neustrezna za: Vse pravno zavezujoče dokumente, Javne objave (spletne strani, brošure), Komunikacijo s strankami in partnerji, Tehnično dokumentacijo, Vse, kar ima finančne ali pravne posledice. Zlato pravilo: Če bi vas napaka lahko stala denarja, ugleda ali zaupanja - uporabite profesionalnega prevajalca.'
    },
    {
      question: 'Kaj je hibridni pristop AI + prevajalec in kdaj je smiselna ta rešitev?',
      answer: 'Hibridni pristop pomeni, da AI naredi prvi osnutek prevoda, profesionalni prevajalec pa ga pregleda, popravi in dopolni. To je stroškovno učinkovito pri: Velikih obsegih besedil (100+ strani), Časovnih omejitvah, Ponovitvah (podobni dokumenti), Tehnični dokumentaciji z repetitivno vsebino. Prednosti: 30-50% nižji stroški kot čisto človeški prevod, 40-60% hitrejša izvedba, Ohranjena kakovost in natančnost, Prevajalec se osredotoči na kritične dele. Pri EUROCOMIT ta pristop uporabljamo za smiselne projekte, kjer lahko zagotovimo kakovost in hkrati znižamo stroške.'
    },
    {
      question: 'Kako lahko sam prepoznam, da je AI prevod napačen, če ne govorim ciljnega jezika?',
      answer: 'Opozorilni znaki slabega AI prevoda: V besedilu: Nenavadne, nerodno zveneče formulacije, Nedosledna terminologija (ista stvar ima 3 različna imena), Številke ali datumi, ki "ne delujejo logično", Manjkajoči deli stavkov, Čudne vejice ali nepravilna ločila, Mešanje formalnega in neformalnega sloga. V strukturi: Odstavki različnih dolžin kot original, Manjkajoče ošteviljenje ali točke, Spremenjeno formatiranje, Tabele z napačnimi vrednostmi. Rešitev: Ne zanašajte se na lastno presojo. Vedno naročite profesionalni pregled pri dokumentih, ki imajo poslovne posledice.'
    },
    {
      question: 'Zakaj bi sploh potreboval prevajalsko agencijo, če obstaja AI?',
      answer: 'AI je orodje, prevajalec je strokovnjak. Razlika: AI prevod: Ni odgovoren za napake, Ne razume vašega poslovanja, Ne zagotavlja doslednosti, Ne pozna pravnega in kulturnega konteksta, Ne more svetovati. Profesionalna prevajalska agencija (EUROCOMIT): ✓ Garancija kakovosti in odgovornost za vsak prevod, ✓ Specializirani prevajalci za vsako branžo, ✓ Terminološka doslednost v vseh dokumentih, ✓ Pravno ustrezen in kulturno primeren prevod, ✓ Profesionalno svetovanje o najboljših rešitvah, ✓ Certificirani prevodi za uradne namene, ✓ Kombinacija tehnologije in človeškega znanja za optimalno razmerje cena / kakovost. Zaključek: AI lahko pomaga pri določenih fazah, a človeški strokovnjak je nepogrešljiv pri vseh kritičnih prevodih. Pri EUROCOMIT kombiniramo najboljše iz obeh svetov - kjer je smiselno.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Pogosta vprašanja o prevodih in AI
        </h1>
        
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Vse, kar morate vedeti o tveganjih AI prevajanja in zakaj je strokovno prevajanje nepogrešljivo
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {allFAQs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-8 backdrop-blur-sm">
          <p className="text-gray-200 mb-4">
            Imate dodatna vprašanja? Kontaktirajte nas za brezplačno svetovanje.
          </p>
          <a 
            href="/#contact" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </div>
  );
};
