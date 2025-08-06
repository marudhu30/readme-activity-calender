<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Welcome to FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

📦 Widget de statistiques de dépôt GitHub

Un outil open-source, entièrement côté client, qui visualise les statistiques en temps réel des dépôts GitHub dans un format interactif et personnalisable — parfait pour les développeurs, les mainteneurs de projets open-source et les créateurs de portfolios.

🎯 Objectif

Ce widget utilise l'API REST de GitHub pour récupérer et afficher diverses métadonnées et informations sur n'importe quel dépôt public GitHub. Il fonctionne entièrement dans le navigateur sans backend ni authentification requise.

✨ Fonctionnalités

    🔄 Récupération de données en temps réel via l'API REST de GitHub

    ⭐ Affiche les étoiles, les forks, les observateurs, les problèmes et les pull requests

    👥 Visualise les principaux contributeurs avec leurs avatars et le nombre de commits

    📊 Montre les langages utilisés avec des graphiques interactifs

    📅 Affiche la date de création du dépôt et l'heure de la dernière mise à jour

    📜 Affiche les informations de licence

    🎨 Interface utilisateur propre, réactive et personnalisable

    💻 Fonctionne directement dans n'importe quel navigateur (aucune configuration de serveur)

    🧩 Facilement intégrable dans des sites web ou des fichiers README.md

    📈 Visualisations optionnelles via Chart.js

🧱 Stack technologique

    HTML – Structure et mise en page

    CSS – Style et réactivité

    JavaScript – Logique et gestion de l'API

    API REST de GitHub – Source de données

    Chart.js – Pour le rendu des graphiques et des diagrammes (optionnel)

📊 Widgets disponibles

🔍 Statistiques du dépôt

    ⭐ Compteur d'étoiles / 🍴 de forks / 👁️ d'observateurs

    📅 Date de création et de dernière mise à jour du dépôt

    📜 Affichage du type de licence

    📊 Utilisation des langages (diagramme circulaire, à barres, en anneau)

    📦 Graphe des dépendances (npm, pip, etc.)

    📈 Carte thermique de l'activité des commits

    🕐 Temps moyen de fusion des PR

    🧵 Répartition du statut des problèmes (Ouvert / Fermé / Épinglé)

👥 Widgets des contributeurs

    👥 Principaux contributeurs (avatars + nombre de commits)

    📊 Contributions par jour de la semaine

    🗺️ Carte de localisation des contributeurs (données publiques)

    ⏱️ Contributeurs récents (7 / 30 derniers jours)

    📈 Contributions au fil du temps (graphique en aires empilées)

📊 Widgets basés sur des graphiques

    📊 Diagramme radar de la santé du dépôt (étoiles, forks, PR, problèmes)

    📉 Graphique linéaire pour les tendances de croissance des étoiles/forks

    🍩 Diagramme en anneau pour l'utilisation des langages

    📈 Graphique en aires pour les tendances des problèmes/PR

    📆 Carte thermique de calendrier de style GitHub

⚙️ Widgets DevOps & CI/CD

    🚦 Badge de statut CI/CD de GitHub Actions

    🧪 Badge de couverture de code (Codecov, Coveralls)

    🔄 Widget de la dernière exécution du workflow

    🛠️ Chronologie de l'historique des builds (visuel succès/échec)

📌 Widgets de problèmes & PR

    📋 Problèmes ou discussions épinglés

    🔍 Nuage de mots des étiquettes de problèmes

    📬 Suivi du statut/ratio de fusion des PR

    📈 Indicateur de sentiment des problèmes (basé sur des mots-clés)

🧩 Widgets divers

    📌 Bouton pour marquer/mettre en favori un dépôt

    🔍 Recherche en ligne pour entrer d'autres dépôts

    🧠 Résumé de commit alimenté par l'IA (optionnel)

    🔗 Widget des dépôts associés

    🪄 Exporter le widget en tant qu'iframe / embed HTML

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

    Poussez votre projet sur GitHub

    Allez dans Settings → Pages

    Choisissez la branche : main et le dossier : / (root)

    Votre widget sera hébergé à l'adresse :
    https://yourusername.github.io/github-repo-stats-widget/**
