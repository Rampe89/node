# CyberDefense Lab 🧪

## Beschreibung
Das **CyberDefense Lab** bietet praxisnahe Einblicke in zentrale IT-Sicherheitskonzepte. Es richtet sich an Lernende und Lehrende, die ein tieferes Verständnis für technische Sicherheitsprinzipien entwickeln möchten. In interaktiven Aufgaben können Angriffe wie Phishing, Social Engineering oder Passwortschwächen nachvollzogen und technische Schutzmaßnahmen wie Hashing, Salting und regelmäßige Updates erlernt werden. Es handelt sich ausschließlich um Simulationen - es werden keine echte Angriffe ausgeführt.

**Enthaltene Labs:**
- **Phishing-Quiz:** Lernen, gefälschte E-Mails zu identifizieren und sich vor Phishing zu schützen.
- **Brute-Force-Simulator:** Demonstriert, wie schwache Passwörter durch Brute-Force-Angriffe kompromittiert werden können.
- **Social-Engineering-Simulation:** Praktische Szenarien, um Angriffe durch Täuschung zu erkennen und abzuwehren.
- **Passwortsicherheit:** Erstellung sicherer Passwörter und Analyse von Passwortmanagern.
- **Updates und Patches:** Die Bedeutung regelmäßiger Sicherheitsupdates.
- **Gobuster-Simulation:** Suchen und Aufdecken von Schwachstellen in versteckten Verzeichnissen.
- **SQL-Injection:** Auswirkungen manipulierter Eingaben in einer Datenbank und wie eine sichere Abfrage diese Wirkung stoppt.
- **Hashing Lab**: Das Hashing-Lab bietet die Möglichkeit, Passwörter zu entschlüsseln und den Schutz durch Salt zu erproben.
- **Cookies**: Auslesen von Cookie-Inhalten mit Standard-Browser-Tools
- **geheime Eastereggs:** Kontaktformular, verstecke Directories

## Voraussetzungen
Um das Lab lokal auszuführen oder zu hosten, benötigst du:
- **Node.js** (Version 16 oder höher)
- **npm** (Node Package Manager)
- Optional:
  - **GitHub-Account** (zum Klonen des Repositories)
  - **Render-Account** (für kostenloses Hosting)

---

## Lokale Nutzung

### 1. Repository klonen
1. Öffne das Terminal oder eine Git-Bash.
2. Führe folgenden Befehl aus, um das Repository zu klonen: `git clone https://github.com/Rampe89/Cyberdefenselab.git`
3. Navigiere ins Projektverzeichnis: `cd Cyberdefenselab`

### 2. Abhängigkeiten installieren
1. Stelle sicher, dass Node.js und npm installiert sind.
2. Installiere die benötigten Pakete: `npm install`

### 3. Lokalen Server starten
1. Starte den Server mit: `node server.js`
2. Öffne deinen Browser und rufe `http://localhost:3000` auf.

---

## Hosting mit Render

### 1. Repository hochladen
1. Forke dieses Repository oder lade den Code direkt in dein GitHub-Konto hoch.
2. Melde dich bei [Render](https://render.com/) an.

### 2. Neues Webservice-Projekt erstellen
1. Klicke auf **"New Web Service"**.
2. Verbinde dein GitHub-Konto mit Render und wähle dieses Repository aus.
3. Konfiguriere das Webservice:
- **Environment:** Node.js
- **Start Command:** `node server.js`
- **Port:** `3000` (standardmäßig)

4. Klicke auf **"Deploy"**, um dein Projekt zu starten.

### 3. Zugriff
Render generiert eine öffentliche URL, über die das Lab zugänglich ist.

---

## Ergänzungen
### Flags und Achievements
- Jede Lab-Aufgabe ist mit einer Flag verknüpft, die korrekt eingegeben werden muss.
- Erfolgreich abgeschlossene Aufgaben schalten **Achievements** frei, die im Hauptmenü angezeigt werden.

---

## Feedback und Beiträge
Fragen oder Verbesserungsvorschläge? Erstelle gerne ein Issue oder einen Pull-Request!

---

## Haftungsauschluss & Lizenz
Das CyberDefense Lab wurde sorgfältig entwickelt, um ein sicheres Lernumfeld zu bieten. Dennoch wird keine Haftung für Schäden übernommen, die durch die unsachgemäße Nutzung des Labs oder der erlernten Techniken entstehen könnten. Die Nutzung des Labs erfolgt auf eigene Verantwortung.
Dieses Projekt steht unter der MIT-Lizenz.

