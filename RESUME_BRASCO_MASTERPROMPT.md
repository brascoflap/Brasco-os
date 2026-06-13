# RESUME BRASCO — CLEAN WORK MASTERPROMPT

Gebruik deze prompt aan het begin van elke nieuwe AI-chat.

---

## STARTPROMPT

RESUME BRASCO.

Je helpt Fabian verder met het project Brasco OS.

Belangrijk: gebruik geen oude aannames uit eerdere chats. Werk alleen met deze masterprompt en met de huidige bestanden in de projectmap.

---

## ABSOLUTE REGELS

- Werk clean.
- Gebruik geen oude chatgeschiedenis als bron.
- Gebruik geen D:data.
- Gebruik geen Fedora-serverplan.
- Gebruik geen andere pc of oude transferdocumenten.
- Gebruik geen oude projectmappen.
- Werk alleen in deze map:

/Users/brascoholding/brasco-os

- Niet werken in:

/Users/brascoholding/Library/Application Support/brasco-os

Dat is Electron appdata/cache, geen sourcecode.

- Exact één stap tegelijk.
- Eerst kijken, dan wijzigen.
- Geen aannames.
- Geen bestanden verwijderen zonder expliciete toestemming.
- Geen dubbele bestanden of dubbele logica maken.
- Geen externe server aannemen.
- Geen stappen opnieuw laten uitvoeren als ze al bevestigd zijn.
- Ga verder vanaf de laatst bevestigde status.
- Vraag na elke wijziging om screenshot of terminal-output.
- Stop na elke stap.

---

## PROJECT

Brasco OS is een local-first desktop systeem.

Techniek:

- React = interface
- Electron = desktop-app
- Vite = lokale ontwikkelomgeving
- Node/npm = lokale ondersteuning
- Data = later lokaal koppelen

Projectmap:

/Users/brascoholding/brasco-os

Belangrijke bestanden:

- AGENTS.md
- BRASCO_BACKUP.md
- RESUME_BRASCO_MASTERPROMPT.md
- main.js
- package.json
- vite.config.js
- index.html
- src/App.jsx
- src/App.css
- src/main.jsx
- src/components/NowPanel.jsx
- src/components/StatusPanel.jsx
- src/data/tasks.js
- src/engine/priorityEngine.js

---

## HOOFDCONCEPT

Brasco OS bestaat uit vijf hoofdrollen:

- Commandor
- Executor
- Watcher
- Specialist
- System

Betekenis:

- Commandor = centrale opdrachtlaag, zoekbalk, beslisser en aansturing
- Executor = voert taken uit, verwerkt acties, maakt backups en werkt opdrachten af
- Watcher = bewaakt status, urgentie, planning, fouten en systeemgezondheid
- Specialist = vakgerichte hulp voor code, research, sales, design, analyse en documenten
- System = instellingen, bestanden, logs, backup, app-status en technische controle

Niet blind vereenvoudigen. Het systeem mag professioneel en krachtig zijn, maar moet stap voor stap gebouwd worden.

---

## BEVESTIGDE STATUS

Deze zaken zijn al uitgevoerd en mogen niet opnieuw gevraagd worden:

- echte projectmap gevonden: /Users/brascoholding/brasco-os
- oude app-cache map herkend en genegeerd: /Users/brascoholding/Library/Application Support/brasco-os
- AGENTS.md backup gemaakt: AGENTS_BACKUP_BEFORE_COMMANDOR.md
- AGENTS.md opnieuw ingesteld op Commandor / Executor / Watcher / Specialist / System
- BRASCO_BACKUP.md gecontroleerd
- BRASCO_BACKUP.md bijgewerkt naar actuele status
- src/App.jsx backup gemaakt: src/App_BACKUP_BEFORE_COMMANDOR.jsx
- src/App.jsx vervangen door nieuwe Build Modus structuur
- Build Modus gecontroleerd via screenshot
- Commandor zichtbaar
- Executor zichtbaar
- Watcher zichtbaar
- Specialist zichtbaar
- System zichtbaar
- NowPanel werkt
- StatusPanel werkt
- Vite dev server werkt op http://localhost:5173/
- Electron opent correct wanneer Vite draait
- build:web werkt
- Linux/Fedora x64 AppImage gemaakt
- Linux ARM64 AppImage gemaakt
- rpm build geprobeerd maar niet voltooid door ontbrekende package metadata
- projectbroncode gezipt naar Toshi750

---

## HUIDIGE UI

Startscherm:

- Brasco OS
- SCHONE DENK MODUS
- BRASCO BUILD MODUS

Build Modus:

Sidebar:

- Commandor
- Executor
- Watcher
- Specialist
- System
- Maak Backup

Main:

- Commandor kaart met opdrachtveld en uitvoerknop
- Executor kaart met ready-status
- Watcher gebied met prioriteiten via NowPanel
- StatusPanel met Projects, Domains en Tasks
- Specialist kaart met rollen Code, Research, Sales en Design
- System local-first melding

---

## HUIDIGE TECHNISCHE STATUS

- app start via Vite + Electron: OK
- Vite dev server: OK op http://localhost:5173/
- Electron: OK wanneer Vite draait
- npm run dev: OK
- npm start: OK als Vite draait
- npm run build:web: OK
- npm run build:linux:appimage:x64: OK
- npm run build:linux:appimage:arm64: OK
- npm run build:linux rpm: niet voltooid door ontbrekende metadata

Belangrijk:

npm start alleen gebruiken als npm run dev al draait in een ander Terminal-venster.

Correcte dev-start:

Terminal 1:

cd "/Users/brascoholding/brasco-os"
npm run dev

Terminal 2:

cd "/Users/brascoholding/brasco-os"
npm start

---

## DEELBESTANDEN VOOR REVIEW

Fedora/Linux x64 AppImage:

/Users/brascoholding/brasco-os/dist/Brasco OS-1.0.0.AppImage

Linux ARM64 AppImage:

/Users/brascoholding/brasco-os/dist/Brasco OS-1.0.0-arm64.AppImage

Project-ZIP op externe schijf:

/Volumes/Toshi750/brasco-os-project.zip

De ZIP bevat broncode zonder:

- node_modules
- dist
- .git

Na uitpakken kan iemand draaien met:

npm install
npm run dev

Of desktop starten met:

npm install
npm run dev
npm start

---

## OPENSTAANDE TAKEN

De App.jsx conceptstap is klaar. Niet opnieuw doen.

Volgende inhoudelijke fase:

1. echte lokale data inventariseren
2. bepalen welke data Brasco OS als eerste moet lezen
3. data read-only koppelen
4. data tonen in Watcher/System
5. daarna pas schrijfacties toevoegen
6. daarna backups/logs automatiseren

Nog open:

- Commandor input koppelen aan echte lokale acties
- Executor acties definiëren
- Watcher status uitbreiden met echte lokale data
- Specialist rollen functioneel maken
- System uitbreiden met logs, bestanden, backupstatus en appstatus

---

## VOLGENDE STAP

De volgende echte stap is:

lokale data inventariseren

Niet meteen bouwen.

Eerst read-only kijken welke lokale data of bestanden gekoppeld moeten worden aan Brasco OS.

Gebruik als outputformat:

STAP X
WAAR:
WAT:
HOE:
CHECK:
STOP

---

## WERKSTIJL

- Leg volledig uit wat er gebeurt.
- Wees niet laks of te kort.
- Herhaal geen afgeronde stappen.
- Houd bij wat al bevestigd is.
- Vraag geen screenshot/controle opnieuw als die al is bevestigd.
- Geef steeds één concrete stap.
- Na terminal-output of screenshot pas verder.
