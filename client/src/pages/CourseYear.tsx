/** Design reminder: Terminal pédagogique vivant — persistent progress rail, readable lesson sequence, quick verification. */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleHelp, Lightbulb, Menu, Target, X } from "lucide-react";
import { CourseChapter, CourseYear as CourseYearType, courseYears } from "@/data/courses";

function DiagnosticMap({ chapter, isAlternate }: { chapter: CourseChapter; isAlternate: boolean }) {
  const first = chapter.concepts[0];
  const second = chapter.concepts[1];
  return (
    <section className={`diagnostic-map terminal-window ${isAlternate ? "alternate" : ""}`} aria-label={`Schéma de départ du chapitre ${chapter.number}`}>
      <div className="terminal-top"><span className="dots"><i /><i /><i /></span><span>./observer_avant_de_nommer</span></div>
      <div className="diagnostic-body">
        <div className="diagram-title"><p className="eyebrow blue">&gt;_ carte_de_depart</p><p>Pars d’une situation, repère l’idée clé, puis explique ce qui se passe.</p></div>
        <div className="diagram-flow">
          <div className="diagram-node situation"><span>01 / situation</span><strong>{chapter.question}</strong></div>
          <i className="diagram-arrow">→</i>
          <div className="diagram-node concept"><span>02 / notion_clé</span><strong>{first.label}</strong><p>{first.body}</p></div>
          <i className="diagram-arrow">→</i>
          <div className="diagram-node action"><span>03 / action</span><strong>{second.label}</strong><p>Tu peux ensuite vérifier ton raisonnement avec la mission et le test du chapitre.</p></div>
        </div>
        <div className="color-legend"><span><i className="green-dot" />vert : idée clé</span><span><i className="blue-dot" />bleu : explication</span><span><i className="yellow-dot" />jaune : mission</span><span><i className="red-dot" />rouge : piège à repérer</span></div>
      </div>
    </section>
  );
}

function QuizCard({ chapter }: { chapter: CourseChapter }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === chapter.quiz.answer;
  return (
    <section className="quiz-window terminal-window" aria-label="Vérification rapide">
      <div className="terminal-top"><span className="dots"><i /><i /><i /></span><span>./verifier</span></div>
      <div className="quiz-body">
        <p className="eyebrow green">&gt;_ test_ton_raisonnement</p>
        <h3>{chapter.quiz.question}</h3>
        <div className="quiz-options">
          {chapter.quiz.options.map((option, index) => (
            <button key={option} className={`quiz-option ${selected === index ? (isCorrect ? "correct" : "incorrect") : ""}`} onClick={() => setSelected(index)}>
              <span>{String.fromCharCode(65 + index)}</span>{option}
            </button>
          ))}
        </div>
        {selected !== null && <p className={`quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`}>{isCorrect ? "Bonne réponse. " : "Pas encore. "}{chapter.quiz.explanation}</p>}
      </div>
    </section>
  );
}

export default function CourseYear({ year }: { year: CourseYearType }) {
  const course = courseYears[year];
  const [chapter, setChapter] = useState(course.chapters[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const index = course.chapters.findIndex((item) => item.number === chapter.number);
  const previous = course.chapters[index - 1];
  const next = course.chapters[index + 1];

  const chooseChapter = (item: CourseChapter) => {
    setChapter(item);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`course-shell course-s${year}`}>
      <header className="course-mobilebar">
        <Link href="/" className="brand-mini"><img src="/manus-storage/cours-numerique-logo_b036668f.png" alt="" /> NUMERIQUE::FMTTN</Link>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le sommaire">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <aside className={`course-sidebar ${menuOpen ? "open" : ""}`}>
        <Link href="/" className="brand-lockup"><img src="/manus-storage/cours-numerique-logo_b036668f.png" alt="" /><span>NUMERIQUE<br /><b>FMTTN</b></span></Link>
        <div className="year-marker"><span>parcours_{year}</span><strong>{course.label}</strong></div>
        <nav aria-label={`Sommaire de ${course.label}`}>
          <p className="nav-caption">chapitres / {course.chapters.length}</p>
          {course.chapters.map((item) => <button key={item.number} className={item.number === chapter.number ? "active" : ""} onClick={() => chooseChapter(item)}><span>{String(item.number).padStart(2, "0")}</span>{item.title}</button>)}
        </nav>
        <div className="sidebar-foot"><span className="pulse-dot" />progression visible<br />une notion, puis un test</div>
      </aside>

      <main className={`lesson-main lesson-s${year}`}>
        <div className="grid-noise" />
        <section className="lesson-head">
          <Link href="/" className="back-link"><ArrowLeft size={15} /> page_de_garde</Link>
          <div className="lesson-brand"><img src="/manus-storage/cours-numerique-logo_b036668f.png" alt="" /><span>NUMERIQUE::FMTTN</span><i>parcours_{year}</i></div>
          <div className="chapter-stamp"><span>chapitre_{String(chapter.number).padStart(2, "0")}</span><em>{chapter.command}</em></div>
          <p className="eyebrow blue">&gt;_ question_directrice</p>
          <h1>{chapter.title}<span className="cursor">_</span></h1>
          <p className="lead">{chapter.question}</p>
          <div className="progress-track" aria-label={`Chapitre ${index + 1} sur ${course.chapters.length}`}><span style={{ width: `${((index + 1) / course.chapters.length) * 100}%` }} /></div>
          <p className="progress-copy">séquence {index + 1} / {course.chapters.length} — {course.label}</p>
        </section>

        <section className="mission-band">
          <Target size={28} /><div><p className="eyebrow yellow">&gt;_ mission_du_chapitre</p><p>{chapter.mission}</p></div>
        </section>

        <DiagnosticMap chapter={chapter} isAlternate={chapter.number % 2 === 0} />

        <section className="concept-intro">
          <div><p className="eyebrow green">&gt;_ ouvrir_le_capot</p><h2>Le concept, étape par étape.</h2></div>
          <p>{chapter.intro}</p>
        </section>

        <section className="concept-flow">
          {chapter.concepts.map((concept, conceptIndex) => <article className={`concept-row ${concept.tone}`} key={concept.label}>
            <span className="concept-index">0{conceptIndex + 1}</span>
            <div><p className="concept-label">{concept.label}</p><p>{concept.body}</p></div>
            <span className="concept-rail" />
          </article>)}
        </section>

        <QuizCard key={chapter.number} chapter={chapter} />

        <section className="recap-band">
          <div><p className="eyebrow green">&gt;_ a_retenir</p><h2>Checkpoint final</h2></div>
          <ul>{chapter.recap.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
        </section>

        <section className="hint-box"><Lightbulb size={21} /><p><strong>Astuce de méthode.</strong> Avant de passer au chapitre suivant, reformule une idée avec tes propres mots. Si tu peux l’expliquer simplement, tu es sur la bonne piste.</p></section>

        <footer className="lesson-navigation">
          {previous ? <button onClick={() => chooseChapter(previous)}><ArrowLeft size={17} /><span><small>chapitre précédent</small>{previous.title}</span></button> : <span />}
          {next ? <button onClick={() => chooseChapter(next)} className="next"><span><small>chapitre suivant</small>{next.title}</span><ArrowRight size={17} /></button> : <Link href="/"><CircleHelp size={17} />retour au portail</Link>}
        </footer>
      </main>
    </div>
  );
}
