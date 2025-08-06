<div align="center">
    <img src="./assets/fewinfos-banner.png" alt="Bienvenue à la contribution de FEWINFOS - Widget de statistiques de dépôt GitHub" width="100%">
</div>

📦 Widget de statistiques de dépôt GitHub

Un outil open-source, entièrement côté client, qui visualise les statistiques en temps réel des dépôts GitHub dans un format interactif et personnalisable — parfait pour les développeurs, les mainteneurs de projets open-source et les créateurs de portfolios.

🎯 Objectif

Ce widget utilise l'API REST de GitHub pour récupérer et afficher diverses métadonnées et informations sur n'importe quel dépôt public GitHub. Il fonctionne entièrement dans le navigateur sans backend ni authentification requise.

✨ Fonctionnalités

1. 🔄 Récupération de données en temps réel via l'API REST de GitHub
2. ⭐ Affiche les étoiles, les forks, les observateurs, les problèmes et les pull requests
3. 👥 Visualise les principaux contributeurs avec des avatars et des nombres de commits
4. 📊 Affiche les langages utilisés avec des graphiques interactifs
5. 📅 Affiche la date de création du dépôt et la dernière heure de mise à jour
6. 📜 Affiche les informations sur la licence
7. 🎨 Interface utilisateur propre, réactive et personnalisable
8. 💻 Fonctionne directement dans n'importe quel navigateur (aucune configuration de serveur requise)
9. 🧩 Facile à intégrer dans des sites Web ou des fichiers README.md
10. 📈 Visualisations optionnelles via Chart.js

🧱 Stack technologique

1. HTML – Structure et mise en page
2. CSS – Style et réactivité
3. JavaScript – Logique et gestion de l'API
4. API REST de GitHub – Source de données
5. Chart.js – Pour le rendu des graphiques et des diagrammes (optionnel)

📊 Widgets disponibles

🔍 Statistiques du dépôt

1. ⭐ Étoiles / 🍴 Forks / 👁️ Compteur de spectateurs
2. 📅 Date de création et dernière mise à jour du dépôt
3. 📜 Affichage du type de licence
4. 📊 Utilisation des langues (graphique circulaire, en barres, en anneau)
5. 📦 Graphique des dépendances (npm, pip, etc.)
6. 📈 Carte thermique de l'activité des commits
7. 🕐 Temps moyen de fusion des PR
8. 🧵 Répartition de l'état des problèmes (Ouvert / Fermé / Épinglé)

👥 Widgets des contributeurs

1. 👥 Principaux contributeurs (avatars + nombre de commits)
2. 📊 Contributions par jour de la semaine
3. 🗺️ Carte de localisation des contributeurs (données publiques)
4. ⏱️ Contributeurs récents (7 / 30 derniers jours)
5. 📈 Contributions au fil du temps (graphique en aires empilées)

📊 Widgets basés sur des graphiques

1. 📊 Diagramme radar de la santé du dépôt (étoiles, forks, PR, problèmes)
2. 📉 Graphique linéaire pour les tendances de croissance des étoiles/forks
3. 🍩 Diagramme en anneau pour l'utilisation des langages
4. 📈 Graphique en aires pour les tendances des problèmes/PR
5. 📆 Carte thermique de calendrier de style GitHub

⚙️ Widgets DevOps & CI/CD

1. 🚦 Badge de statut CI/CD de GitHub Actions
2. 🧪 Badge de couverture de code (Codecov, Coveralls)
3. 🔄 Widget de la dernière exécution du workflow
4. 🛠️ Chronologie de l'historique des builds (visuel succès/échec)

📌 Widgets de problèmes & PR

1. 📋 Problèmes ou discussions épinglés
2. 🔍 Nuage de mots des étiquettes de problèmes
3. 📬 Suivi du statut/ratio de fusion des PR
4. 📈 Indicateur de sentiment des problèmes (basé sur des mots-clés)

🧩 Widgets divers

1. 📌 Bouton pour marquer/mettre en favori un dépôt
2. 🔍 Recherche en ligne pour entrer d'autres dépôts
3. 🧠 Résumé de commit alimenté par l'IA (optionnel)
4. 🔗 Widget des dépôts associés
5. 🪄 Exporter le widget en tant qu'iframe / embed HTML

📂 Structure du projet

github-repo-stats-widget/
├── index.html         # Fichier HTML principal
├── style.css          # Styles CSS
├── repo.js            # Logique JavaScript principale
├── charts.js          # Logique de rendu des graphiques
├── assets/            # Icônes, captures d'écran
├── README.md          # Ce fichier de documentation
└── LICENSE            # Licence MIT

🚀 Déploiement

Vous pouvez déployer ce widget sur GitHub Pages, ou utiliser n'importe quel service d'hébergement statique comme Netlify, Vercel ou Firebase.

Déployer via GitHub Pages

1. Poussez votre projet sur GitHub
2. Allez dans Settings → Pages
3. Choisissez la branche : main et le dossier : / (root)
4. Votre widget sera hébergé à l'adresse :
   https://yourusername.github.io/github-repo-stats-widget