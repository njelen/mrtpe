import "@/App.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhenAIHelps } from "@/components/WhenAIHelps";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MTPEProcess } from "@/components/MTPEProcess";
import { Quiz } from "@/components/Quiz";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="App bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Header />

      <div id="top">
        <Hero />
      </div>

      <WhenAIHelps />
      <ComparisonTable />

      <div id="proces">
        <MTPEProcess />
      </div>

      <div id="quiz">
        <Quiz />
      </div>

      <div id="trust">
        <Trust />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
