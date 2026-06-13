# BRASCO OS — AGENTS

## PRINCIPE

Brasco OS is een LOCAL-FIRST desktop systeem.

Techniek:
- React = interface
- Electron = desktop-app
- Vite = lokale ontwikkelomgeving
- Node = lokale ondersteuning
- Data = later lokaal koppelen

Brasco OS draait lokaal op de MacBook.

Internet is optioneel.
Notion is documentatie, niet de database.
ChatGPT is architectuur, planning en controle.
Codex schrijft code, maar bepaalt geen architectuur.
Grok kan later onderzoek doen, maar bepaalt geen architectuur.

---

## HOOFDCONCEPT

Brasco OS werkt met vijf kernrollen:

- Commandor
- Executor
- Watcher
- Specialist
- System

Betekenis:

Commandor = centrale opdrachtlaag, zoekbalk, beslisser en aansturing.  
Executor = voert taken uit, verwerkt acties, maakt backups en werkt opdrachten af.  
Watcher = bewaakt status, urgentie, planning, fouten en systeemgezondheid.  
Specialist = vakgerichte hulp voor code, research, sales, design, analyse en documenten.  
System = instellingen, bestanden, logs, backup, app-status en technische controle.

Dit concept is leidend.

Niet terug naar een kale vierknoppen-app.
Niet terug naar alleen Projects / Domains / Clients als hoofdstructuur.
Projects, Domains, Clients, Files en Tasks zijn datalagen binnen het systeem, geen losse hoofdarchitectuur.

---

## WERKWIJZE VERPLICHT

ALTIJD:

- Exact 1 stap tegelijk
- Geen meerdere stappen tegelijk
- Eerst kijken, dan wijzigen
- Geen aannames
- Geen bestanden verwijderen zonder expliciete toestemming
- Geen dubbele bestanden maken
- Geen dubbele logica maken
- Geen grote herbouw zonder opdracht
- Geen externe server aannemen
- Geen Fedora of D:data aannemen
- Alleen werken in deze bestaande brasco-os projectmap

Na elke stap:

- Screenshot vragen
- Screenshot controleren
- Daarna pas volgende stap

---

## OUTPUT FORMAT

Gebruik altijd:

STAP X

WAAR:
(bestand)

WAT:
(doel)

HOE:
(volledige vervangbare inhoud of exact commando)

CHECK:
(wat Fabian moet controleren)

STOP

---

## PROJECTSTRUCTUUR

brasco-os/
├── AGENTS.md
├── BRASCO_BACKUP.md
├── main.js
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── components/

Regels:

- main.js blijft in root
- main.jsx blijft in src
- App.jsx is de hoofd-UI
- package.json bepaalt scripts
- dist en node_modules niet handmatig aanpassen
- geen extra lagen zonder duidelijke reden

---

## TECHNISCHE REGELS

Voorkom:

- meerdere npm processen
- meerdere Vite servers
- oplopende poorten
- meerdere Electron instanties
- onnodige nieuwe dependencies
- wijzigingen buiten de projectmap

Gebruik bestaande code eerst.

---

## UI REGELS

De interface moet voelen als een professioneel lokaal command system.

Richting:

- donker
- rustig
- scherp
- professioneel
- reader-achtig
- weinig ruis
- duidelijke status
- duidelijke prioriteit
- modules met betekenis

Hoofdrollen in de UI:

- Commandor
- Executor
- Watcher
- Specialist
- System

De app mag rijker zijn dan een simpele vierknoppen-app, maar mag niet chaotisch worden.

---

## DATA REGELS

Echte data wordt later gekoppeld.

Volgorde:

1. Eerst UI-concept goed zetten
2. Daarna bestaande data inventariseren
3. Daarna lokale data lezen
4. Daarna lokale data tonen
5. Daarna pas schrijven
6. Daarna pas backups/logs automatiseren

Niet meteen database, scripts of schrijfacties toevoegen zonder opdracht.

---

## RESUME BRASCO

Bij:

RESUME BRASCO

Altijd:

1. Korte samenvatting
2. Huidige status
3. Open taken
4. Exact 1 volgende stap

Daarna:

STAP X

WAAR:
WAT:
HOE:
CHECK:
STOP

---

## BACKUP

Gebruik backup vóór belangrijke wijzigingen.

Backup-format:

Brasco_Backup:

- datum:
- status:
- laatste acties:
- openstaande taken:
- volgende stap:
- gebruikte apps:
- technische status:
- screenshots:
- aandachtspunten:

---

## DONE

Een taak is pas klaar wanneer:

- wijziging is uitgevoerd
- app start
- build/dev server werkt
- geen zichtbare errors
- screenshot is bevestigd

---

## BELANGRIJK

Niet blind vereenvoudigen.

Altijd:

→ concept bewaken  
→ 1 stap uitvoeren  
→ screenshot controleren  
→ volgende stap bepalen
