/** Design reminder: Terminal pédagogique vivant — one clear idea, then a short verification. */
export type CourseYear = 1 | 2;

export type CourseChapter = {
  number: number;
  title: string;
  command: string;
  question: string;
  intro: string;
  concepts: { label: string; body: string; tone: "green" | "blue" | "yellow" | "red" }[];
  mission: string;
  recap: string[];
  quiz: { question: string; options: string[]; answer: number; explanation: string };
};

export const courseYears: Record<CourseYear, { label: string; title: string; subtitle: string; image: string; chapters: CourseChapter[] }> = {
  1: {
    label: "1ère année",
    title: "Comprendre avant d’utiliser",
    subtitle: "Machine, réseaux, création, information, sécurité, IA et premiers programmes.",
    image: "/manus-storage/cours-numerique-s1_edc3550c.jpg",
    chapters: [
      {
        number: 1, title: "Au cœur de la machine", command: "boot_sequence", question: "Comment un appareil numérique peut-il travailler, retenir et afficher des informations ?",
        intro: "Un ordinateur, une tablette ou un smartphone n’est pas une boîte magique : il assemble du matériel, des logiciels et des espaces de mémoire qui ont chacun un rôle précis.",
        concepts: [
          { label: "hardware / software", body: "Le matériel est ce que l’on peut toucher : écran, clavier, caméra ou processeur. Les logiciels sont les programmes qui donnent des instructions au matériel.", tone: "green" },
          { label: "CPU · RAM · stockage", body: "Le CPU exécute les instructions. La RAM garde temporairement ce qui est ouvert. Le stockage conserve les fichiers, même lorsque l’appareil est éteint.", tone: "blue" },
          { label: "fichiers et formats", body: "Un fichier prend de la place en Ko, Mo, Go ou To. Son extension, comme .pdf, .jpg ou .odt, donne un indice sur son type et son usage.", tone: "yellow" }
        ],
        mission: "Organise un dossier de travail : garde ton brouillon modifiable, choisis un format final adapté et explique le rôle de la RAM lorsqu’un document est ouvert.",
        recap: ["Matériel = partie physique", "RAM = espace de travail temporaire", "Stockage = fichiers conservés", "PDF = partage ou impression d’une version finale"],
        quiz: { question: "Quel élément conserve tes photos lorsque l’appareil est éteint ?", options: ["Le CPU", "La RAM", "Le stockage"], answer: 2, explanation: "Le stockage conserve durablement les photos, documents et programmes. La RAM se vide à l’extinction." }
      },
      {
        number: 2, title: "Connectés au monde", command: "network_trace", question: "Comment les informations arrivent-elles jusqu’au bon appareil ?",
        intro: "Les données circulent entre des clients, des serveurs et des routeurs. Comprendre ce trajet aide aussi à mieux reconnaître les pièges en ligne.",
        concepts: [
          { label: "client · serveur · routeur", body: "Le client demande un service, le serveur le fournit et le routeur dirige les données vers le bon réseau ou appareil.", tone: "green" },
          { label: "IP et MAC", body: "L’adresse IP indique où un appareil est joignable sur un réseau. L’adresse MAC est liée à son interface réseau matérielle.", tone: "blue" },
          { label: "Internet ≠ Web", body: "Internet est le réseau ; le Web est l’un des services qui l’utilisent. HTTPS chiffre une connexion, mais ne suffit pas à prouver qu’un site est honnête.", tone: "yellow" }
        ],
        mission: "Analyse un message urgent reçu par un ami : repère les indices de phishing et explique, avec les mots client, serveur et routeur, comment le message est arrivé.",
        recap: ["Le routeur dirige", "L’IP aide à localiser sur un réseau", "Le Web utilise Internet", "Un cadenas HTTPS n’empêche pas toutes les arnaques"],
        quiz: { question: "Dans un réseau, quel rôle dirige les données vers le bon appareil ?", options: ["Le routeur", "Le fichier PDF", "Le navigateur"], answer: 0, explanation: "Le routeur guide les données vers le réseau ou l’appareil auquel elles sont destinées." }
      },
      {
        number: 3, title: "Communiquer et collaborer", command: "share_protocol", question: "Comment choisir le bon outil pour échanger et travailler avec les autres ?",
        intro: "Un message rapide, un e-mail formel et un document partagé n’ont pas le même objectif. Le bon outil dépend de la situation et des droits accordés.",
        concepts: [
          { label: "réseaux socionumériques", body: "Ils permettent de créer un profil, partager des contenus et interagir. Chaque plateforme a des usages, publics et règles différents.", tone: "green" },
          { label: "e-mail formel", body: "Un e-mail scolaire ou officiel comporte un destinataire, un objet clair, une formule d’appel, un message précis et une signature.", tone: "blue" },
          { label: "Cloud et droits", body: "Le Cloud repose sur des serveurs physiques. Lors d’un partage, lecteur, commentateur et éditeur ne donnent pas les mêmes possibilités.", tone: "yellow" }
        ],
        mission: "Prépare un projet de groupe : choisis un outil collaboratif, attribue les bons droits à tes camarades et écris l’e-mail d’envoi au professeur.",
        recap: ["E-mail pour une communication formelle", "Cloud = fichiers accessibles via des serveurs", "Éditeur peut modifier", "Je choisis l’outil selon mon besoin"],
        quiz: { question: "Quel droit de partage faut-il donner à un camarade qui doit écrire avec toi dans le même document ?", options: ["Lecteur", "Éditeur", "Aucun droit"], answer: 1, explanation: "Un éditeur peut modifier le document. Il faut donner ce droit avec prudence." }
      },
      {
        number: 4, title: "Créer et produire", command: "make_it_clear", question: "Comment créer un document clair, efficace et respectueux des droits ?",
        intro: "Une bonne production numérique aide le lecteur à comprendre. Elle choisit une mise en forme sobre, un visuel utile et respecte le travail ou l’image des autres.",
        concepts: [
          { label: "texte lisible", body: "La police, l’alignement, les titres et les raccourcis servent la clarté. Utiliser trop de polices ou de styles rend un document difficile à lire.", tone: "green" },
          { label: "présentation", body: "Une diapositive soutient la parole : une idée principale, peu de texte, un visuel utile et un contraste suffisant.", tone: "blue" },
          { label: "droits", body: "Droit d’auteur et droit à l’image invitent à citer une source, vérifier une licence et demander l’accord des personnes avant de diffuser leur image.", tone: "yellow" }
        ],
        mission: "Prépare le plan d’un document et d’une diapositive sur un sujet choisi. Justifie ta mise en forme et indique la source de ton illustration.",
        recap: ["Clarté avant décoration", "Une idée par diapositive", "Contraste lisible", "Je cite mes sources et je demande l’accord"],
        quiz: { question: "Quel choix améliore une diapositive destinée à être présentée à l’oral ?", options: ["Un long paragraphe à lire", "Une idée claire avec un visuel utile", "Cinq polices différentes"], answer: 1, explanation: "Une diapositive soutient l’explication orale : elle doit rester simple et lisible." }
      },
      {
        number: 5, title: "Chercher et vérifier", command: "query_check", question: "Comment trouver une information utile sans se laisser tromper ?",
        intro: "Une recherche efficace commence par des mots-clés précis et se termine par une vérification de la source, de l’auteur, de la date et du contexte.",
        concepts: [
          { label: "mots-clés", body: "Une requête courte et précise donne souvent de meilleurs résultats qu’une question longue. On garde les mots importants et on précise le sujet.", tone: "green" },
          { label: "source et contexte", body: "Avant de croire ou partager une information, on se demande qui parle, quand, dans quel but et avec quelles preuves.", tone: "blue" },
          { label: "bulle de filtres", body: "Les contenus proposés ne représentent pas toujours tout le sujet. Varier les sources aide à élargir son point de vue.", tone: "yellow" }
        ],
        mission: "Recherche une information sur un sujet de cours. Note ta requête, compare deux sources et explique laquelle paraît la plus solide.",
        recap: ["Je choisis des mots-clés", "Je vérifie auteur, date et objectif", "Je recoupe les sources", "Je ne partage pas trop vite"],
        quiz: { question: "Quel réflexe aide le mieux à vérifier une information surprenante ?", options: ["La partager tout de suite", "Chercher une autre source fiable", "Regarder seulement les commentaires"], answer: 1, explanation: "Comparer plusieurs sources crédibles aide à vérifier une information avant de la partager." }
      },
      {
        number: 6, title: "Vie privée, sécurité et droits", command: "protect_my_data", question: "Comment profiter du numérique tout en protégeant ses données et les autres ?",
        intro: "Chaque compte, photo ou publication laisse des traces. Les bons réflexes protègent la vie privée, les accès et le bien-être en ligne.",
        concepts: [
          { label: "traces numériques", body: "Les données publiées, consultées ou collectées peuvent composer une identité numérique. Il faut réfléchir avant de diffuser une information personnelle.", tone: "green" },
          { label: "comptes sécurisés", body: "Un mot de passe long et unique, une vérification en deux étapes et la prudence face aux liens inattendus renforcent un compte.", tone: "blue" },
          { label: "respect en ligne", body: "Le cyberharcèlement, le partage non consenti ou les propos blessants doivent être signalés. Demander de l’aide est un réflexe responsable.", tone: "red" }
        ],
        mission: "Réalise une mini-charte pour un groupe de classe : choix d’un mot de passe, règles de partage d’images et réaction face à un message blessant.",
        recap: ["Je protège mes accès", "Je réfléchis avant de publier", "Je respecte le droit à l’image", "Je signale et je demande de l’aide"],
        quiz: { question: "Quel mot de passe est le plus prudent ?", options: ["azerty", "Mon prénom et mon année de naissance", "Une phrase longue et unique"], answer: 2, explanation: "Une phrase longue et unique est plus difficile à deviner qu’un mot très courant ou une information personnelle." }
      },
      {
        number: 7, title: "Intelligence artificielle", command: "ask_and_check", question: "Comment utiliser une IA sans lui faire confiance aveuglément ?",
        intro: "Les outils d’IA peuvent aider à produire, résumer ou imaginer, mais ils peuvent aussi se tromper, reproduire des biais ou inventer une information.",
        concepts: [
          { label: "ce que fait une IA", body: "Une IA traite des exemples et des données pour produire une réponse, une image ou une recommandation. Elle ne comprend pas le monde comme une personne.", tone: "green" },
          { label: "un prompt utile", body: "Une demande précise donne un meilleur résultat : rôle, action, format et contexte aident à formuler une consigne claire.", tone: "blue" },
          { label: "vérifier", body: "Une réponse d’IA peut être inexacte ou inventée. Il faut vérifier les faits importants, protéger les données personnelles et citer son usage si demandé.", tone: "yellow" }
        ],
        mission: "Améliore un prompt trop vague, compare deux réponses d’IA et note au moins une information à vérifier avant de la réutiliser.",
        recap: ["L’IA peut aider, pas décider à ma place", "Je formule une demande précise", "Je vérifie les faits", "Je ne partage pas de données personnelles inutilement"],
        quiz: { question: "Quelle attitude est la plus responsable face à une réponse d’IA ?", options: ["La croire sans vérifier", "Vérifier les informations importantes", "Copier sans la lire"], answer: 1, explanation: "Une IA peut produire une réponse convaincante mais erronée. Les faits importants doivent être vérifiés." }
      },
      {
        number: 8, title: "Algorithmique et programmation", command: "think_in_steps", question: "Comment décrire une solution de façon si claire qu’un ordinateur peut l’exécuter ?",
        intro: "Un algorithme est une suite d’instructions précises. On peut l’écrire, le dessiner avec un logigramme, le tester et corriger ses erreurs.",
        concepts: [
          { label: "algorithme", body: "Pour être exécutée, une consigne doit être précise, dans le bon ordre et sans laisser un choix ambigu à la machine.", tone: "green" },
          { label: "logigramme", body: "Les formes montrent le début, une action, une entrée/sortie et une condition. Les flèches donnent le sens de lecture.", tone: "blue" },
          { label: "variables · conditions · boucles", body: "Une variable garde une valeur, une condition choisit un chemin et une boucle répète une action un nombre de fois ou tant qu’une condition est vraie.", tone: "yellow" }
        ],
        mission: "Transforme une situation quotidienne en logigramme clair, avec un choix Oui/Non et une boucle adaptée. Teste ensuite ton raisonnement avec un camarade.",
        recap: ["Un algorithme est précis et ordonné", "Un logigramme se lit avec des flèches", "Une variable peut changer", "POUR répète un nombre connu ; TANT QUE attend une condition"],
        quiz: { question: "Quelle boucle convient pour répéter une action exactement dix fois ?", options: ["POUR", "TANT QUE sans condition", "Aucune boucle"], answer: 0, explanation: "La boucle POUR convient lorsque le nombre de répétitions est connu à l’avance." }
      }
    ]
  },
  2: {
    label: "2ème année",
    title: "Analyser, organiser et programmer",
    subtitle: "Recherche, esprit critique, données, binaire, algorithmique et Scratch.",
    image: "/manus-storage/cours-numerique-s2_2424f045.jpg",
    chapters: [
      {
        number: 9, title: "Rechercher comme un pro", command: "search_smarter", question: "Comment obtenir des résultats pertinents sans se perdre dans la liste ?",
        intro: "Une bonne recherche se prépare. Elle part d’un besoin précis, utilise des mots-clés pertinents et compare les résultats à l’objectif de départ.",
        concepts: [
          { label: "intention", body: "Avant de chercher, on précise ce que l’on veut comprendre, trouver, comparer ou réaliser. Cette intention guide les mots-clés.", tone: "green" },
          { label: "requête", body: "Les guillemets, le signe moins, le type de fichier ou le nom d’un site peuvent rendre une recherche plus précise lorsque c’est utile.", tone: "blue" },
          { label: "fiabilité", body: "Un résultat intéressant n’est pas automatiquement fiable. On vérifie l’auteur, la date, la source et l’objectif de la page.", tone: "yellow" }
        ],
        mission: "Prépare une stratégie de recherche pour un travail scolaire : question, mots-clés, résultat attendu et critères de sélection de deux sources.",
        recap: ["Je commence par mon intention", "Je choisis mes mots-clés", "J’utilise des opérateurs seulement quand ils aident", "Je vérifie la source"],
        quiz: { question: "Quel premier geste rend une recherche plus efficace ?", options: ["Écrire une phrase très longue", "Définir ce que je cherche vraiment", "Cliquer sur le premier résultat"], answer: 1, explanation: "Définir son besoin permet de choisir de meilleurs mots-clés et de juger les résultats." }
      },
      {
        number: 10, title: "Fake News et esprit critique", command: "verify_before_share", question: "Comment vérifier une information avant de la croire ou de la partager ?",
        intro: "Une information peut être fausse, trompeuse, sortie de son contexte ou simplement incomplète. L’esprit critique consiste à vérifier avant d’agir.",
        concepts: [
          { label: "désinformation", body: "Certaines publications cherchent volontairement à tromper ; d’autres transmettent une erreur sans mauvaise intention. Dans les deux cas, on évite de partager trop vite.", tone: "red" },
          { label: "indices", body: "Titre choquant, absence d’auteur, date ancienne, image sans contexte ou source inconnue sont des signaux qui invitent à vérifier davantage.", tone: "yellow" },
          { label: "recouper", body: "On cherche la source d’origine, on compare des médias ou organismes différents et on vérifie ce que montre réellement une image ou une vidéo.", tone: "blue" }
        ],
        mission: "Analyse une publication virale : repère trois indices, formule une recherche de vérification et rédige une réponse prudente à envoyer à un ami.",
        recap: ["Je ralentis avant de partager", "Je vérifie auteur, date et contexte", "Une image peut être trompeuse", "Je recoupe les sources"],
        quiz: { question: "Quel signe invite le plus à vérifier une publication ?", options: ["Un titre qui provoque une émotion forte", "Une source clairement indiquée", "Une date récente seule"], answer: 0, explanation: "Un titre très émotionnel n’est pas une preuve de mensonge, mais il doit pousser à vérifier avant de partager." }
      },
      {
        number: 11, title: "Histoire et évolution du numérique", command: "timeline_debug", question: "Comment le numérique est-il devenu si présent dans notre quotidien ?",
        intro: "Le numérique actuel est le résultat d’innovations successives : calcul, programmation, miniaturisation, réseaux et services en ligne ont évolué ensemble.",
        concepts: [
          { label: "jalons", body: "Les premières machines de calcul, les ordinateurs personnels, Internet et le Web sont des étapes différentes d’une même histoire.", tone: "green" },
          { label: "miniaturisation", body: "Les composants électroniques ont gagné en puissance et diminué en taille, ce qui a permis de créer des appareils plus compacts et plus accessibles.", tone: "blue" },
          { label: "Internet et Web", body: "Internet relie les réseaux ; le Web a facilité la consultation de pages liées entre elles. Ces deux notions ne sont pas apparues au même moment.", tone: "yellow" }
        ],
        mission: "Construis une courte frise avec quatre étapes : ce qui change, ce qui reste et un exemple d’usage quotidien pour chaque période.",
        recap: ["Le numérique a une histoire", "Miniaturisation et puissance évoluent ensemble", "Internet et Web sont distincts", "Les usages changent avec les outils"],
        quiz: { question: "Quelle affirmation est correcte ?", options: ["Le Web et Internet sont exactement la même chose", "Le Web est un service qui utilise Internet", "Internet est une application de téléphone"], answer: 1, explanation: "Internet est l’infrastructure de réseaux ; le Web est l’un des services qui l’utilisent." }
      },
      {
        number: 12, title: "Le numérique et la planète", command: "see_the_material", question: "Pourquoi le numérique a-t-il un impact matériel et environnemental ?",
        intro: "Le numérique dépend d’appareils, de minerais, d’électricité et de centres de données. Comprendre cet impact permet de faire des choix plus responsables.",
        concepts: [
          { label: "matérialité", body: "Un smartphone ou un ordinateur est fabriqué avec des matières premières, transporté et alimenté en énergie. Le numérique n’est donc pas immatériel.", tone: "green" },
          { label: "durée de vie", body: "Protéger, réparer, réutiliser et garder un appareil plus longtemps peuvent éviter un remplacement inutile.", tone: "blue" },
          { label: "accessibilité", body: "Un service numérique doit aussi pouvoir être utilisé par des personnes ayant des besoins différents : contraste, tailles de texte et navigation claire comptent.", tone: "yellow" }
        ],
        mission: "Choisis un objet numérique du quotidien. Décris son cycle de vie, propose deux gestes réalistes pour le faire durer et vérifie qu’une consigne numérique reste accessible.",
        recap: ["Le numérique a une réalité matérielle", "La fabrication compte", "Faire durer est souvent utile", "Accessibilité = permettre à davantage de personnes d’utiliser un service"],
        quiz: { question: "Quel choix peut contribuer à réduire un remplacement inutile ?", options: ["Réparer ou protéger un appareil", "Changer de téléphone dès qu’un modèle sort", "Jeter un câble qui fonctionne"], answer: 0, explanation: "Réparer, protéger et prolonger l’usage d’un appareil sont des gestes concrets qui évitent un remplacement immédiat." }
      },
      {
        number: 13, title: "Maîtriser le tableur", command: "data_in_rows", question: "Comment transformer une grille de données en information utile ?",
        intro: "Un tableur organise les données dans des lignes et des colonnes. Il peut calculer, trier, filtrer et représenter une information avec un graphique adapté.",
        concepts: [
          { label: "grille", body: "Chaque cellule a une adresse, par exemple B3. Un tableau lisible utilise des titres de colonnes clairs, des données cohérentes et une mise en forme sobre.", tone: "green" },
          { label: "formules", body: "Une formule commence souvent par =. Elle peut additionner, calculer une moyenne ou réutiliser des cellules pour éviter les calculs répétés à la main.", tone: "blue" },
          { label: "trier · filtrer · représenter", body: "Trier change l’ordre des données, filtrer affiche une partie du tableau et un graphique rend une comparaison plus visible quand il est bien choisi.", tone: "yellow" }
        ],
        mission: "Crée un petit tableau de résultats, calcule une moyenne, filtre une catégorie et choisis un graphique qui répond à une question précise.",
        recap: ["Une cellule a une adresse", "Une formule commence par =", "Trier n’efface pas les données", "Un graphique doit répondre à une question"],
        quiz: { question: "Quelle écriture ressemble à une formule de tableur ?", options: ["SOMME(A1:A5)", "=SOMME(A1:A5)", "A1:A5 = SOMME"], answer: 1, explanation: "Dans un tableur, une formule commence par le signe =." }
      },
      {
        number: 14, title: "Le binaire et ASCII", command: "decode_bits", question: "Comment un ordinateur représente-t-il des nombres et du texte avec seulement deux états ?",
        intro: "Les ordinateurs utilisent des états électriques simples, souvent représentés par 0 et 1. Le binaire permet de coder nombres, caractères et bien d’autres informations.",
        concepts: [
          { label: "bit et octet", body: "Un bit vaut 0 ou 1. Huit bits forment un octet. Les suites de bits servent à représenter des valeurs selon une convention.", tone: "green" },
          { label: "valeur de position", body: "En binaire, chaque position correspond à une puissance de deux. On additionne les positions marquées par 1 pour retrouver une valeur décimale.", tone: "blue" },
          { label: "ASCII et Unicode", body: "Des tables de codage associent des nombres à des caractères. ASCII est historique ; Unicode permet de représenter beaucoup plus de langues et de symboles.", tone: "yellow" }
        ],
        mission: "Décode un petit nombre binaire, encode une initiale avec une table fournie et explique pourquoi une convention de codage est nécessaire.",
        recap: ["Un bit est 0 ou 1", "8 bits = 1 octet", "Le binaire utilise les puissances de deux", "Les caractères suivent une table de codage"],
        quiz: { question: "Combien de bits composent un octet ?", options: ["2", "8", "16"], answer: 1, explanation: "Un octet est composé de huit bits." }
      },
      {
        number: 15, title: "Algorithmique avancée", command: "logic_flow", question: "Comment organiser une solution avant de programmer ?",
        intro: "Un logigramme rend visibles les étapes, les choix et les répétitions d’un algorithme. Il aide à raisonner avant d’écrire du code.",
        concepts: [
          { label: "formes et flèches", body: "Ovale : début ou fin. Rectangle : action. Parallélogramme : entrée ou sortie. Losange : question. Les flèches rendent le chemin de lecture explicite.", tone: "green" },
          { label: "variables et conditions", body: "Une variable garde une valeur qui peut changer. Une condition choisit une suite d’actions selon une réponse vraie ou fausse ; ET, OU et NON combinent des critères.", tone: "blue" },
          { label: "boucles", body: "POUR sert lorsque le nombre de répétitions est connu. TANT QUE répète une action tant qu’une condition reste vraie ; il faut prévoir une sortie.", tone: "yellow" }
        ],
        mission: "Dessine le logigramme d’un distributeur : vérifier le montant, vérifier le stock, donner la boisson, éventuellement rendre la monnaie, puis revenir à l’attente du prochain client.",
        recap: ["Les formes ont un rôle précis", "Un losange a des sorties clairement nommées", "ET, OU et NON précisent une condition", "Une boucle doit pouvoir s’arrêter"],
        quiz: { question: "Quelle boucle choisit-on lorsque le nombre de répétitions est connu à l’avance ?", options: ["POUR", "TANT QUE", "SI"], answer: 0, explanation: "La boucle POUR est adaptée à un nombre défini de répétitions, par exemple afficher dix niveaux." }
      },
      {
        number: 16, title: "Programmer avec Scratch", command: "build_test_fix", question: "Comment transformer un algorithme en programme qui fonctionne ?",
        intro: "Scratch permet d’assembler des blocs pour traduire une idée en programme. On programme, on teste, on repère un bug et on améliore.",
        concepts: [
          { label: "blocs", body: "Les blocs d’événements, mouvements, apparence, contrôle et capteurs composent une suite d’instructions exécutable.", tone: "green" },
          { label: "variables et contrôle", body: "Un score, un nombre de vies ou un niveau peuvent être stockés dans des variables. Conditions et boucles donnent un comportement dynamique au programme.", tone: "blue" },
          { label: "débogage", body: "Déboguer consiste à observer un comportement inattendu, isoler l’étape qui pose problème, corriger puis retester avec plusieurs cas.", tone: "yellow" }
        ],
        mission: "Programme un mini-jeu : le joueur commence avec trois vies ; après un événement, il perd une vie ; tant que les vies sont supérieures à zéro, la partie continue ; à zéro, le jeu affiche « Game Over ».",
        recap: ["Un programme traduit un algorithme", "Les variables mémorisent l’état du jeu", "Les conditions choisissent une action", "Tester et déboguer font partie de la programmation"],
        quiz: { question: "Quand faut-il afficher « Game Over » dans un jeu avec une variable vies ?", options: ["Quand vies est égale à 0", "Dès que le jeu commence", "Après chaque mouvement"], answer: 0, explanation: "Le jeu peut continuer tant que le nombre de vies est supérieur à zéro. Il affiche Game Over lorsque vies atteint zéro." }
      }
    ]
  }
};
