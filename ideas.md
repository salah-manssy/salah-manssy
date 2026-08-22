# Directions de design — Cours de Numérique FMTTN

## Trois pistes explorées

### 1. Terminal pédagogique vivant

Une interface de cours qui transforme le code visuel des présentations en un véritable environnement d’apprentissage : lisible, structuré et rassurant plutôt qu’un simple décor cyber. Chaque concept devient une mission courte, avec une illustration, une explication et une vérification.

**Probabilité : 0,07**

### 2. Carnet de laboratoire numérique

Une approche plus éditoriale, inspirée d’un cahier d’expériences : blocs de notes, schémas, hypothèses et comptes rendus. La palette Terminal / Code servirait de balisage scientifique, avec une place plus importante laissée à la prise de notes.

**Probabilité : 0,03**

### 3. Dossier d’enquête réseau

Une navigation conçue comme une investigation progressive : indices, cartes de systèmes et mini-défis. L’élève avance d’une découverte à la suivante, avec un fil narratif plus marqué autour des objets numériques du quotidien.

**Probabilité : 0,09**

## Direction retenue : Terminal pédagogique vivant

### Mouvement de design

La direction adopte un **terminal éditorial pédagogique** : une esthétique issue des environnements de développement et des interfaces de diagnostic, adoucie pour rester claire et adaptée à des élèves de 13 ans. Elle ne cherche pas à imiter un écran d’ordinateur au point de devenir décorative ; elle utilise ses codes pour rendre la progression du cours visible.

### Principes directeurs

1. **Une idée à la fois.** Chaque écran correspond à une micro-notion claire, directement reliée à une page ou une double-page du syllabus.
2. **Voir avant de nommer.** Une illustration, un schéma ou une situation du quotidien prépare le concept avant sa définition.
3. **Comprendre, puis vérifier.** Une explication se termine toujours par une question courte, un mini-défi ou une application.
4. **Progresser sans se perdre.** Le chapitre affiche en permanence où l’élève se situe, ce qu’il vient de voir et ce qu’il doit savoir faire.

### Philosophie des couleurs

La palette impose la continuité avec les slides : `#0B0E14` comme fond profond et stable ; `#E6E6E6` pour le texte principal ; `#27C93F` pour les notions clés, actions validées et réponses justes ; `#58A6FF` pour les explications, schémas et définitions ; `#FFBD2E` pour les repères et alertes d’attention ; `#FF7B72` pour les pièges, erreurs fréquentes et contre-exemples. Les couleurs portent une fonction pédagogique constante, sans multiplier les variantes.

### Paradigme de mise en page

La navigation principale est une **colonne de progression latérale**, analogue à la structure du site de référence. Le contenu se déroule dans une lecture verticale par séquences : ouverture du chapitre, mission, blocs de notion, exemples, consolidation et bilan. Les sections alternent entre bandeaux explicatifs, compositions asymétriques et schémas horizontaux ; elles ne sont jamais une succession uniforme de cartes.

### Éléments signatures

Les motifs permanents sont les suivants : des **fenêtres de terminal** à trois voyants pour encadrer les schémas ; une **grille technique bleue très discrète** en arrière-plan ; et des **étiquettes de commande** en Fira Code pour les titres de section (`>_ mission`, `>_ à_retenir`, `>_ défi`).

### Philosophie d’interaction

Les interactions servent la compréhension : sommaire qui conduit vers une section, question à correction immédiate et révélation ponctuelle d’un indice ou d’une réponse expliquée. Elles ne doivent jamais faire dépendre le cours d’un clic ni masquer le contenu fondamental présent sur papier.

### Animation

Les transitions sont courtes, sobres et utiles : apparition progressive des blocs à l’entrée dans le viewport, barres de progression fluides et voyants lumineux à faible intensité. Les animations ne dépassent pas 300 ms, respectent `prefers-reduced-motion` et ne sont jamais nécessaires pour comprendre une notion. Les clignotements utilisés dans les présentations restent exceptionnels sur le site, réservés à un statut ou un curseur de terminal.

### Système typographique

**Fira Code** est la police distinctive, utilisée pour les commandes, mots-clés, titres courts, libellés et données techniques. Une sans-serif de lecture très lisible, par exemple **IBM Plex Sans**, porte les explications et les questions. Les titres de chapitre restent larges et expressifs, mais les définitions, consignes et réponses sont toujours optimisées pour une lecture de 13 ans.

### Essence de marque

**Un cours de numérique qui permet aux élèves de comprendre, expérimenter et vérifier ce qu’ils utilisent chaque jour, sans perdre le fil.**

La personnalité est **claire**, **curieuse** et **structurée**.

### Voix de marque

Les titres sont directs et concrets ; les consignes accompagnent l’élève sans le infantiliser. Le ton évite les formulations abstraites ou les promesses génériques.

> « Ouvre le capot virtuel : voici ce qui fait travailler ton appareil. »

> « Teste ton raisonnement : quelle réponse peux-tu justifier ? »

### Logotype et symbole

Le symbole de marque est un **curseur de terminal inclus dans une puce électronique minimale**, sans texte : il évoque à la fois l’écriture du code et le fonctionnement concret de la machine. Le mot-signe est composé en Fira Code avec une construction volontairement éditoriale, jamais avec une police par défaut.

### Couleur signature

Le vert signal **`#27C93F`** devient la couleur immédiatement reconnaissable du cours : elle sert à guider, valider et mettre en lumière les idées essentielles.

## Décision de méthode

Le brouillon de site fourni est une référence de **direction** : navigation latérale, progression narrative, schémas codés, vocabulaire de terminal et QCM à correction expliquée. La future version ne le copiera pas à l’identique ; elle l’améliorera en alignant strictement chaque section avec le syllabus imprimé, en stabilisant le gabarit de chapitre et en concevant les contenus des deux années à partir d’une même charte.

## Style Decisions

- Chaque parcours conserve une **colonne de progression latérale visible** : numéro et titre des chapitres, séquence active, position dans l’année et statut de progression.
- Chaque chapitre débute par une **carte de départ terminalisée** : situation-question, notion clé, action de l’élève et légende fonctionnelle des couleurs avant les définitions détaillées.
- Le symbole curseur-puce et la logique de mot-signe Fira Code restent présents sur les pages de cours afin de prolonger la marque au-delà de la page de garde.
- Le code couleur devient explicitement pédagogique : vert pour idée clé ou validation, bleu pour explication, jaune pour mission ou attention, rouge pour piège ou erreur à éviter.
