import "@/App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhenAIHelps } from "@/components/WhenAIHelps";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MTPEProcess } from "@/components/MTPEProcess";
import { Quiz } from "@/components/Quiz";
import { Trust } from "@/components/Trust";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BlogList } from "@/pages/BlogList";
import { BlogArticle } from "@/pages/BlogArticle";

function HomePage() {
  return (
    <>
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

      <Testimonials />

      <div id="faq">
        <FAQ />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
}

function BlogArticlePage() {
  const { articleId } = useParams();
  return <BlogArticle articleId={articleId} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:articleId" element={<BlogArticlePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
