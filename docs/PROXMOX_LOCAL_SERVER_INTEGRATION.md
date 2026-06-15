# Proxmox Local Server Integration

## Korte samenvatting

Deze documentatieset bereidt een veilige lokale koppeling voor tussen Brasco OS, een Proxmox-server binnen het eigen netwerk en toekomstige lokale AI's of agents. De eerste fase is bewust read-only: Brasco OS mag alleen statusinformatie tonen nadat er een aparte Proxmox user of token is ingericht.

## Doel van de serverkoppeling

Het doel is om Brasco OS later gecontroleerd te laten samenwerken met lokale infrastructuur:

- Proxmox-status lezen.
- VM's, containers, storage en backups zichtbaar maken.
- Lokale AI's en agents in kaart brengen.
- Agent-uitvoering voorbereiden zonder directe destructieve rechten.
- Automatisering alleen toestaan na expliciete goedkeuring.

## Gewenste architectuur

```text
Brasco OS
  -> read-only statuslaag
  -> Proxmox API user/token
  -> Proxmox host binnen lokaal netwerk
  -> VM's / containers / lokale AI's / agents
  -> optionele uitvoeringslaag met handmatige bevestiging
```

De eerste koppeling gebruikt geen root-login, geen opgeslagen wachtwoorden en geen secrets in GitHub. Gevoelige waarden worden alleen als placeholders vastgelegd.

## Brasco OS-rollen

### Commandor

Bepaalt prioriteit, formuleert de volgende stap en zet serveropdrachten eerst om naar testvoorstellen.

### Executor

Voert technische voorbereiding uit, zoals documentatie, read-only dashboard, API-koppeling en later gecontroleerde acties.

### Watcher

Signaleert risico's, ontbrekende serverdata, ontbrekende users/rechten en gevaarlijke acties.

### Specialist

Adviseert over Proxmox-architectuur, lokale AI/agents, netwerksegmentatie, rechtenmodel en automation design.

### System

Bewaakt bestandsstructuur, buildstatus, documentatiebackup, placeholders en het verbod op secrets.

## Fases

### 1. Inventarisatie

Doel: alle benodigde server-, netwerk-, user- en agentgegevens verzamelen zonder secrets op te slaan.

### 2. Read-only dashboard

Doel: Brasco OS toont alleen statusinformatie zoals host, VM's, containers, storage, backupstatus en agentstatus.

### 3. Beperkte acties

Doel: alleen laag-risico acties toestaan, bijvoorbeeld status verversen of niet-destructieve checks uitvoeren.

### 4. AI/agent-koppeling

Doel: lokale AI's en agents zichtbaar maken en later gecontroleerd taken laten uitvoeren.

### 5. Automatisering met goedkeuring

Doel: automatisering alleen via voorstel, impactoverzicht en handmatige bevestiging.

## Risico's

- Onbedoelde toegang tot Proxmox met te hoge rechten.
- Secrets per ongeluk opslaan in projectbestanden of GitHub.
- Root-login als standaard werkwijze gebruiken.
- Destructieve acties zoals VM verwijderen, rebooten of storage wijzigen.
- Onvoldoende scheiding tussen read-only status en uitvoerende agents.
- Onduidelijke verantwoordelijkheden per user/token.

## Veiligheidsregels

- Fase 1 is read-only.
- Geen root-wachtwoorden in Brasco OS.
- Geen tokens opslaan.
- Geen private keys opslaan.
- Geen secrets naar GitHub.
- Root-login wordt niet gedocumenteerd als aanbevolen werkwijze.
- Logs/status lezen mag pas na aparte Proxmox user/token.
- Destructieve acties vereisen expliciete handmatige bevestiging.
- VM verwijderen, rebooten of storage wijzigen blijft geblokkeerd zonder aparte toestemming.
- Alle gevoelige waarden blijven placeholders.

## Benodigde serverdata

- Proxmox IP-adres: [NOG INVULLEN]
- Proxmox hostnaam: [NOG INVULLEN]
- Proxmox webinterface URL: https://[IP]:8006
- Netwerknaam/VLAN indien aanwezig: [NOG INVULLEN]
- Gateway/router IP: [NOG INVULLEN]
- DNS-server: [NOG INVULLEN]
- Storage namen: [NOG INVULLEN]
- Backup-locatie: [NOG INVULLEN]

## Benodigde gebruikersdata

- Admin eigenaar: Fabian
- Proxmox admin user: [NOG INVULLEN]
- Brasco OS read-only user: [NOG AANMAKEN]
- Agent executor user: [NOG AANMAKEN]
- API-token naam: [NOG AANMAKEN]
- SSH-key pad: [NOG INVULLEN]
- Toegestane acties per user: [NOG DEFINIEREN]

## AI/agents data nodig

- Welke lokale AI's draaien er: [NOG INVULLEN]
- Welke agents zijn aanwezig: [NOG INVULLEN]
- Draait AI in VM, container of extern: [NOG INVULLEN]
- Mag Brasco OS alleen lezen of ook acties uitvoeren: [NOG BESLISSEN]
- Welke taken mogen automatisch: [NOG BESLISSEN]
- Welke taken vereisen handmatige goedkeuring: [NOG BESLISSEN]

## Open vragen

- Welke Proxmox-node is leidend voor de eerste koppeling?
- Welke user wordt read-only ingericht?
- Welke statusvelden wil Brasco OS als eerste tonen?
- Welke lokale AI's of agents bestaan al?
- Welke acties blijven altijd handmatig?
- Waar mogen logs lokaal worden opgeslagen?
- Komt er later een aparte backend of blijft Brasco OS local-first?

## Volgende acties

1. Vul serverdata in zonder secrets.
2. Definieer read-only user en rechtenmodel.
3. Maak een lijst met VM's, containers en agents.
4. Bepaal welke statusinformatie in Brasco OS zichtbaar moet worden.
5. Ontwerp een read-only dashboard.
6. Laat Watcher blokkades en ontbrekende data tonen.
7. Bouw pas daarna beperkte acties met bevestiging.
