<!-- Banner Image -->
<div align="center">
  <img src="./assets/fewinfos-banner.png" alt="Willkommen bei FEWINFOS Contribution - GitHub Repository Statistik-Widget" width="100%">
</div>

📦 GitHub Repository Statistik-Widget

Ein Open-Source, vollständig clientseitiges Tool, das Echtzeit-GitHub-Repository-Statistiken in einem interaktiven und anpassbaren Format visualisiert – perfekt für Entwickler, Open-Source-Maintainer und Portfolio-Ersteller.

🎯 Ziel

Dieses Widget verwendet die GitHub REST API, um verschiedene Metadaten und Einblicke in jedes öffentliche GitHub-Repository abzurufen und anzuzeigen. Es funktioniert vollständig im Browser ohne Backend oder Authentifizierung.

✨ Funktionen

1. 🔄 Echtzeit-Datenabruf über die GitHub REST API
2. ⭐ Zeigt Sterne, Forks, Beobachter, Issues und Pull Requests an
3. 👥 Visualisiert Top-Mitwirkende mit Avataren und Commit-Zahlen
4. 📊 Zeigt verwendete Sprachen mit interaktiven Diagrammen
5. 📅 Zeigt das Erstellungsdatum des Repositorys und die letzte Aktualisierungszeit an
6. 📜 Zeigt Lizenzinformationen an
7. 🎨 Saubere, responsive und anpassbare Benutzeroberfläche
8. 💻 Funktioniert direkt in jedem Browser (kein Server-Setup erforderlich)
9. 🧩 Leicht in Websites oder README.md-Dateien einbettbar
10. 📈 Optionale Visualisierungen über Chart.js

🧱 Technologie-Stack

1. HTML – Struktur und Layout
2. CSS – Styling und Responsivität
3. JavaScript – Logik und API-Handhabung
4. GitHub REST API – Datenquelle
5. Chart.js – Zum Rendern von Graphen und Diagrammen (optional)

📊 Verfügbare Widgets

### 🔍 Repository-Statistiken

1. ⭐ Sterne / 🍴 Forks / 👁️ Beobachter-Zähler
2. 📅 Erstellungs- & letztes Aktualisierungsdatum des Repositorys
3. 📜 Anzeige des Lizenztyps
4. 📊 Sprachnutzung (Kreis-, Balken-, Ringdiagramm)
5. 📦 Abhängigkeitsgraph (npm, pip, etc.)
6. 📈 Commit-Aktivitäts-Heatmap
7. 🕐 Durchschnittliche PR-Merge-Zeit
8. 🧵 Aufschlüsselung des Issue-Status (Offen / Geschlossen / Angeheftet)

👥 Mitwirkenden-Widgets

1. 👥 Top-Mitwirkende (Avatare + Commit-Zahlen)
2. 📊 Beiträge nach Wochentag
3. 🗺️ Standortkarte der Mitwirkenden (öffentliche Daten)
4. ⏱️ Neueste Mitwirkende (letzte 7 / 30 Tage)
5. 📈 Beiträge im Zeitverlauf (gestapeltes Flächendiagramm)

📊 Graphenbasierte Widgets

1. 📊 Radardiagramm der Repo-Gesundheit (Sterne, Forks, PRs, Issues)
2. 📉 Liniendiagramm für Stern-/Fork-Wachstumstrends
3. 🍩 Ringdiagramm für die Sprachnutzung
4. 📈 Flächendiagramm für Issue-/PR-Trends
5. 📆 Kalender-Heatmap im GitHub-Stil

⚙️ DevOps & CI/CD-Widgets

1. 🚦 GitHub Actions CI/CD-Status-Badge
2. 🧪 Code-Coverage-Badge (Codecov, Coveralls)
3. 🔄 Widget für den letzten Workflow-Lauf
4. 🛠️ Build-Verlaufs-Zeitleiste (Erfolg/Misserfolg visuell)

📌 Issue- & PR-Widgets

1. 📋 Angeheftete Issues oder Diskussionen
2. 🔍 Issue-Label-Wortwolke
3. 📬 PR-Merge-Status/Verhältnis-Tracker
4. 📈 Issue-Stimmungsindikator (basiert auf Schlüsselwörtern)

🧩 Sonstige Widgets

1. 📌 Lesezeichen/Favoriten-Repo-Button
2. 🔍 Inline-Suche zur Eingabe anderer Repositories
3. 🧠 KI-gestützte Commit-Zusammenfassung (optional)
4. 🔗 Widget für verwandte Repositories
5. 🪄 Widget als iframe / HTML-Embed exportieren

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

1. Pushen Sie Ihr Projekt auf GitHub
2. Gehen Sie zu Settings → Pages
3. Wählen Sie den Branch: main und den Ordner: / (root)
4. Ihr Widget wird unter folgender Adresse gehostet:
   https://yourusername.github.io/github-repo-stats-widget/

