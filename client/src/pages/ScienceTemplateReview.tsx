/** Design reminder: galerie de validation S3 — cinq directions nettement distinctes pour choisir une identité de sciences, sans affecter les parcours S1 et S2. */
import { ArrowLeft, CheckCircle2, FlaskConical } from "lucide-react";
import { Link } from "wouter";

const templates = [
  { number: "01", title: "Cosmo-labo", sub: "Une lumière qui lance la découverte", image: "/manus-storage/01_cosmo_labo_8db3a9f9.png", color: "cyan", note: "Une ouverture chaleureuse autour des expériences visuelles." },
  { number: "02", title: "Chemin des constellations", sub: "Les notions deviennent des étapes lumineuses", image: "/manus-storage/02_constellation_chemin_v2_c2924398.png", color: "yellow", note: "Un fil très visible pour accompagner la progression." },
  { number: "03", title: "Orages électriques", sub: "Une énergie dynamique pour les protocoles", image: "/manus-storage/03_orages_electriques_8f211e83.png", color: "blue", note: "Le plus concret pour l’électricité, la sécurité et les manipulations." },
  { number: "04", title: "Stickers scientifiques", sub: "Les mots-clés prennent une forme mémorable", image: "/manus-storage/04_stickers_scientifiques_937a8158.png", color: "violet", note: "Le plus ludique tout en gardant une lecture structurée." },
  { number: "05", title: "Ciel des sciences", sub: "Un univers calme pour relier toutes les notions", image: "/manus-storage/05_ciel_des_sciences_50d55daa.png", color: "green", note: "Le plus transversal pour accueillir toute l’année de sciences." },
];

export default function ScienceTemplateReview() {
  return <main className="template-review">
    <div className="grid-noise" />
    <header className="review-nav">
      <Link href="/" className="review-back"><ArrowLeft size={16} />retour_portail</Link>
      <p>INSTITUT COMMUNAL TECHNIQUE FRANS FISCHER</p>
    </header>
    <section className="review-intro">
      <p className="eyebrow green">&gt;_ validation_template_sciences_3e</p>
      <h1>Choisir<br />l’univers des sciences<span className="cursor">_</span></h1>
      <p>Cinq univers bleu nuit, traversés d’étoiles, d’éclairs et de pictogrammes scientifiques dessinés. Ils rendent les sciences plus chaleureuses, sans toucher à S1 bleu/rose ni à S2 Terminal / Code.</p>
      <div className="review-rule"><FlaskConical size={18} /><span>Choisir un univers visuel, pas un nouveau jeu : le cours reste clair, progressif et imprimable.</span></div>
    </section>
    <section className="template-gallery">
      {templates.map((template) => <article className={`template-proof ${template.color}`} key={template.number}>
        <div className="template-meta"><span>PROPOSITION_{template.number}</span><h2>{template.title}</h2><p>{template.sub}</p></div>
        <img src={template.image} alt={`Maquette du template ${template.title} pour le cours de sciences de 3ème`} />
        <footer><CheckCircle2 size={16} /><span>{template.note}</span></footer>
      </article>)}
    </section>
    <footer className="review-footer">CHOIX_ATTENDU : <b>01</b> / <b>02</b> / <b>03</b> / <b>04</b> / <b>05</b></footer>
  </main>;
}
