import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, RotateCcw } from 'lucide-react';

export const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'purpose',
      question: 'Kakšen je namen prevoda?',
      options: [
        { value: 'internal', label: 'Interno komuniciranje' },
        { value: 'public', label: 'Javna objava' },
        { value: 'high-risk', label: 'Visoko tveganje (pravni, medicinski dokumenti)' }
      ]
    },
    {
      id: 'risk',
      question: 'Kakšna je cena napake v prevodu?',
      options: [
        { value: 'low', label: 'Nizka' },
        { value: 'medium', label: 'Srednja' },
        { value: 'high', label: 'Visoka' }
      ]
    },
    {
      id: 'tone',
      question: 'Ali je pomemben brand ton ali stil pisanja?',
      options: [
        { value: 'yes', label: 'Da' },
        { value: 'no', label: 'Ne' }
      ]
    }
  ];

  const results = [
    {
      id: 1,
      title: 'AI-only prevod zadostuje',
      description: 'Za vaš namen je avtomatski prevod primeren. Priporočamo uporabo naprednih MT sistemov za interno komunikacijo.',
      warning: 'Opozorilo: Ne uporabljajte za javno objavljene vsebine ali pomembne dokumente.',
      color: 'red',
      features: [
        'Hiter in stroškovno učinkovit',
        'Primeren za interno rabo',
        'Brez človeške kontrole'
      ]
    },
    {
      id: 2,
      title: 'MTPE – light post-editing',
      description: 'Priporočamo lahek post-editing za vaš prevod. Strokovnjak bo popravil očitne napake in zagotovil osnovno kakovost.',
      color: 'yellow',
      features: [
        'Hitrejši in cenejši od klasičnega prevoda',
        'Osnovna kontrola kakovosti',
        'Primerno za preproste objavljene vsebine',
        'Popravki napak v pomenu in skladnosti'
      ]
    },
    {
      id: 3,
      title: 'MTPE – full post-editing',
      description: 'Priporočamo temeljit post-editing za vaš prevod. Prevajalec bo pregledal ton, terminologijo in zagotovil visoko kakovost.',
      color: 'teal',
      suitableFor: [
        'Marketing vsebine',
        'Članki za SEO',
        'Pomembne objavljene vsebine',
        'Produktni opisi z blagovno znamko'
      ]
    },
    {
      id: 4,
      title: 'Potrebujete 100% človeški prevod',
      description: 'Zaradi narave vaše vsebine priporočamo popolnoma človeški prevod od začetka do konca.',
      color: 'green',
      suitableFor: [
        'Pravni dokumenti',
        'Medicinske vsebine',
        'Regulatorne dokumente',
        'Vsebine z visoko pravno ali varnostno odgovornostjo'
      ]
    }
  ];

  const calculateResult = (answers) => {
    // Logic as per spec
    if (answers.purpose === 'high-risk' || answers.risk === 'high') {
      return 4; // 100% human
    } else if (answers.purpose === 'public') {
      if (answers.risk === 'medium' || answers.tone === 'yes') {
        return 3; // MTPE full
      } else {
        return 2; // MTPE light
      }
    } else {
      // Internal
      if (answers.risk === 'low' && answers.tone === 'no') {
        return 1; // AI-only
      } else {
        return 2; // MTPE light
      }
    }
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const resultId = calculateResult(newAnswers);
      setResult(results.find(r => r.id === resultId));
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (result) {
    return (
      <section id="quiz" className="py-20 px-4 bg-slate-800/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            Vaš rezultat
          </h2>

          <div className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 ${
            result.color === 'red' ? 'border-red-500/50' :
            result.color === 'yellow' ? 'border-yellow-500/50' :
            result.color === 'teal' ? 'border-cyan-500/50' :
            'border-green-500/50'
          } rounded-lg p-8 backdrop-blur-sm shadow-lg`}>
            <h3 className="text-2xl font-bold text-white mb-4">{result.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{result.description}</p>

            {result.warning && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 text-sm">{result.warning}</p>
              </div>
            )}

            {result.features && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Prednosti:</h4>
                <ul className="space-y-2">
                  {result.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-400">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.suitableFor && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Primerno za:</h4>
                <ul className="space-y-2">
                  {result.suitableFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-400">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20"
              >
                Pošljite povpraševanje
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Ponovi izbor
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section id="quiz" className="py-20 px-4 bg-gray-800/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Kateri pristop je pravi za vaš prevod?
        </h2>
        
        <p className="text-lg text-gray-300 text-center mb-12">
          Odgovorite na 3 kratka vprašanja in prejmite priporočilo, prilagojeno vaši situaciji.
        </p>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Vprašanje {currentStep + 1} od {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-blue-500/20 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-8">
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="w-full text-left p-6 bg-slate-900/50 border border-slate-600 rounded-lg hover:border-blue-400 hover:bg-slate-900/70 transition-all text-white font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Back button if not first question */}
        {currentStep > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              ← Nazaj
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
