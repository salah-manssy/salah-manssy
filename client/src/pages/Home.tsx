/** Design reminder: Terminal pédagogique vivant — a single quiet cover page that clearly separates the two learning paths. */
import { ArrowRight, BookOpenCheck, ChevronDown, GraduationCap, TerminalSquare } from "lucide-react";
import { Link } from "wouter";
import { courseYears } from "@/data/courses";

export default function Home() {
  return (
    <main className="portal-home">
      <div className="grid-noise" />
      <header className="portal-nav">
        <div className="brand-lockup"><img src="/manus-storage/cours-numerique-logo_b036668f.png" alt="Logo Numérique FMTTN" /><span>NUMERIQUE<br /><b>FMTTN</b></span></div>
        <p>cours_pedagogique / belgique / FWB</p>
      </header>

      <section className="portal-hero">
        <div className="hero-copy">
          <p className="eyebrow green">&gt;_ boot_sequence</p>
          <h1>Comprendre<br />le numérique<span className="cursor">_</span></h1>
          <p className="hero-lead">Un seul portail. Deux parcours. Des notions courtes pour comprendre, tester son raisonnement et progresser sans perdre le fil.</p>
          <div className="hero-meta"><span><TerminalSquare size={17} />16 chapitres</span><span><BookOpenCheck size={17} />notion → test → mission</span><span><GraduationCap size={17} />1ère + 2ème</span></div>
        </div>
        <img className="hero-visual" src="/manus-storage/cours-numerique-hero_234afba1.jpg" alt="Illustration abstraite représentant l’apprentissage du numérique" />
      </section>

      <section className="choice-section" id="parcours">
        <div className="choice-intro"><p className="eyebrow blue">&gt;_ choisir_ton_parcours</p><h2>Où commences-tu ?</h2><p>Choisis ton année pour ouvrir son sommaire. Les contenus restent séparés, mais la méthode de travail et l’identité visuelle sont communes.</p></div>
        <div className="year-choices">
          {[1, 2].map((year) => {
            const course = courseYears[year as 1 | 2];
            return <Link key={year} href={`/annee/${year}`} className={`year-choice y${year}`}>
              <div className="year-image-wrap"><img src={course.image} alt="" /></div>
              <div className="year-choice-content"><p>parcours_{year}</p><h3>{course.label}</h3><strong>{course.title}</strong><span>{course.subtitle}</span><em>ouvrir le sommaire <ArrowRight size={17} /></em></div>
            </Link>;
          })}
        </div>
      </section>

      <section className="method-strip">
        <p className="eyebrow yellow">&gt;_ la_methode</p>
        <div><span>01</span><p><b>Voir</b> une situation, un schéma ou un exemple.</p></div>
        <div><span>02</span><p><b>Comprendre</b> une notion claire et courte.</p></div>
        <div><span>03</span><p><b>Vérifier</b> son raisonnement par une question.</p></div>
        <div><span>04</span><p><b>Appliquer</b> dans une mission de chapitre.</p></div>
      </section>

      <footer className="portal-footer"><span>NUMERIQUE::FMTTN</span><span>terminal_pedagogique_v1.0</span><a href="#parcours"><ChevronDown size={15} />choisir une année</a></footer>
    </main>
  );
}
