/** Design reminder: Comparison reader — the content itself comes first; visible sequence, large reading blocks, no school name inside the chapter. */
import { useState } from "react";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, CircleHelp, Lightbulb, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import "../science-reader.css";

type LessonPage = {
  kicker: string;
  title: string;
  lead: string;
  sections?: [string, string][];
  diagnostic?: string[];
  concept?: [string, string, string][];
  checkpoint?: string;
  activity?: string[];
  comparison?: [string, string, string][];
  levels?: string[];
};

const beforePages: LessonPage[] = [
  {
    kicker: "Introduction",
    title: "Notre planète en mouvement",
    lead: "C’est le matin en Belgique. Le Soleil éclaire ta chambre. Au même moment, une personne qui vit en Australie se prépare à dormir. Comment est-ce possible ?",
    sections: [
      ["Objectifs", "Distinguer étoile, planète et satellite ; expliquer le jour et la nuit ; comprendre les saisons et les décalages horaires."],
      ["Le système solaire", "Le Soleil est une étoile qui produit sa lumière. La Terre est une planète qui tourne autour du Soleil. La Lune est un satellite naturel qui tourne autour de la Terre."],
      ["La rotation", "La Terre tourne sur elle-même en 24 heures. La partie tournée vers le Soleil vit le jour ; l’autre partie vit la nuit."],
    ],
  },
  {
    kicker: "Suite de la leçon",
    title: "Révolution, saisons et heures",
    lead: "La Terre voyage également autour du Soleil. Ce second mouvement permet de comprendre l’année et les saisons.",
    sections: [
      ["La révolution", "La Terre fait le tour du Soleil en environ 365 jours. Son axe est incliné : cela explique les saisons."],
      ["Les fuseaux horaires", "La Terre est découpée en 24 fuseaux horaires. Vers l’Est, il est plus tard ; vers l’Ouest, il est plus tôt."],
      ["À la fin", "L’expérience avec une lampe et un globe, puis les exercices d’application arrivent après l’ensemble de la théorie."],
    ],
  },
];

const afterPages: LessonPage[] = [
  {
    kicker: "Page 1 · Je me situe",
    title: "Avant de découvrir",
    lead: "Tu as le droit de te tromper : ces réponses servent seulement à voir ce que nous allons apprendre.",
    diagnostic: ["Le Soleil est une planète.", "Il fait nuit parce que le Soleil s’éteint.", "La Terre tourne sur elle-même.", "La Lune produit sa propre lumière."],
  },
  {
    kicker: "Pages 2–3 · Étape 1",
    title: "Notre place dans l’espace",
    lead: "Un projecteur éclaire un ballon. Une petite balle tourne autour du ballon. À quoi correspondent-ils dans l’espace ?",
    concept: [
      ["Étoile", "Produit sa propre lumière.", "Soleil"],
      ["Planète", "Tourne autour d’une étoile.", "Terre"],
      ["Satellite naturel", "Tourne autour d’une planète.", "Lune"],
    ],
    checkpoint: "La Lune brille-t-elle parce qu’elle fabrique de la lumière ?",
  },
  {
    kicker: "Pages 4–5 · Étape 2",
    title: "Pourquoi y a-t-il une nuit ?",
    lead: "On place une lampe et un globe. La Belgique est repérée par une gommette. Que se passe-t-il quand le globe tourne ?",
    activity: ["La lampe représente le Soleil.", "Le globe représente la Terre.", "La partie face à la lampe vit le jour.", "La partie dans l’ombre vit la nuit."],
    checkpoint: "Rotation = Terre qui tourne sur elle-même = 24 heures = jour et nuit.",
  },
  {
    kicker: "Pages 6–7 · Étape 3",
    title: "Une Terre inclinée",
    lead: "La Terre voyage autour du Soleil : c’est la révolution. Elle garde un axe un peu penché pendant ce voyage.",
    comparison: [
      ["Rotation", "24 heures", "Jour et nuit"],
      ["Révolution", "365 jours", "Une année et les saisons"],
    ],
    checkpoint: "Les saisons ne viennent pas de la distance au Soleil, mais surtout de l’inclinaison de l’axe terrestre.",
  },
  {
    kicker: "Pages 8–12 · Je m’entraîne",
    title: "Je vérifie et je retiens",
    lead: "Chaque notion est vérifiée une première fois juste après l’avoir comprise. Les exercices de fin servent à relier toutes les idées.",
    levels: ["Palier 1 · Je reconnais : vocabulaire et phrases à compléter.", "Palier 2 · J’explique : une phrase courte avec le mot-clé.", "Palier 3 · Je transfère : Bruxelles, Japon, rotation et décalage horaire."],
  },
];

function ReaderNavigation({ page, total, previous, next }: { page: number; total: number; previous: () => void; next: () => void }) {
  return <div className="science-reader-nav"><button disabled={page === 0} onClick={previous}><ChevronLeft size={18} /> page précédente</button><span>page {page + 1} / {total}</span><button disabled={page === total - 1} onClick={next}>page suivante <ChevronRight size={18} /></button></div>;
}

export default function ScienceChapterComparison() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const [page, setPage] = useState(0);
  const pages = mode === "before" ? beforePages : afterPages;
  const current = pages[page];
  const resetReader = (target: "before" | "after") => { setMode(target); setPage(0); };

  return <main className="science-reader-shell">
    <div className="science-reader-stars" />
    <header className="science-reader-top"><Link href="/" className="reader-back"><ArrowLeft size={16} /> portail STIM</Link><p>sciences_3e · lecture de validation</p><span>chapitre_01</span></header>

    <section className="science-reader-heading">
      <p className="reader-overline">UAA 1 · Terre dans l’Univers</p>
      <h1>Notre planète<br /><em>en mouvement</em></h1>
      <p>Lis les deux versions du même chapitre. La matière scientifique reste la même ; seule la manière d’accompagner l’élève change.</p>
    </section>

    <section className="reader-mode-choice" aria-label="Choisir la version à lire">
      <button className={mode === "before" ? "selected before" : "before"} onClick={() => resetReader("before")}><span>AVANT</span><strong>Leçon complète<br />puis exercices</strong><small>structure initiale</small></button>
      <button className={mode === "after" ? "selected after" : "after"} onClick={() => resetReader("after")}><span>APRÈS</span><strong>J’observe, je comprends,<br />je vérifie</strong><small>structure améliorée</small></button>
    </section>

    <section className={`science-lesson-page ${mode}`}>
      <div className="page-tabs"><span>{current.kicker}</span><span className="page-state">{mode === "after" ? "parcours guidé" : "version initiale"}</span></div>
      <article className="page-content">
        <h2>{current.title}</h2>
        <p className="page-lead">{current.lead}</p>

        {current.sections?.length ? <div className="before-sections">{current.sections.map(([title, body]) => <section key={title}><h3>{title}</h3><p>{body}</p></section>)}</div> : null}
        {current.diagnostic?.length ? <div className="diagnostic-check"><p><CircleHelp size={18} /> Je coche ce que je pense, sans chercher la réponse parfaite.</p>{current.diagnostic.map((item) => <label key={item}><i />{item}<span>vrai ☐ &nbsp; je ne sais pas ☐</span></label>)}</div> : null}
        {current.concept?.length ? <div className="science-concept-grid">{current.concept.map(([term, body, example], index) => <div key={term} className={`science-concept item-${index + 1}`}><span>0{index + 1}</span><h3>{term}</h3><p>{body}</p><b>exemple : {example}</b></div>)}</div> : null}
        {current.activity?.length ? <div className="science-activity"><div><Lightbulb size={24} /><p>Expérience guidée</p></div><ol>{current.activity.map((item) => <li key={item}>{item}</li>)}</ol></div> : null}
        {current.comparison?.length ? <div className="motion-comparison">{current.comparison.map(([term, duration, result]) => <div key={term}><span>{term}</span><strong>{duration}</strong><p>{result}</p></div>)}</div> : null}
        {current.levels?.length ? <div className="practice-levels">{current.levels.map((level, index) => <div key={level}><span>{index + 1}</span><p>{level}</p></div>)}</div> : null}
        {"checkpoint" in current && <aside className="reader-checkpoint"><Check size={18} /> <strong>Je vérifie :</strong> {current.checkpoint}</aside>}
      </article>
      <ReaderNavigation page={page} total={pages.length} previous={() => setPage(Math.max(0, page - 1))} next={() => setPage(Math.min(pages.length - 1, page + 1))} />
    </section>

    <section className="reader-difference"><RotateCcw size={23} /><div><p>La différence utile</p><strong>La version améliorée ne retire pas la matière : elle la découpe, la fait manipuler et la vérifie avant de passer à la suite.</strong></div></section>
  </main>;
}
