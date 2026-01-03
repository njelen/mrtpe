import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Kaj je MTPE in kako se razlikuje od klasičnega prevajanja?',
      answer:
        'MTPE (Machine Translation Post-Editing) pomeni, da AI najprej prevede besedilo, nato pa strokovnjak pregleda in popravi rezultat. To je hitrejše in cenejše od klasičnega prevajanja, kjer prevajalec začne od ničle.',
    },
    {
      question: 'Kakšna je razlika med light in full post-editingom?',
      answer:
        'Light post-editing popravi le očitne napake (pomen, skladnost), full post-editing pa temeljito pregleda tudi ton, stil in terminologijo – primerno za marketing in pomembne objavljene vsebine.',
    },
    {
      question: 'Ali je MTPE primeren za moje pravne dokumente?',
      answer:
        'Ne. Za pravne, medicinske ali regulatorne dokumente priporočamo 100% človeški prevod zaradi visoke odgovornosti in možnih posledic napak.',
    },
    {
      question: 'Koliko časa traja MTPE prevod?',
      answer:
        'Odvisno od obsega in zahtevnosti, običajno 24–72 ur. Za manjše projekte lahko celo hitreje.',
    },
    {
      question: 'Ali je MTPE cenejši od klasičnega prevoda?',
      answer:
        'Da, MTPE je običajno 30–50% cenejši od klasičnega prevoda, ker AI opravi večino dela, človek pa opravi le kontrolo in popravke.',
    },
    {
      question: 'Kateri jezikovni pari so na voljo?',
      answer:
        'Pokrivamo vse glavne evropske jezike: angleščina, nemščina, italijanščina, hrvaščina, srbščina v kombinaciji s slovenščino. Za druge jezike nas kontaktirajte.',
    },
    {
      question: 'Ali lahko dostavite v določeni obliki datoteke?',
      answer:
        'Da. Podpiramo Word, Excel, PowerPoint, PDF, InDesign, XML, HTML in druge formate. Prevod dostavimo v isti obliki kot izvirnik.',
    },
    {
      question: 'Ali uporabljate moje termine in glosarje?',
      answer:
        'Da. Če imate obstoječe glosarje ali terminološke baze, jih integriramo v proces za dosledno terminologijo.',
    },
    {
      question: 'Ali podpišete pogodbo o zaupnosti (NDA)?',
      answer: 'Da, z veseljem podpišemo NDA pred začetkom projekta, če je to potrebno.',
    },
    {
      question: 'Kako vem, ali potrebujem MTPE ali 100% človeški prevod?',
      answer:
        'Uporabite našo "izbiro prevoda" zgoraj ali nam pošljite povpraševanje – brezplačno vam svetujemo najboljši pristop za vaš projekt.',
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
