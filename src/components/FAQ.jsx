import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Zakaj ne morem preprosto uporabiti ChatGPT ali Google Translate za prevod pogodbe?',
      answer:
        'Umetna inteligenca pogosto halucinira in spreminja pravni pomen besedil. Brez poznavanja izvornega in ciljnega jezika uporabnik teh napak ne more opaziti, kar vodi v visoka poslovna tveganja. AI orodja lahko: Zamenjajo "mora" z "lahko" (obveznost postane možnost), Spremenijo številke, datume ali veljavnostne roke, Dodajo ali izpustijo ključne klavzule, Zamenjajo stranke v pogodbi, Napačno prevedejo pravne termini, kar ima lahko resne posledice. Primer: AI je v eni pogodbi spremenil "dobavitelj je dolžan" v "dobavitelj lahko", kar je popolnoma spremenilo pravno odgovornost.',
    },
    {
      question: 'Kaj so AI halucinacije pri prevodih in kako pogosto se pojavljajo?',
      answer:
        'AI halucinacije so napake, kjer umetna inteligenca "izmisli" vsebino, ki je v izvirniku sploh ni. To se zgodi v 15-30% profesionalnih besedil, še pogosteje pa pri: Pravnih dokumentih (termini, ki jih AI ne pozna), Tehničnih specifikacijah (številke, modeli, kode), Medicinskih besedilih (diagnoze, doze zdravil), Finančnih poročilih. Največja težava: Halucinacije zvenijo povsem smiselno in jih brez poznavanja obeh jezikov ne morete opaziti. Celo izkušeni uporabniki AI se pogosto ne zavedajo, da je prevod napačen, ker deluje "logično".',
    },
    {
      question: 'Kateri jezikovni pari so na voljo?',
      answer:
        'Pokrivamo vse glavne evropske jezike: angleščina, nemščina, italijanščina, hrvaščina, srbščina v kombinaciji s slovenščino. Za druge jezike nas kontaktirajte.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Pogosta vprašanja
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
