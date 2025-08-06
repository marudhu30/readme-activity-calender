<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Welcome to FEWINFOS Contribution - GitHub Repository Stats Widget" width="100%">
</div>

📦 GitHub Repository Statistik-Widget

Ein Open-Source, vollständig clientseitiges Tool, das Echtzeit-GitHub-Repository-Statistiken in einem interaktiven und anpassbaren Format visualisiert – perfekt für Entwickler, Open-Source-Maintainer und Portfolio-Ersteller.

🎯 Ziel

Dieses Widget verwendet die GitHub REST API, um verschiedene Metadaten und Einblicke in jedes öffentliche GitHub-Repository abzurufen und anzuzeigen. Es funktioniert vollständig im Browser ohne Backend oder Authentifizierung.

✨ Funktionen

    🔄 Echtzeit-Datenabruf über die GitHub REST API

    ⭐ Zeigt Sterne, Forks, Beobachter, Issues und Pull Requests an

    👥 Visualisiert Top-Mitwirkende mit Avataren und Commit-Zahlen

    📊 Zeigt verwendete Sprachen mit interaktiven Diagrammen

    📅 Zeigt das Erstellungsdatum des Repositorys und die letzte Aktualisierungszeit an

    📜 Zeigt Lizenzinformationen an

    🎨 Saubere, responsive und anpassbare Benutzeroberfläche

    💻 Funktioniert direkt in jedem Browser (kein Server-Setup erforderlich)

    🧩 Leicht in Websites oder README.md-Dateien einbettbar

    📈 Optionale Visualisierungen über Chart.js

🧱 Technologie-Stack

    HTML – Struktur und Layout

    CSS – Styling und Responsivität

    JavaScript – Logik und API-Handhabung

    GitHub REST API – Datenquelle

    Chart.js – Zum Rendern von Graphen und Diagrammen (optional)

📊 Verfügbare Widgets

🔍 Repository-Statistiken

    ⭐ Sterne / 🍴 Forks / 👁️ Beobachter-Zähler

    📅 Erstellungs- & letztes Aktualisierungsdatum des Repositorys

    📜 Anzeige des Lizenztyps

    📊 Sprachnutzung (Kreis-, Balken-, Ringdiagramm)

    📦 Abhängigkeitsgraph (npm, pip, etc.)

    📈 Commit-Aktivitäts-Heatmap

    🕐 Durchschnittliche PR-Merge-Zeit

    🧵 Aufschlüsselung des Issue-Status (Offen / Geschlossen / Angeheftet)

👥 Mitwirkenden-Widgets

    👥 Top-Mitwirkende (Avatare + Commit-Zahlen)

    📊 Beiträge nach Wochentag

    🗺️ Standortkarte der Mitwirkenden (öffentliche Daten)

    ⏱️ Neueste Mitwirkende (letzte 7 / 30 Tage)

    📈 Beiträge im Zeitverlauf (gestapeltes Flächendiagramm)

📊 Graphenbasierte Widgets

    📊 Radardiagramm der Repo-Gesundheit (Sterne, Forks, PRs, Issues)

    📉 Liniendiagramm für Stern-/Fork-Wachstumstrends

    🍩 Ringdiagramm für die Sprachnutzung

    📈 Flächendiagramm für Issue-/PR-Trends

    📆 Kalender-Heatmap im GitHub-Stil

⚙️ DevOps & CI/CD-Widgets

    🚦 GitHub Actions CI/CD-Status-Badge

    🧪 Code-Coverage-Badge (Codecov, Coveralls)

    🔄 Widget für den letzten Workflow-Lauf

    🛠️ Build-Verlaufs-Zeitleiste (Erfolg/Misserfolg visuell)

📌 Issue- & PR-Widgets

    📋 Angeheftete Issues oder Diskussionen

    🔍 Issue-Label-Wortwolke

    📬 PR-Merge-Status/Verhältnis-Tracker

    📈 Issue-Stimmungsindikator (basiert auf Schlüsselwörtern)

🧩 Sonstige Widgets

    📌 Lesezeichen/Favoriten-Repo-Button

    🔍 Inline-Suche zur Eingabe anderer Repositories

    🧠 KI-gestützte Commit-Zusammenfassung (optional)

    🔗 Widget für verwandte Repositories

    🪄 Widget als iframe / HTML-Embed exportieren

📂 Projektstruktur

github-repo-stats-widget/
├── index.html         # Haupt-HTML-Datei
├── style.css          # CSS-Stile
├── repo.js            # Kern-JavaScript-Logik
├── charts.js          # Logik zum Rendern von Diagrammen
├── assets/            # Symbole, Screenshots
├── README.md          # Diese Dokumentationsdatei
└── LICENSE            # MIT-Lizenz

🚀 Bereitstellung

Sie können dieses Widget auf GitHub Pages bereitstellen oder einen beliebigen statischen Hosting-Dienst wie Netlify, Vercel oder Firebase verwenden.

Bereitstellung über GitHub Pages

    Pushen Sie Ihr Projekt auf GitHub

    Gehen Sie zu Settings → Pages

    Wählen Sie den Branch: main und den Ordner: / (root)

    Ihr Widget wird unter folgender Adresse gehostet:
    https://yourusername.github.io/github-repo-stats-widget/

