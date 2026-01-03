import React, { useMemo, useRef, useState } from "react";
import { Send, Upload, Link as LinkIcon, X, FileText, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [mode, setMode] = useState("upload"); // "upload" | "link"
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    langPair: "",
    description: "",
    sampleLink: "",
  });

  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const fileLabel = useMemo(() => {
    if (!file) return "Naloži datoteko (PDF, DOCX, TXT …)";
    return `${file.name} • ${(file.size / 1024 / 1024).toFixed(2)} MB`;
  }, [file]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const normalizeLangPair = (value) => {
    // zamenjaj puščice/različne oblike v en “ - ”
    return value
      .replaceAll("→", "-")
      .replaceAll("->", "-")
      .replaceAll("—", "-")
      .replaceAll("–", "-")
      .replace(/\s*-\s*/g, " - ")
      .trim();
  };

  const onLangPairBlur = () => {
    setForm((p) => ({ ...p, langPair: normalizeLangPair(p.langPair) }));
  };

  const pickFile = () => fileInputRef.current?.click();

  const setPickedFile = (f) => {
    if (!f) return;
    setFile(f);
    // če izbere upload, počisti link, da ni zmede
    setForm((p) => ({ ...p, sampleLink: "" }));
  };

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    setPickedFile(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    setPickedFile(f);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object (supports multipart/form-data for files)
    const formData = new FormData(e.target);
    
    // Add form-name field (required by Netlify)
    formData.append('form-name', 'contact');

    // If there's a file selected, ensure it's included
    if (file && mode === 'upload') {
      formData.set('file', file);
    }

    try {
      // Submit to Netlify with multipart/form-data (no need to set Content-Type header)
      // Browser will automatically set it with the correct boundary
      await fetch('/', {
        method: 'POST',
        body: formData
      });

      // Show success message
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Napaka pri pošiljanju. Prosimo poskusite ponovno.');
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      company: "",
      langPair: "",
      description: "",
      sampleLink: "",
    });
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Show success message after submission
  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/50 rounded-lg p-12 backdrop-blur-sm shadow-lg">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hvala za vaše povpraševanje!</h3>
            <p className="text-gray-300 mb-6">
              Vaše sporočilo smo prejeli. Odgovorili vam bomo v 24 urah.
            </p>
            <button
              onClick={resetForm}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95 transition-opacity"
            >
              Pošlji novo sporočilo
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6">
          Pošljite povpraševanje ali vzorec
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Povejte, kaj potrebujete. Če želite, dodajte datoteko ali povezavo do dokumenta.
        </p>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          {/* Mode switch */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => setMode("upload")}
              className={[
                "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition",
                mode === "upload"
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent",
              ].join(" ")}
            >
              <Upload className="h-4 w-4" />
              Naloži
            </button>
            <button
              type="button"
              onClick={() => setMode("link")}
              className={[
                "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition",
                mode === "link"
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent",
              ].join(" ")}
            >
              <LinkIcon className="h-4 w-4" />
              Povezava
            </button>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit} 
            className="space-y-5"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="mode" value={mode} />
            
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">Ime in priimek</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="npr. Tina Novak"
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">
                E-naslov <span className="text-cyan-300">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="npr. ime@podjetje.com"
                autoComplete="email"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">Podjetje</label>
              <input
                name="company"
                value={form.company}
                onChange={onChange}
                className="w-full rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="Vaše podjetje d.o.o."
                autoComplete="organization"
              />
            </div>

            {/* Lang pair */}
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">
                Jezikovni par <span className="text-cyan-300">*</span>
              </label>
              <input
                name="langPair"
                value={form.langPair}
                onChange={onChange}
                onBlur={onLangPairBlur}
                className="w-full rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="npr. EN - SL"
                required
              />
              <p className="mt-2 text-xs text-white/50">IZVORNI - CILJNI JEZIK (npr. EN - SL)</p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">
                Opis projekta <span className="text-cyan-300">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                className="w-full min-h-[120px] rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="Opišite vrsto vsebine, obseg, rok in posebne zahteve…"
                required
              />
            </div>

            {/* Upload OR Link */}
            {mode === "upload" ? (
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-2">
                  Datoteka (neobvezno)
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  name="file"
                  onChange={onFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.rtf,.xlsx,.ppt,.pptx,.csv"
                />

                <div
                  onClick={pickFile}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  className={[
                    "cursor-pointer rounded-xl border border-dashed px-4 py-4 transition",
                    isDragging ? "border-cyan-300/60 bg-cyan-400/10" : "border-white/15 bg-slate-950/25 hover:bg-slate-950/35",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      {file ? <FileText className="h-5 w-5 text-cyan-300" /> : <Upload className="h-5 w-5 text-white/70" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white/90">{fileLabel}</p>
                      <p className="text-xs text-white/50 mt-1">
                        Povleci in spusti datoteko sem, ali klikni za izbor.
                      </p>
                    </div>

                    {file && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearFile();
                        }}
                        className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white/80 hover:text-white hover:border-white/25"
                      >
                        <X className="h-4 w-4" />
                        Odstrani
                      </button>
                    )}
                  </div>
                </div>

               <p className="mt-2 text-xs text-white/50">
  Če datoteke ne želite naložiti, izberite zavihek »Povezava« in prilepite URL do dokumenta (npr. Google Drive/Dropbox).
</p>

              </div>
            ) : (
              <div>
                <label className="block text-sm font-semibold text-white/90 mb-2">
                  Povezava do dokumenta (neobvezno)
                </label>
                <input
                  name="sampleLink"
                  value={form.sampleLink}
                  onChange={onChange}
                  className="w-full rounded-md bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="https://drive.google.com/…"
                />
                <p className="mt-2 text-xs text-white/50">
                  Google Drive / Dropbox / OneDrive ali drug URL.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              <Send className="h-4 w-4" />
              Pošlji povpraševanje
            </button>

            <p className="text-xs text-white/45 text-center pt-1">
              S pošiljanjem soglašate s prejemanjem odgovora na navedeni e-naslov.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
