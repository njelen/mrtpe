// Article content extracted from LEKTORIRANO documents
export const articlesData = {
  'mtpe-in-pasti': {
    title: 'MTPE in pasti surovega strojnega prevajanja',
    subtitle: 'Zakaj povprečen uporabnik ne prepozna halucinacij velikih jezikovnih modelov',
    date: '2025-01-15',
    category: 'MTPE',
    readTime: '8 min',
    content: `
      <h2>Kaj je MTPE?</h2>
      <p>MTPE (Machine Translation Post-Editing) je proces, ki kombinira avtomatizirano strojno prevajanje z natančnim človeškim pregledom in urejanjem. V tem postopku strokovni prevajalec ne prevaja izvirnega besedila od začetka, ampak pregleduje in popravlja izhod strojnega prevajalnika ali velikega jezikovnega modela (LLM), kot sta ChatGPT ali Claude.</p>
      
      <p>MTPE proces zahteva visoko raven strokovnega znanja, saj mora prevajalec prepoznati terminološke neskladnosti, semantične zamenjave, lažne prijatelje in halucinacije -- napake, ki jih povprečen uporabnik, ki ne obvlada ciljnega jezika, ne more zaznati.</p>

      <h2>Paradoks nevidnih napak: Zakaj uporabniki ne opazijo halucinacij LLM-ov</h2>
      <p>Halucinacije LLM-ov so nepravilni ali izmišljeni podatki, ki jih model generira s popolno jezikovno tekočnostjo in navidezno verodostojnostjo. Problem nastane, ker:</p>
      <ul>
        <li>Uporabnik, ki ne obvlada ciljnega jezika, naroči prevod prav zato, ker sam ne zmore prevesti ali preveriti besedila.</li>
        <li>LLM generira besedilo z brezhibno slovnico in sintakso, kar ustvarja lažen občutek zaupanja v točnost vsebine.</li>
        <li>Halucinacije se pogosto pojavijo v obliki semantičnih zamenjav, kjer model uporabi sinonim ali soroden pojem namesto točnega termina.</li>
        <li>Uporabnik nima strokovnega znanja za prepoznavanje terminoloških neskladnosti ali kontekstualnih napak.</li>
      </ul>

      <h2>Primerjava: Surov strojni prevod vs. Strokovna MTPE obdelava</h2>
      <p>Spodnja tabela jasno prikazuje razlike med neobdelano AI generiranim prevodom in profesionalno MTPE obdelavo, ki jo izvaja certificiran strokovnjak Eurocomit3.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-gray-700">
          <thead class="bg-slate-800">
            <tr>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Vidik prevajanja</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Surov AI prevod</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">MTPE Eurocomit3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Halucinacije</td>
              <td class="border border-gray-700 px-4 py-2">Prisotne, neodkrite, semantično tekoče</td>
              <td class="border border-gray-700 px-4 py-2">Odkrite in popravljene s strokovnim pregledom</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Terminološka konsistentnost</td>
              <td class="border border-gray-700 px-4 py-2">Neskladna, naključna izbira sinonimov</td>
              <td class="border border-gray-700 px-4 py-2">Zagotovljena z glosarjem in terminološko bazo</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kontekstualna natančnost</td>
              <td class="border border-gray-700 px-4 py-2">Splošna, lahko odstopa od izvirnika</td>
              <td class="border border-gray-700 px-4 py-2">Preverjena glede na originalni kontekst</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Odkrivanje napak</td>
              <td class="border border-gray-700 px-4 py-2">Nemogoče brez jezikovnega znanja</td>
              <td class="border border-gray-700 px-4 py-2">Strokovnjak odkriva vse vrste napak</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Jezikovna tekočnost</td>
              <td class="border border-gray-700 px-4 py-2">Visoka -- ustvarja lažno zaupanje</td>
              <td class="border border-gray-700 px-4 py-2">Visoka in vsebinsko točna</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kvalitetna kontrola</td>
              <td class="border border-gray-700 px-4 py-2">Brez preverjanja</td>
              <td class="border border-gray-700 px-4 py-2">Večstopenjski pregled in lektoriranje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Tipični primeri halucinacij LLM-ov v prevodih</h2>
      
      <h3>1. Semantične zamenjave</h3>
      <p>Model zamenja ključni termin s sinonimom, ki v danem kontekstu ni ustrezen.</p>
      <p><strong>Primer:</strong> prevod 'contract' kot 'pogodba' namesto 'sklep' v pravnem kontekstu arbitraže.</p>

      <h3>2. Lažni prijatelji (false friends)</h3>
      <p>LLM prenese besedo iz izvirnega jezika, ker je podobna besedi v ciljnem jeziku, vendar ima drugačen pomen.</p>
      <p><strong>Primer:</strong> nemški 'aktuell' (trenutno) preveden kot 'aktualno' namesto 'trenuten' v slovenščini.</p>

      <h3>3. Terminološke nekonsistentnosti</h3>
      <p>Model uporablja različne izraze za isti koncept znotraj istega dokumenta, kar je nesprejemljivo v tehničnih in pravnih prevodih.</p>
      <p><strong>Primer:</strong> 'varnostna naprava' in 'zaščitna naprava' za isti element.</p>

      <h3>4. Izmišljene reference</h3>
      <p>Model lahko generira sklice na neobstoječe pravne člene, standarde ali tehnične specifikacije, ki zvočijo verodostojno, a ne obstajajo.</p>

      <h2>Zakaj je strokovna MTPE obdelava nepogrešljiva</h2>
      <p>Strokovnjak Eurocomit3 pri MTPE postopku:</p>
      <ul>
        <li>Obvlada tako izvirni kot ciljni jezik na maternem nivoju in pozna terminologijo stroke.</li>
        <li>Uporablja terminološke glosarje in prevodne spomine, ki zagotavljajo konsistentnost.</li>
        <li>Primerja izhod modela z izvirnim besedilom stavek za stavkom in odkriva semantične napake.</li>
        <li>Prepoznava halucinacije, tudi če so jezikovno tekoče in navidezno smiselne.</li>
        <li>Izvaja končno lekturo in kvalitetno kontrolo pred dostavo dokumenta.</li>
      </ul>

      <h2>Sklep: Varnost pred nevidnimi napakami</h2>
      <p>Največja nevarnost surovih AI prevodov ni slaba slovnica -- ta je očitna in lahko odkrita. Največja nevarnost so halucinacije, ki izgledajo popolnoma pravilno, vendar pomenijo napačno vsebino. Te napake lahko povzročijo:</p>
      <ul>
        <li>Pravno neučinkovite pogodbe zaradi napačne terminologije</li>
        <li>Varnostna tveganja pri tehničnih navodilih</li>
        <li>Poslovne napačne odločitve zaradi napačnih podatkov</li>
        <li>Izgubo zaupanja s strani partnerjev ali strank</li>
      </ul>
      <p>MTPE proces s strokovnjakom Eurocomit3 zagotavlja, da prevod ni le jezikovno tekoč, ampak tudi vsebinsko točen, terminološko konsistenten in brez halucinacij. To je edini način, da se uporabnik, ki ne obvlada ciljnega jezika, izogne nevidnim napakam, ki bi jih sicer ne mogel zaznati.</p>
    `,
    relatedFAQs: [
      {
        question: 'Kaj so AI halucinacije pri prevodih in kako pogosto se pojavljajo?',
        answer: 'AI halucinacije so napake, kjer umetna inteligenca "izmisli" vsebino, ki je v izvirniku sploh ni. To se zgodi v 15-30% profesionalnih besedil, še pogosteje pa pri: Pravnih dokumentih (termini, ki jih AI ne pozna), Tehničnih specifikacijah (številke, modeli, kode), Medicinskih besedilih (diagnoze, doze zdravil), Finančnih poročilih. Največja težava: Halucinacije zvenijo povsem smiselno in jih brez poznavanja obeh jezikov ne morete opaziti.'
      },
      {
        question: 'Kaj je hibridni pristop AI + prevajalec in kdaj je smiselna ta rešitev?',
        answer: 'Hibridni pristop pomeni, da AI naredi prvi osnutek prevoda, profesionalni prevajalec pa ga pregleda, popravi in dopolni. To je stroškovno učinkovito pri: Velikih obsegih besedil (100+ strani), Časovnih omejitvah, Ponovitvah (podobni dokumenti), Tehnični dokumentaciji z repetitivno vsebino. Pri EUROCOMIT ta pristop uporabljamo za smiselne projekte, kjer lahko zagotovimo kakovost in hkrati znižamo stroške.'
      }
    ]
  }
  // ... other articles will be added
};
