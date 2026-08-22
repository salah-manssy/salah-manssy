# Déploiement — Cours de Numérique FMTTN

Ce dossier est une version **statique et autonome** du portail pédagogique. Les images sont déjà incluses dans `assets/` et les routes des deux parcours sont prévues via `_redirects`.

## Dépôt immédiat dans Cloudflare Pages

1. Ouvrez le tableau de bord Cloudflare et allez dans **Workers & Pages**.
2. Cliquez sur **Create application**, puis **Pages** et choisissez **Direct Upload**.
3. Déposez le contenu de ce dossier, ou l’archive ZIP fournie si l’interface l’accepte.
4. Donnez un nom au projet, par exemple `cours-numerique-fmttn`, puis confirmez le déploiement.

Le site démarre sur la page de garde. Les liens vers `/annee/1` et `/annee/2` restent utilisables lors d’un rafraîchissement grâce au fichier `_redirects`.

## Synchronisation automatique plus tard

Pour automatiser les mises à jour, créez un projet Pages à partir d’un dépôt GitHub. Réglages :

| Réglage | Valeur |
|---|---|
| Framework preset | None |
| Build command | Aucun |
| Build output directory | `/` (si vous importez ce dossier compilé) |

Pour une synchronisation depuis le code source, utilisez `pnpm build` comme commande de build et `dist/public` comme répertoire de sortie.
