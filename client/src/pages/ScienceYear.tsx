/** Design reminder: S3 Cosmo-labo — night-sky science pages with visible learning steps and low-friction checks. */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleHelp, Download, FlaskConical, Menu, Orbit, Sparkles, X } from "lucide-react";
import { science3Chapters, ScienceChapter } from "@/data/science3";
import "../science-year.css";
import "../science-download.css";

function QuickCheck({ chapter }: { chapter: ScienceChapter }) {
  const [choice, setChoice] = useState<number | null>(null);
  const good = choice === chapter.check.answer;
  return <section className="cosmo-check" aria-label="Vérification rapide"><p>VÉRIFICATION RAPIDE</p><h3>{chapter.check.prompt}</h3><div>{chapter.check.options.map((option, index) => <button key={option} onClick={() => setChoice(index)} className={choice === index ? (good ? "good" : "bad") : ""}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>{choice !== null && <small>{good ? "Bonne réponse. " : "Pas encore. "}{chapter.check.explanation}</small>}</section>;
}

export default function ScienceYear() {
  const [chapter, setChapter] = useState(science3Chapters[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const index = science3Chapters.findIndex((item) => item.number === chapter.number);
  const previous = science3Chapters[index - 1];
  const next = science3Chapters[index + 1];
  const choose = (item: ScienceChapter) => { setChapter(item); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <div className="cosmo-course">
    <header className="cosmo-mobile"><Link href="/" className="cosmo-mini"><Sparkles size={17} /> STIM</Link><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir les chapitres">{menuOpen ? <X /> : <Menu />}</button></header>
    <aside className={`cosmo-sidebar ${menuOpen ? "open" : ""}`}>
      <Link href="/" className="cosmo-lockup"><span className="cosmo-orbit">✦</span><span>SCIENCES<br /><b>3E</b></span></Link>
      <div className="cosmo-year"><span>PARCOURS SCIENTIFIQUE</span><strong>3ème année</strong><p>Observer · comprendre · vérifier</p></div>
      <nav aria-label="Chapitres de sciences de 3ème"><p>8 CHAPITRES</p>{science3Chapters.map((item) => <button key={item.number} onClick={() => choose(item)} className={item.number === chapter.number ? "active" : ""}><b>{String(item.number).padStart(2, "0")}</b><span>{item.title}</span></button>)}</nav>
      <a className="cosmo-download" href="/documents/Sciences_3e_CosmoLabo_FE_PF.zip" download><Download size={15} /><span>Pack imprimable<br /><b>FE + PF Cosmo-labo</b></span></a>
      <div className="cosmo-sidefoot"><i />une question<br />une expérience<br />une vérification</div>
    </aside>
    <main className="cosmo-main">
      <section className="cosmo-hero" style={{ backgroundImage: "linear-gradient(90deg,rgba(5,13,40,.98),rgba(5,13,40,.6)),url(/manus-storage/cosmo_labo_ch1_bg_605061f9.png)" }}>
        <Link href="/" className="cosmo-back"><ArrowLeft size={15} /> portail STIM</Link>
        <div className="cosmo-brand"><Orbit size={17} /> SCIENCES · 3E <i /> {chapter.kicker}</div>
        <p>CHAPITRE {String(chapter.number).padStart(2, "0")}</p><h1>{chapter.title}</h1><div className="cosmo-emojis" aria-hidden="true">🔬&nbsp; 🪐&nbsp; ⭐</div>
        <span className="cosmo-progress" style={{ width: `${((index + 1) / science3Chapters.length) * 100}%` }} />
      </section>
      <section className="cosmo-question"><span>QUESTION DU CHAPITRE</span><h2>{chapter.question}</h2></section>
      <section className="cosmo-path"><div><b>01</b><span>Je me pose des questions</span></div><i>→</i><div><b>02</b><span>J’observe</span></div><i>→</i><div><b>03</b><span>Je comprends</span></div><i>→</i><div><b>04</b><span>Je m’entraîne</span></div><i>→</i><div><b>05</b><span>Je vérifie</span></div></section>
      <section className="cosmo-intro"><div><FlaskConical size={29} /><p>OBSERVATION DE DÉPART</p></div><h2>{chapter.intro}</h2></section>
      <section className="cosmo-concepts">{chapter.concepts.map((concept, conceptIndex) => <article key={concept.label} className={concept.tone}><span className="cosmo-index">0{conceptIndex + 1}</span><em>{concept.icon}</em><h3>{concept.label}</h3><p>{concept.body}</p></article>)}</section>
      <section className="cosmo-activity"><span>ACTIVITÉ GUIDÉE</span><p>{chapter.activity}</p><small>Matériel simple · discussion en binôme · une observation à noter</small></section>
      <QuickCheck key={chapter.number} chapter={chapter} />
      <section className="cosmo-recap"><div><p>À RETENIR</p><h2>Les étoiles du chapitre</h2></div><ul>{chapter.recap.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></section>
      <footer className="cosmo-nav">{previous ? <button onClick={() => choose(previous)}><ArrowLeft size={17} /><span><small>chapitre précédent</small>{previous.title}</span></button> : <span />}{next ? <button onClick={() => choose(next)}><span><small>chapitre suivant</small>{next.title}</span><ArrowRight size={17} /></button> : <Link href="/"><CircleHelp size={17} />retour au portail</Link>}</footer>
    </main>
  </div>;
}
