/** Design reminder: STEM home cover — editorial institution landing page, with each study path keeping its own visual identity. */
import { ArrowRight, Atom, CircuitBoard, ChevronDown, FlaskConical, Orbit, Sigma } from "lucide-react";
import { Link } from "wouter";
import { courseYears } from "@/data/courses";
import { science3Chapters } from "@/data/science3";
import "../stem-home.css";

export default function Home() {
  return (
    <main className="stem-home">
      <header className="stem-nav">
        <Link href="/" className="stem-brand"><span>✦</span><b>STEM</b><i>FRANS FISCHER</i></Link>
        <p>Institut Communal Technique Frans Fischer</p>
      </header>

      <section className="stem-hero">
        <div className="stem-hero-copy">
          <p>PORTAIL PÉDAGOGIQUE · SCIENCES &amp; NUMÉRIQUE</p>
          <h1>Regarder.<br /><em>Comprendre.</em><br />Construire.</h1>
          <p className="stem-lead">Un lieu pour explorer les sciences, la technologie, l’ingénierie et les mathématiques. Chaque parcours avance à son rythme : une question claire, une notion utile, une activité et une vérification.</p>
          <div className="stem-hero-meta"><span><FlaskConical size={17} />sciences</span><span><CircuitBoard size={17} />technologie</span><span><Atom size={17} />ingénierie</span><span><Sigma size={17} />mathématiques</span></div>
        </div>
        <div className="stem-hero-orbit" aria-hidden="true"><span className="planet p1">🔬</span><span className="planet p2">⚡</span><span className="planet p3">🧬</span><span className="planet p4">🪐</span><i /></div>
      </section>

      <section className="stem-catalogue" id="parcours">
        <div className="stem-sectionhead"><p>PARCOURS DISPONIBLES</p><h2>Choisis ton année.<br />Garde ton fil.</h2><span>Les cours déjà disponibles sont proposés ci-dessous. Les autres univers STEM arrivent progressivement.</span></div>
        <div className="stem-year-grid">
          {[1, 2].map((year) => {
            const course = courseYears[year as 1 | 2];
            return <Link key={year} href={`/annee/${year}`} className={`stem-year-card s${year}`}>
              <div className="stem-card-top"><span>0{year}</span><i>{year === 1 ? "◌" : "▣"}</i></div>
              <p>{year === 1 ? "NUMÉRIQUE · BLEU & ROSE" : "NUMÉRIQUE · TERMINAL / CODE"}</p><h3>{course.label}</h3><strong>{course.title}</strong><span>{course.subtitle}</span><em>ouvrir le parcours <ArrowRight size={17} /></em>
            </Link>;
          })}
          <Link href="/sciences/3" className="stem-year-card s3">
            <div className="stem-card-top"><span>03</span><i>✦</i></div><p>SCIENCES · COSMO-LABO</p><h3>3ème année</h3><strong>Observer pour comprendre</strong><span>Terre, lumière, cellule, système nerveux, matière, combustion et électricité.</span><em>{science3Chapters.length} chapitres <ArrowRight size={17} /></em>
          </Link>
        </div>
      </section>

      <section className="stem-universes">
        <div><span><FlaskConical /></span><p>SCIENCES</p><small>Observer le monde vivant, la matière, la lumière et l’énergie.</small></div>
        <div><span><CircuitBoard /></span><p>TECHNOLOGIE</p><small>Comprendre les objets, les outils, les systèmes et leurs usages.</small></div>
        <div><span><Orbit /></span><p>INGÉNIERIE</p><small>Imaginer, tester, améliorer et expliquer une solution.</small></div>
        <div><span><Sigma /></span><p>MATHÉMATIQUES</p><small>Mesurer, raisonner, représenter et résoudre des problèmes.</small></div>
      </section>

      <footer className="stem-footer"><span>STEM · Institut Communal Technique Frans Fischer</span><span>apprendre avec méthode</span><a href="#parcours"><ChevronDown size={15} />voir les parcours</a></footer>
    </main>
  );
}
