/**
 * Style reminder — S3 visual validation only: midnight blue, stars, lightning and illustrated science symbols.
 * This page compares the same Chapter 1 content in three editorial identities; it is not a reusable course route yet.
 */
import "../science-template-hd.css";

type Theme = {
  key: "cosmo" | "electric" | "sky";
  number: string;
  name: string;
  line: string;
  image: string;
  sticker: string;
  prompt: string;
};

const themes: Theme[] = [
  {
    key: "cosmo",
    number: "01",
    name: "Cosmo-labo",
    line: "Observer le ciel, manipuler un globe, comprendre sans se perdre.",
    image: "/manus-storage/cosmo_labo_ch1_bg_39821328.png",
    sticker: "🔬 🪐 ⭐",
    prompt: "La science commence par ce que tu vois.",
  },
  {
    key: "electric",
    number: "03",
    name: "Orages électriques",
    line: "Une leçon vive où les phénomènes s’éclairent par étapes.",
    image: "/manus-storage/orages_electriques_ch1_bg_8e592fad.png",
    sticker: "⚡ 🌍 🔭",
    prompt: "Une idée claire peut faire toute la lumière.",
  },
  {
    key: "sky",
    number: "05",
    name: "Ciel des sciences",
    line: "Un ciel calme pour relier les astres, la lumière et les bonnes questions.",
    image: "/manus-storage/ciel_sciences_ch1_bg_63cc16e1.png",
    sticker: "🌙 🧬 ✦",
    prompt: "Regarder loin. Comprendre simplement.",
  },
];

function LessonMockup({ theme }: { theme: Theme }) {
  return (
    <article className={`science-hd-sheet science-hd-${theme.key}`}>
      <header className="science-hd-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(5, 14, 42, .94) 0%, rgba(5, 14, 42, .68) 44%, rgba(5, 14, 42, .16) 100%), url(${theme.image})` }}>
        <div className="science-hd-brandline">
          <span>SCIENCES 3E</span>
          <i />
          <span>CHAPITRE 01</span>
        </div>
        <p className="science-hd-label">{theme.number} · {theme.name}</p>
        <h1>Notre planète<br />en mouvement</h1>
        <p className="science-hd-lead">{theme.line}</p>
        <div className="science-hd-stickers" aria-hidden="true">{theme.sticker}</div>
        <div className="science-hd-quote">{theme.prompt}</div>
      </header>

      <div className="science-hd-main">
        <section className="science-hd-question">
          <span>QUESTION DU CHAPITRE</span>
          <p>Comment la Terre peut-elle créer le jour, la nuit, les saisons et des heures différentes selon les pays&nbsp;?</p>
        </section>

        <section className="science-hd-layout">
          <div className="science-hd-path" aria-label="Progression du chapitre">
            <div className="active"><b>01</b><span>Je me pose des questions</span></div>
            <div><b>02</b><span>J’observe</span></div>
            <div><b>03</b><span>Je comprends</span></div>
            <div><b>04</b><span>Je m’entraîne</span></div>
            <div><b>05</b><span>Je vérifie</span></div>
          </div>

          <div className="science-hd-content">
            <div className="science-hd-step"><span>ÉTAPE 1</span><h2>Trouver notre place dans l’espace</h2></div>
            <p className="science-hd-copy">Dans une cour plongée dans le noir, un projecteur éclaire un ballon. Le projecteur représente le Soleil, le ballon représente la Terre et une petite balle représente la Lune.</p>
            <div className="science-hd-terms">
              <div><strong>Étoile</strong><span>Fabrique sa propre lumière.</span><em>☀️</em></div>
              <div><strong>Planète</strong><span>Tourne autour d’une étoile.</span><em>🌍</em></div>
              <div><strong>Satellite naturel</strong><span>Tourne autour d’une planète.</span><em>🌙</em></div>
            </div>
            <div className="science-hd-check">
              <span>JE VÉRIFIE TOUT DE SUITE</span>
              <p>Complète : « La Terre tourne autour du <b>………………………………</b>. »</p>
              <p>Entoure l’objet qui fabrique sa lumière : <b>Soleil / Terre / Lune</b>.</p>
            </div>
          </div>
        </section>

        <footer className="science-hd-footer">
          <span>Hypothèse de départ&nbsp;?</span>
          <span>→</span>
          <span>Observation</span>
          <span>→</span>
          <span>Réponse vérifiée</span>
        </footer>
      </div>
    </article>
  );
}

export default function ScienceChapterTemplateReviewHD() {
  return (
    <main className="science-hd-page">
      <header className="science-hd-intro">
        <p>VALIDATION VISUELLE · SCIENCES 3E · MÊME LEÇON, TROIS IDENTITÉS</p>
        <h1>Choisir le visage<br />du cours de sciences</h1>
        <p>Chaque proposition reprend exactement le même début du chapitre 1. Le contenu ne change pas&nbsp;: seule l’expérience de lecture est différente.</p>
      </header>
      <div className="science-hd-gallery">
        {themes.map((theme) => <LessonMockup key={theme.key} theme={theme} />)}
      </div>
    </main>
  );
}
