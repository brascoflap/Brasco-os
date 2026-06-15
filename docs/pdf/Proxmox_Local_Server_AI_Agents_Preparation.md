# Proxmox Local Server + AI/Agents Preparation Report

## Titel

**Proxmox Local Server + AI/Agents Preparation Report**  
**Project:** Proxmox Local Server Integration  
**Omgeving:** lokaal netwerk  
**Status:** voorbereiding en documentatie  
**Belangrijk:** dit document bevat geen wachtwoorden, tokens of private keys.

## Serverdoel

De Proxmox-server wordt voorbereid als lokale infrastructuurlaag voor Brasco OS. De server kan later VM's, containers, lokale AI's, agents, opslag, backups en gecontroleerde automatisering ondersteunen.

De eerste koppeling is read-only. Brasco OS mag pas statusinformatie lezen nadat een aparte Proxmox user of token is aangemaakt met minimale rechten.

## Lokaal netwerkgebruik

De koppeling is bedoeld voor gebruik binnen het eigen lokale netwerk. Er wordt geen publieke toegang verondersteld en er worden geen gevoelige verbindingsgegevens vastgelegd.

### Benodigde IP-gegevens

- Proxmox IP-adres: [NOG INVULLEN]
- Proxmox hostnaam: [NOG INVULLEN]
- Proxmox webinterface URL: https://[IP]:8006
- Netwerknaam/VLAN indien aanwezig: [NOG INVULLEN]
- Gateway/router IP: [NOG INVULLEN]
- DNS-server: [NOG INVULLEN]

## AI/agents-voorbereiding

Brasco OS moet later kunnen zien welke lokale AI's en agents aanwezig zijn, waar ze draaien en welke taken zij mogen uitvoeren. De eerste inventarisatie legt alleen structuur vast.

- Welke lokale AI's draaien er: [NOG INVULLEN]
- Welke agents zijn aanwezig: [NOG INVULLEN]
- Draait AI in VM, container of extern: [NOG INVULLEN]
- Mag Brasco OS alleen lezen of ook acties uitvoeren: [NOG BESLISSEN]
- Welke taken mogen automatisch: [NOG BESLISSEN]
- Welke taken vereisen handmatige goedkeuring: [NOG BESLISSEN]

## Benodigde users/rechten

- Admin eigenaar: Fabian
- Proxmox admin user: [NOG INVULLEN]
- Brasco OS read-only user: [NOG AANMAKEN]
- Agent executor user: [NOG AANMAKEN]
- Toegestane acties per user: [NOG DEFINIEREN]

Aanbevolen richting: aparte users met minimale rechten. Root-login wordt niet als aanbevolen werkwijze gebruikt.

## API-token voorbereiding

- API-token naam: [NOG AANMAKEN]
- Tokenrechten: [NOG DEFINIEREN]
- Tokenopslag: [NIET OPSLAAN IN REPO]
- Rotatiebeleid: [NOG DEFINIEREN]

Tokens mogen niet in Brasco OS-bronbestanden, documentatie of GitHub worden opgeslagen.

## SSH-key voorbereiding

- SSH-key pad: [NOG INVULLEN]
- Keytype: [NOG INVULLEN]
- Passphrasebeleid: [NOG DEFINIEREN]
- Opslaglocatie: [NIET OPSLAAN IN REPO]

Private keys mogen niet in deze projectmap of GitHub terechtkomen. Documenteer alleen paden/placeholders.

## Storage en backupstrategie

- Storage namen: [NOG INVULLEN]
- Backup-locatie: [NOG INVULLEN]
- Backupfrequentie: [NOG DEFINIEREN]
- Retentiebeleid: [NOG DEFINIEREN]
- Test restore procedure: [NOG DEFINIEREN]

Brasco OS mag in de eerste fase alleen backupstatus tonen, geen backupjobs wijzigen of verwijderen.

## Risico's

- Te brede Proxmox-rechten voor Brasco OS.
- Secrets in documentatie of GitHub.
- Onbedoelde destructive actions.
- AI/agents met te veel uitvoeringsrechten.
- Geen scheiding tussen read-only dashboard en uitvoerende laag.
- Onvoldoende backup- en rollbackplan.

## Veiligheidsmodel

- Fase 1 is read-only.
- Geen root-wachtwoorden in Brasco OS.
- Geen secrets naar GitHub.
- Geen destructive actions zonder expliciete toestemming.
- Logs/status lezen mag pas na aparte Proxmox user/token.
- VM verwijderen, rebooten of storage wijzigen blijft geblokkeerd zonder handmatige bevestiging.

## Checklist

### Serverdata

- [ ] Proxmox IP-adres: [NOG INVULLEN]
- [ ] Proxmox hostnaam: [NOG INVULLEN]
- [ ] Proxmox webinterface URL: https://[IP]:8006
- [ ] Netwerknaam/VLAN indien aanwezig: [NOG INVULLEN]
- [ ] Gateway/router IP: [NOG INVULLEN]
- [ ] DNS-server: [NOG INVULLEN]
- [ ] Storage namen: [NOG INVULLEN]
- [ ] Backup-locatie: [NOG INVULLEN]

### Gebruikers/rechten

- [ ] Admin eigenaar: Fabian
- [ ] Proxmox admin user: [NOG INVULLEN]
- [ ] Brasco OS read-only user: [NOG AANMAKEN]
- [ ] Agent executor user: [NOG AANMAKEN]
- [ ] API-token naam: [NOG AANMAKEN]
- [ ] SSH-key pad: [NOG INVULLEN]
- [ ] Toegestane acties per user: [NOG DEFINIEREN]

### AI/agents

- [ ] Welke lokale AI's draaien er: [NOG INVULLEN]
- [ ] Welke agents zijn aanwezig: [NOG INVULLEN]
- [ ] Draait AI in VM, container of extern: [NOG INVULLEN]
- [ ] Mag Brasco OS alleen lezen of ook acties uitvoeren: [NOG BESLISSEN]
- [ ] Welke taken mogen automatisch: [NOG BESLISSEN]
- [ ] Welke taken vereisen handmatige goedkeuring: [NOG BESLISSEN]

## Volgende stap

Vul alleen niet-gevoelige inventarisatiegegevens in. Maak daarna een read-only Proxmox user/token buiten GitHub en koppel Brasco OS pas nadat het veiligheidsmodel is bevestigd.
