// Complete article content from LEKTORIRANO documents
export const articlesData = {
  'mtpe-in-pasti': {
    title: 'MTPE in pasti surovega strojnega prevajanja',
    subtitle: 'Zakaj povprečen uporabnik ne prepozna halucinacij velikih jezikovnih modelov',
    date: '2025-01-15',
    category: 'MTPE',
    readTime: '8 min',
    excerpt: 'Zakaj surovo strojno prevajanje ni dovolj in kako MTPE rešuje ključne pomanjkljivosti AI prevodov.',
    content: `
      <h2>Kaj je MTPE?</h2>
      <p>MTPE (Machine Translation Post-Editing) je proces, ki kombinira avtomatizirano strojno prevajanje z natančnim človeškim pregledom in urejanjem. V tem postopku strokovni prevajalec ne prevaja izvirnega besedila od začetka, ampak pregleduje in popravlja izhod strojnega prevajalnika ali velikega jezikovnega modela (LLM), kot sta ChatGPT ali Claude.</p>
      
      <p>MTPE proces zahteva visoko raven strokovnega znanja, saj mora prevajalec prepoznati terminološke neskladnosti, semantične zamenjave, lažne prijatelje in halucinacije -- napake, ki jih povprečen uporabnik, ki ne obvlada ciljnega jezika, ne more zaznati.</p>

      <h2>Paradoks nevidnih napak: Zakaj uporabniki ne opazijo halucinacij LLM-ov</h2>
      <p>Halucinacije LLM-ov so nepravilni ali izmišljeni podatki, ki jih model generira s popolno jezikovno tekočnostjo in navidezno verodostojnostjo. Problem nastane, ker:</p>
      <ul>
        <li>Uporabnik, ki ne obvlada ciljnega jezika, naroči prevod prav zato, ker sam ne zmore prevesti ali preveriti besedila.</li>
        <li>LLM generira besedilo z brezhibno slovnico in sintakso, kor ustvarja lažen občutek zaupanja v točnost vsebine.</li>
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
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Prisotne, neodkrite, semantično tekoče</td>
              <td class="border border-gray-700 px-4 py-2">Odkrite in popravljene s strokovnim pregledom</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Terminološka konsistentnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Neskladna, naključna izbira sinonimov</td>
              <td class="border border-gray-700 px-4 py-2">Zagotovljena z glosarjem in terminološko bazo</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kontekstualna natančnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Splošna, lahko odstopa od izvirnika</td>
              <td class="border border-gray-700 px-4 py-2">Preverjena glede na originalni kontekst</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Odkrivanje napak</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Nemogoče brez jezikovnega znanja</td>
              <td class="border border-gray-700 px-4 py-2">Strokovnjak odkriva vse vrste napak</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Jezikovna tekočnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Visoka -- ustvarja lažno zaupanje</td>
              <td class="border border-gray-700 px-4 py-2">Visoka in vsebinsko točna</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kvalitetna kontrola</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Brez preverjanja</td>
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
  },

  'pravno-prevajanje-halucinacije': {
    title: 'Pravno prevajanje in tveganje halucinacij LLM-ov',
    subtitle: 'Zakaj je človeška strokovnost v pravnem prevajanju nepogrešljiva',
    date: '2025-01-20',
    category: 'Pravno',
    readTime: '9 min',
    excerpt: 'Kako large language modeli lahko ustvarjajo lažne informacije v pravnih dokumentih in zakaj je človeška kontrola nepogrešljiva.',
    content: `
      <h2>Uvod: Pravni prevodi in tveganje napak AI</h2>
      <p>Pravni prevodi zahtevajo izjemno natančnost, saj že manjša sprememba terminologije ali strukture stavka lahko popolnoma spremeni pravni pomen dokumenta. Veliki jezikovni modeli (LLM), kot so ChatGPT, Claude in drugi, so prepričljivo tekoči v generiranju besedil, vendar pogosto proizvajajo halucinacije -- napake, kjer model "izmisli" vsebino, ki v izvirniku ni prisotna.</p>

      <p>Ta članek obravnava, zakaj AI prevodi brez strokovnega pravnega pregleda predstavljajo nedopustno tveganje v pravnih zadevah in kako profesionalne prevajalske storitve, kot jih ponuja EUROCOMIT, zagotavljajo pravno veljavne in točne prevode.</p>

      <h2>Kaj so halucinacije LLM-ov v pravnih prevodih?</h2>
      <p>Halucinacije LLM-ov so nepravilni ali popolnoma izmišljeni podatki, ki jih model generira z visoko stopnjo jezikovne tekočnosti, kar jih dela še bolj nevarne. V pravnih prevodih se halucinacije lahko pojavijo kot:</p>
      <ul>
        <li><strong>Semantične spremembe:</strong> Zamenjava pravno zavezujočih izrazov s sinonimi, ki imajo drugačen pravni pomen (npr. "dolžan" namesto "lahko").</li>
        <li><strong>Izmišljeni sklici:</strong> Dodajanje referenc na neobstoječe pravne člene, sodne odločbe ali zakonodajo.</li>
        <li><strong>Nepravilna interpretacija konteksta:</strong> Model prevede stavek jezikovno pravilno, a pravno napačno, ker ne razume pravnega okvira.</li>
        <li><strong>Izpuščanje ali dodajanje klavzul:</strong> Model lahko odstrani pomembne dele pogodbe ali doda vsebino, ki v izvirniku ne obstaja.</li>
      </ul>

      <h2>Primerjava: AI prevod pravnih dokumentov vs. Strokovna pravna prevajalska storitev</h2>
      <p>Spodnja tabela jasno prikazuje razlike med neobdelano AI prevodom in profesionalno pravno prevajalsko storitvijo Eurocomit3.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-gray-700">
          <thead class="bg-slate-800">
            <tr>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Vidik pravnega prevajanja</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Surov AI prevod</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Strokovno pravno prevajanje Eurocomit3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Pravna terminologija</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Nekonsistentna, naključni sinonimi</td>
              <td class="border border-gray-700 px-4 py-2">Strokovna, preverjena s pravnimi glosarji</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Halucinacije in izmišljene reference</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Prisotne, neodkrite, verodostojno zveneče</td>
              <td class="border border-gray-700 px-4 py-2">Odpravljene s pravnim strokovnim pregledom</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Pravna veljavnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Vprašljiva ali neveljavna</td>
              <td class="border border-gray-700 px-4 py-2">Zagotovljena z usposobljenimi pravnimi prevajalci</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kontekstualno razumevanje</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Površinsko, ne razume pravnega okvira</td>
              <td class="border border-gray-700 px-4 py-2">Globoko, vključuje pravno logiko in namen</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Odgovornost za napake</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Brez odgovornosti</td>
              <td class="border border-gray-700 px-4 py-2">Polna profesionalna odgovornost prevajalca</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Certificiranje in overjanje</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Ni možno</td>
              <td class="border border-gray-700 px-4 py-2">Možno s certificiranim pravnim prevajalcem</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Konkretni primeri halucinacij v pravnih prevodih</h2>
      
      <h3>Primer 1: Sprememba pravne obveznosti</h3>
      <p><strong>Izvirnik (angleščina):</strong> "The supplier shall deliver the goods within 30 days."</p>
      <p><strong>AI prevod (napaka):</strong> "Dobavitelj lahko dobavi blago v 30 dneh."</p>
      <p><strong>Pravilen prevod:</strong> "Dobavitelj je dolžan dostaviti blago v 30 dneh."</p>
      <p><strong>Posledica:</strong> AI je spremenil pravno zavezujočo obveznost ("shall") v možnost ("lahko"), kar povsem spremeni naravo pogodbe.</p>

      <h3>Primer 2: Izmišljena pravna referenca</h3>
      <p><strong>Izvirnik:</strong> "This contract is governed by the laws of Slovenia."</p>
      <p><strong>AI prevod (napaka):</strong> "Ta pogodba se ureja v skladu s členom 45 Obligacijskega zakonika."</p>
      <p><strong>Pravilen prevod:</strong> "Ta pogodba se ureja po pravu Republike Slovenije."</p>
      <p><strong>Posledica:</strong> AI je dodal neobstoječ člen, ki v izvirniku ni bil omenjen, kar lahko povzroči pravno zmedo.</p>

      <h3>Primer 3: Napačna terminologija</h3>
      <p><strong>Izvirnik:</strong> "Breach of contract"</p>
      <p><strong>AI prevod (napaka):</strong> "Kršenje pogodbe"</p>
      <p><strong>Pravilen prevod:</strong> "Kršitev pogodbe"</p>
      <p><strong>Posledica:</strong> V pravnem jeziku obstaja pomembna razlika med "kršenjem" in "kršitvijo". Napačna terminologija lahko vpliva na pravno interpretacijo.</p>

      <h2>Zakaj je strokovna pravna prevajalska storitev nepogrešljiva</h2>
      <p>Profesionalni pravni prevajalec Eurocomit3:</p>
      <ul>
        <li><strong>Pozna pravno terminologijo</strong> izvornega in ciljnega pravnega sistema.</li>
        <li><strong>Razume pravni kontekst</strong> in namen dokumenta.</li>
        <li><strong>Uporablja preverjen pravni glosar</strong> in terminološke baze za konsistentnost.</li>
        <li><strong>Odkriva halucinacije AI</strong> s primerjavo stavek za stavkom.</li>
        <li><strong>Zagotavlja pravno veljavnost</strong> prevoda z ustrezno terminologijo in strukturo.</li>
        <li><strong>Prevzema odgovornost</strong> za natančnost prevoda.</li>
        <li><strong>Omogoča certificiranje</strong> za uradne namene.</li>
      </ul>

      <h2>Katere pravne dokumente nikoli ne smete prevajati z AI brez strokovnega pregleda?</h2>
      <p>Absolutno potreben je profesionalni pravni prevajalec pri:</p>
      <ul>
        <li>Pogodbah (prodajne, najemne, licenčne, dobaviteljske)</li>
        <li>Splošnih pogojih poslovanja</li>
        <li>Pravnih mnenjih in sodnih odločbah</li>
        <li>Notarskih listinah in pooblastilih</li>
        <li>Arbitražnih sklepih</li>
        <li>Statutih in pravilnikih podjetij</li>
        <li>Bančnih pogodbah in garancijah</li>
        <li>Regulatornih dokumentih in zahtevkih</li>
      </ul>

      <h2>Sklep: Pravna varnost zahteva človeško strokovnost</h2>
      <p>AI prevodi brez strokovnega pravnega pregleda niso le tvegani -- so nedopustni za vse dokumente z pravnimi posledicami. Halucinacije LLM-ov lahko povzročijo:</p>
      <ul>
        <li>Pravno neveljavne pogodbe</li>
        <li>Finančne izgube zaradi napačno razumljenih obveznosti</li>
        <li>Sodni spori in arbitražna vprašanja</li>
        <li>Zavrnitev certificiranja dokumentov</li>
        <li>Izgubo zaupanja poslovnih partnerjev</li>
      </ul>
      <p>EUROCOMIT zagotavlja profesionalno pravno prevajalsko storitev z usposobljenimi pravnimi prevajalci, ki ne le prevajajo, ampak tudi razumejo pravni pomen in posledice vsakega stavka. To je edini način za zagotavljanje pravne varnosti in veljavnosti prevodov.</p>
    `,
    relatedFAQs: [
      {
        question: 'Zakaj ne morem preprosto uporabiti ChatGPT, Google Translate ali drugih AI prevajalnikov za prevod pogodbe?',
        answer: 'Umetna inteligenca pogosto halucinira in spreminja pravni pomen besedil. Brez poznavanja izvornega in ciljnega jezika uporabnik teh napak ne more opaziti, kar vodi v visoka poslovna tveganja. AI orodja lahko: Zamenjajo "mora" z "lahko" (obveznost postane možnost), Spremenijo številke, datume ali veljavnostne roke, Dodajo ali izpustijo ključne klavzule, Zamenjajo stranke v pogodbi, Napačno prevedejo pravne termini, kar ima lahko resne posledice.'
      },
      {
        question: 'Katere vrste dokumentov nikoli ne smem prevajati z AI brez strokovnega pregleda?',
        answer: 'Absolutno potreben je profesionalni prevajalec pri: Pravnih dokumentih: Pogodbe, sporazumi, splošni pogoji poslovanja, Sodne odločbe, tožbe, predlogi, Notarski dokumenti, pooblastila, Pravilniki, statute, sklepi. Finančnih dokumentih: Letna poročila, revizijska mnenja, Investicijska dokumentacija, Bančne pogodbe, garancije. Reguliranih industrijah: Medicinska dokumentacija (navodila za uporabo zdravil), Certifikati, tehnične specifikacije (ISO, CE), Varnostni listi. Zakaj? Ena napaka lahko povzroči finančno škodo, sodni spor ali celo ogrozi varnost.'
      }
    ]
  },

  'tehnicni-prevodi-nemscina': {
    title: 'Tehnični prevodi in nemščina: Varnostna tveganja',
    subtitle: 'Zakaj je natančnost pri tehničnih prevodih kritična za varnost',
    date: '2025-01-25',
    category: 'Tehnično',
    readTime: '7 min',
    excerpt: 'Specifike tehnične nemščine in kritična varnostna tveganja pri avtomatskem prevajanju tehničnih navodil.',
    content: `
      <h2>Uvod: Tehnična nemščina in zahteve po natančnosti</h2>
      <p>Tehnična nemščina je eden najbolj zahtevnih jezikovnih registrov za prevajanje, saj zahteva ne le jezikovno natančnost, ampak tudi globoko razumevanje tehničnih procesov, varnostnih standardov in industrijske terminologije. Napake v tehničnih prevodih niso le nesprejemljive -- lahko ogrožajo človeško varnost in povzročijo katastrofalne posledice.</p>

      <p>Ta članek obravnava, zakaj AI prevodi tehničnih dokumentov iz nemščine predstavljajo nedopustno varnostno tveganje in kako profesionalno tehnično prevajanje Eurocomit3 zagotavlja varnost in skladnost s standardi.</p>

      <h2>Posebnosti tehnične nemščine</h2>
      <p>Tehnična nemščina se od splošnega jezika razlikuje v naslednjih vidikih:</p>
      <ul>
        <li><strong>Izjemna preciznost terminologije:</strong> Vsak tehnični termin ima točen in enoličen pomen, ki se ne sme zamenjati s sinominom.</li>
        <li><strong>Kompleksna sestavljenka:</strong> Dolge sestavljene besede (npr. "Sicherheitsventilöffnungsdruckeinstellung") zahtevajo točno razčlenitev in prevod.</li>
        <li><strong>Nominalizacija:</strong> Nemščina pogosto uporablja samostalniške konstrukcije, ki jih je treba preoblikovati v slovenščino.</li>
        <li><strong>Formalnost in strukturiranost:</strong> Tehnična navodila morajo slediti strogim standardom jasnosti in nedvoumnosti.</li>
        <li><strong>Varnostna kritičnost:</strong> Napačen prevod varnostnih navodil lahko ogrozi življenja.</li>
      </ul>

      <h2>Primerjava: AI prevod tehničnih navodil vs. Strokovno tehnično prevajanje</h2>
      <p>Spodnja tabela jasno prikazuje razlike med neobdelano AI prevodom in profesionalno tehnično prevajalsko storitvijo Eurocomit3.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-gray-700">
          <thead class="bg-slate-800">
            <tr>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Vidik tehničnega prevajanja</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Surov AI prevod</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Strokovno tehnično prevajanje Eurocomit3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Tehnična terminologija</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Nekonsistentna, napačne izbire izrazov</td>
              <td class="border border-gray-700 px-4 py-2">Precizna, preverjena z industrijskimi standardi</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Razumevanje varnostnih tveganj</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Brez poznavanja konteksta varnosti</td>
              <td class="border border-gray-700 px-4 py-2">Tehnični strokovnjak razume posledice napak</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Prevod sestavljenk</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Pogosto napačen ali semantično nejasen</td>
              <td class="border border-gray-700 px-4 py-2">Pravilno razčlenjen in kontekstualno ustrezen</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Numerične vrednosti in enote</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Lahko napačno prenesene ali zamenjane</td>
              <td class="border border-gray-700 px-4 py-2">Preverjene in konsistentne</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Skladnost s standardi (ISO, DIN, EN)</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Ne upošteva standardiziranih izrazov</td>
              <td class="border border-gray-700 px-4 py-2">Zagotovljena skladnost z relevantnimi standardi</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Varnostna kritičnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Visoko tveganje za varnost uporabnikov</td>
              <td class="border border-gray-700 px-4 py-2">Minimalno tveganje, strokovno preverjeno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Konkretni primeri varnostno kritičnih napak AI v tehničnih prevodih</h2>
      
      <h3>Primer 1: Napačen prevod varnostnega opozorila</h3>
      <p><strong>Izvirnik (nemščina):</strong> "Gerät vor Wartung spannungsfrei schalten!"</p>
      <p><strong>AI prevod (napaka):</strong> "Napravo pred vzdrževanjem izklopite iz omrežja."</p>
      <p><strong>Pravilen prevod:</strong> "Pred vzdrževanjem napravo ločite od napetosti!"</p>
      <p><strong>Posledica:</strong> AI prevod ne poudarja kritične varnostne zahteve po popolni odsotnosti napetosti, kar lahko privede do elektrike udara. "Izklop" lahko pomeni le ugasnitev, ne pa fizične ločitve od omrežja.</p>

      <h3>Primer 2: Napačen prevod sestavljenke</h3>
      <p><strong>Izvirnik:</strong> "Druckbegrenzungsventil"</p>
      <p><strong>AI prevod (napaka):</strong> "Tlačni omejevalnik ventil"</p>
      <p><strong>Pravilen prevod:</strong> "Ventil za omejevanje tlaka" ali "Tlakomerno varnostno ventil"</p>
      <p><strong>Posledica:</strong> AI je prevedel besedo dobesedno, brez razumevanja funkcije komponente, kar povzroči zmedo pri montaži.</p>

      <h3>Primer 3: Numerične napake</h3>
      <p><strong>Izvirnik:</strong> "Betriebsdruck: max. 16 bar"</p>
      <p><strong>AI prevod (napaka):</strong> "Obratovalni tlak: največ 16 barov"</p>
      <p><strong>Pravilen prevod:</strong> "Obratovalni tlak: maks. 16 bar"</p>
      <p><strong>Posledica:</strong> Čeprav je številka pravilna, AI je dodal množinsko obliko "barov", kar je v tehničnih specifikacijah nesprejemljivo (bar je nespremenljiva enota).</p>

      <h2>Zakaj je strokovno tehnično prevajanje nepogrešljivo</h2>
      <p>Profesionalni tehnični prevajalec Eurocomit3:</p>
      <ul>
        <li><strong>Pozna tehnično področje</strong> in razume delovanje sistemov.</li>
        <li><strong>Obvlada industrijsko terminologijo</strong> in standarde (ISO, DIN, EN).</li>
        <li><strong>Uporablja glosarje proizvajalcev</strong> za konsistenco terminologije.</li>
        <li><strong>Razume varnostne posledice</strong> nepravilnih prevodov.</li>
        <li><strong>Preverja numerične vrednosti</strong> in merske enote.</li>
        <li><strong>Zagotavlja jezikovno jasnost</strong> za končnega uporabnika.</li>
        <li><strong>Prevzema odgovornost</strong> za natančnost prevoda.</li>
      </ul>

      <h2>Katere tehnične dokumente nikoli ne smete prevajati z AI brez strokovnega pregleda?</h2>
      <p>Absolutno potreben je profesionalni tehnični prevajalec pri:</p>
      <ul>
        <li>Navodilih za uporabo strojev in naprav</li>
        <li>Varnostnih listih (SDS)</li>
        <li>Tehničnih specifikacijah in risbach</li>
        <li>Certifikatih (CE, ISO)</li>
        <li>Navodilih za montažo in vzdrževanje</li>
        <li>Garancijskih pogojih in servisnih priročnikih</li>
        <li>Programski dokumentaciji za industrijske sisteme</li>
      </ul>

      <h2>Sklep: Varnost zahteva strokovno prevajanje</h2>
      <p>Tehnični prevodi iz nemščine niso le jezikovno delo -- so kritična varnostna vprašanja. AI prevodi brez strokovnega tehničnega pregleda lahko povzročijo:</p>
      <ul>
        <li>Nesreče pri delu in ogrožanje zdravja</li>
        <li>Napačno montažo in delovanje naprav</li>
        <li>Zavrnitev certifikatov</li>
        <li>Odgovornost proizvajalca za škodo</li>
        <li>Izgubo ugleda in zaupanja na trgu</li>
      </ul>
      <p>EUROCOMIT zagotavlja profesionalno tehnično prevajalsko storitev z usposobljenimi tehničnimi prevajalci, ki ne le prevajajo, ampak tudi razumejo tehnične in varnostne posledice vsakega termina. To je edini način za zagotavljanje varnosti uporabnikov in skladnosti s predpisi.</p>
    `,
    relatedFAQs: [
      {
        question: 'Kako lahko sam prepoznam, da je AI prevod napačen, če ne govorim ciljnega jezika?',
        answer: 'Opozorilni znaki slabega AI prevoda: Nenavadne, nerodno zveneče formulacije, Nedosledna terminologija (ista stvar ima 3 različna imena), Številke ali datumi, ki "ne delujejo logično", Manjkajoči deli stavkov, Čudne vejice ali nepravilna ločila, Mešanje formalnega in neformalnega sloga. Rešitev: Ne zanašajte se na lastno presojo. Vedno naročite profesionalni pregled pri dokumentih, ki imajo poslovne posledice.'
      },
      {
        question: 'Zakaj bi sploh potreboval prevajalsko agencijo, če obstaja AI?',
        answer: 'AI je orodje, prevajalec je strokovnjak. Profesionalna prevajalska agencija (EUROCOMIT): ✓ Garancija kakovosti in odgovornost za vsak prevod, ✓ Specializirani prevajalci za vsako branžo, ✓ Terminološka doslednost v vseh dokumentih, ✓ Pravno ustrezen in kulturno primeren prevod, ✓ Profesionalno svetovanje o najboljših rešitvah, ✓ Certificirani prevodi za uradne namene, ✓ Kombinacija tehnologije in človeškega znanja za optimalno razmerje cena / kakovost.'
      }
    ]
  },

  'slovenscina-anglescina-bariera': {
    title: 'Prevajanje slovenščina – angleščina: Jezikovna bariera',
    subtitle: 'Kako AI ne razume subtilnosti slovensko-angleškega prevajanja',
    date: '2025-02-01',
    category: 'Jezikoslovje',
    readTime: '8 min',
    excerpt: 'Najpogostejše težave pri prevajanju med slovenščino in angleščino in kako jih prevajalci rešujejo.',
    content: `
      <h2>Uvod: Strukturne razlike med slovenščino in angleščino</h2>
      <p>Slovenščina in angleščina spadata v popolnoma različne jezikovne družine in se razlikujeta v skoraj vseh jezikovnih ravneh -- od morfologije, sintakse, pa do pragmatike. Te razlike predstavljajo izziv ne le za ljudi, ki se učijo jezika, ampak tudi za AI sisteme, ki pogosto ne razumejo kontekstualnih in kulturnih niansov.</p>

      <p>Ta članek obravnava ključne jezikovne izzive pri prevajanju med slovenščino in angleščino ter pojasnjuje, zakaj je človeško posredovanje nepogrešljivo za natančen in učinkovit prevod.</p>

      <h2>Ključni jezikovni izzive slovensko-angleškega prevajanja</h2>
      
      <h3>1. Slovnični spol in sklanjatev</h3>
      <p>Slovenščina pozna tri slovnične spole (moški, ženski, srednji) in šest sklonov, medtem ko angleščina nima nobenega od tega. To pomeni, da AI pogosto ne ve, kako pravilno izbrati rod ali sklonsko obliko pri prevajanju nazaj v slovenščino.</p>
      <p><strong>Primer:</strong> Angleški "manager" se lahko prevede kot "vodja" (moški/ženski), "upravitelj" (moški), "upravljavka" (ženski) ali celo "menedžer" (tujka). AI pogosto izbere prvo možnost, ne da bi upošteval kontekst ali spol osebe.</p>

      <h3>2. Dvojina</h3>
      <p>Slovenščina ima dvojino (za dve osebi ali predmeta), ki v angleščini ne obstaja. AI sistemi pogosto ignorirajo dvojino ali jo napačno prevedejo kot množino.</p>
      <p><strong>Primer:</strong> "We are going" se lahko nanaša na dve ali več oseb. V slovenščini pa je razlika med "midva greva" (dve osebi) in "mi gremo" (tri ali več). AI prevodi vedno z množino.</p>

      <h3>3. Vidski glagoli (perfektiv/imperfektiv)</h3>
      <p>Slovenščina razlikuje med dovršnimi (perfektivnimi) in nedovršnimi (imperfektivnimi) glagoli, kar vpliva na pomen stavka. Angleščina tega ne pozna in AI pogosto izbere napačen vidski glagol.</p>
      <p><strong>Primer:</strong> Angleški "to write" se lahko prevede kot "pisati" (imperfektiv -- proces) ali "napisati" (perfektiv -- zaključeno dejanje). AI ne razlikuje med njima.</p>

      <h3>4. Besedni red in informacijska struktura</h3>
      <p>Angleščina ima strogi besedni red (osebek-povedek-predmet), medtem ko je v slovenščini besedni red prožen in služi poudarjanju informacij. AI pogosto uporablja nevtralni besedni red, kor vodi v nenaraven ali celo nesmiselni prevod.</p>
      <p><strong>Primer:</strong></p>
      <ul>
        <li>"Janez je kupil avto." (nevtralno)</li>
        <li>"Avto je kupil Janez." (poudarek na Janezu)</li>
        <li>"Kupil je Janez avto." (poudarek na dejanju)</li>
      </ul>
      <p>AI ne razume te subtilnosti in vedno prevede z "John bought a car", kar ne ohranja informacijske strukture.</p>

      <h2>Primerjava: AI prevod slovenščina-angleščina vs. Strokovno prevajanje</h2>
      <p>Spodnja tabela jasno prikazuje razlike med neobdelano AI prevodom in profesionalnim prevodom Eurocomit3.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-gray-700">
          <thead class="bg-slate-800">
            <tr>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Vidik prevajanja</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Surov AI prevod</th>
              <th class="border border-gray-700 px-4 py-3 text-left text-cyan-300">Strokovno prevajanje Eurocomit3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Slovnični spol</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Naključna izbira, pogosto napačna</td>
              <td class="border border-gray-700 px-4 py-2">Preverjena glede na kontekst in spol osebe</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Dvojina</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Ignorirana ali napačno kot množina</td>
              <td class="border border-gray-700 px-4 py-2">Pravilno uporabljena kjer je potrebna</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Vidski glagoli</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Napačna izbira vida</td>
              <td class="border border-gray-700 px-4 py-2">Ustrezen vid glede na pomen</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Besedni red</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Nevtralen, ne ohranja poudarkov</td>
              <td class="border border-gray-700 px-4 py-2">Prilagojen za ohranjanje informacijske strukture</td>
            </tr>
            <tr>
              <td class="border border-gray-700 px-4 py-2 font-semibold">Kulturni kontekst</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Brez razumevanja kulturnih razlik</td>
              <td class="border border-gray-700 px-4 py-2">Upošteva kulturne konvencije obeh jezikov</td>
            </tr>
            <tr class="bg-slate-800/50">
              <td class="border border-gray-700 px-4 py-2 font-semibold">Register in formalnost</td>
              <td class="border border-gray-700 px-4 py-2" style="color: #FFFFFF !important;">Nekonsistenten ali neustrezen</td>
              <td class="border border-gray-700 px-4 py-2">Prilagojen ciljni publiki in namenu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Konkretni primeri napak AI pri slovensko-angleškem prevajanju</h2>
      
      <h3>Primer 1: Napačna izbira slovničnega spola</h3>
      <p><strong>Izvirnik (angleščina):</strong> "The doctor examined the patient."</p>
      <p><strong>AI prevod (napaka):</strong> "Zdravnik je pregledal pacienta."</p>
      <p><strong>Pravilen prevod (če je zdravnica ženska):</strong> "Zdravnica je pregledala pacienta."</p>
      <p><strong>Posledica:</strong> AI privzame moški spol, če kontekst ne poda jasnih indikatorjev, kar lahko vodi v napačno razumevanje ali celo žaljivo komunikacijo.</p>

      <h3>Primer 2: Ignoriranje dvojine</h3>
      <p><strong>Izvirnik (angleščina):</strong> "We decided to go."</p>
      <p><strong>AI prevod (napaka):</strong> "Odločili smo se, da gremo."</p>
      <p><strong>Pravilen prevod (če sta dve osebi):</strong> "Odločila sva se, da greva."</p>
      <p><strong>Posledica:</strong> Prevod deluje neprirodeno ali celo narobe, saj ne odraža števila ljudi.</p>

      <h3>Primer 3: Napačen vidski glagol</h3>
      <p><strong>Izvirnik (angleščina):</strong> "He was writing a report."</p>
      <p><strong>AI prevod (napaka):</strong> "Napisal je poročilo." (dovršni glagol -- zaključeno dejanje)</p>
      <p><strong>Pravilen prevod:</strong> "Pisal je poročilo." (nedovršni glagol -- proces)</p>
      <p><strong>Posledica:</strong> Popolnoma napačen pomen -- AI je spremenil dejanje v teku v zaključeno dejanje.</p>

      <h2>Zakaj je strokovno prevajanje slovenščina-angleščina nepogrešljivo</h2>
      <p>Profesionalni prevajalec Eurocomit3:</p>
      <ul>
        <li><strong>Obvlada oba jezika na maternem nivoju</strong> in razume njune strukturne razlike.</li>
        <li><strong>Upošteva kontekst</strong> pri izbiri slovničnega spola, števila in vida.</li>
        <li><strong>Ohranja informacijsko strukturo</strong> s primernim besednim redom.</li>
        <li><strong>Prilagaja register in formalnost</strong> ciljni publiki.</li>
        <li><strong>Razume kulturne razlike</strong> med slovenskim in angleškim govornim področjem.</li>
        <li><strong>Zagotavlja naravno tekočnost</strong> prevoda brez kalkiranja.</li>
      </ul>

      <h2>Kdaj je strokovno prevajanje ključnega pomena?</h2>
      <p>Profesionalni prevajalec je nepogrešljiv pri:</p>
      <ul>
        <li>Poslovni komunikaciji (e-pošta, pogodbe, predstavitve)</li>
        <li>Marketinških besedilih (oglasi, spletne strani, brošure)</li>
        <li>Pravnih dokumentih (pogodbe, sporazumi, sodne odločbe)</li>
        <li>Tehničnih priročnikih in navodilih</li>
        <li>Akademskih in znanstvenih besedilih</li>
        <li>Literarnih prevodih</li>
      </ul>

      <h2>Sklep: Jezikovna kompleksnost zahteva človeško presojo</h2>
      <p>Slovenščina in angleščina sta strukturno tako različna, da AI ne more zanesljivo obvladati vseh jezikovnih niansov. Napake AI prevodov niso le slovnične -- so semantične in pragmatične, kor pomeni, da lahko popolnoma spremenijo pomen ali namen besedila.</p>
      <p>EUROCOMIT zagotavlja profesionalno prevajalsko storitev z usposobljenimi prevajalci, ki ne le razumejo oba jezika, ampak tudi kulturi in komunikacijske navade obeh govornih skupnosti. To je edini način za zagotavljanje natančnih, učinkovitih in naravnih prevodov.</p>
    `,
    relatedFAQs: [
      {
        question: 'Ali zadostuje, če poznam angleščino na srednji ravni, da preverim AI prevod?',
        answer: 'Ne. Študije kažejo, da uporabniki s srednjo ravnijo jezika opazijo le 20-40% napak v AI prevodih. Še huje - pogosto mislijo, da je prevod pravilen, čeprav ni. Razlogi: Ne poznate specializirane terminologije, Ne opazite subtilnih sprememb pomena, AI prevod zveni "dovolj dobro", da ga sprejmete, Ne vidite manjkajočih delov besedila, Ne prepoznate kulturnih neprimernosti.'
      },
      {
        question: 'Sem izkušen uporabnik ChatGPT in pišem dobre prompte. Ali je to dovolj za kakovosten prevod?',
        answer: 'Tudi z naprednimi prompting tehnikami boste dosegli le 70-85% natančnosti, kar pri poslovnih dokumentih ni dovolj. Težave: AI ne razume konteksta vašega poslovanja, Prompt ne more nadomestiti jezikovnega znanja prevajalca, Konsistentnost terminologije skozi dokument je slaba, AI ne loči med formalnim in neformalnim registrom, Napredni uporabniki pogosto preveč zaupajo AI in postanejo manj pozorni.'
      }
    ]
  }
};
