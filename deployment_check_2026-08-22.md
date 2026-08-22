# Vérification Cloudflare Pages — 22 août 2026

Le dépôt GitHub `salah-manssy/salah-manssy` contient la branche `main` pour le code source et la branche `cloudflare-pages` pour la version statique autonome.

L’URL affichée dans le tableau de bord Cloudflare pour le projet direct est `https://salah-manssy.pages.dev`.

Lors du contrôle public, cette URL a répondu par une erreur **522 — Connection timed out** : le navigateur et le réseau Cloudflare fonctionnaient, mais l’hôte ne répondait pas. Le déploiement direct n’est donc pas validé.

La suite recommandée est de créer un projet Cloudflare Pages connecté au dépôt GitHub, avec la branche de production `cloudflare-pages`, le préréglage `None`, la commande de build `exit 0` et le dossier de sortie `.`.

## Déploiement GitHub Pages synchronisé

Le projet Cloudflare Pages `stem` a ensuite été créé à partir de la branche GitHub `cloudflare-pages`.

L’adresse de production est `https://stem-35r.pages.dev`.

Le contrôle public du 22 août 2026 a confirmé que la page d’accueil charge correctement, avec les illustrations locales et les deux entrées `1ère année` et `2ème année`. L’accès direct à `https://stem-35r.pages.dev/annee/1` a également chargé correctement le premier chapitre et sa navigation latérale ; la règle de routage SPA est donc fonctionnelle.

## Renommage Cloudflare

Le projet Pages a été renommé dans le tableau de bord Cloudflare, mais l’adresse par défaut `stem-35r.pages.dev` est restée active. La tentative d’accès à `salah-manssy.pages.dev` a échoué par résolution DNS, ce qui confirme que le domaine `.pages.dev` généré au premier déploiement ne se renomme pas automatiquement.

La migration vers un nouveau projet Pages nommé `salah-manssy` a été engagée seulement après conservation du projet STEM comme solution de secours fonctionnelle.
